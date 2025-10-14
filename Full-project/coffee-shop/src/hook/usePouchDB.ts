import { useState, useEffect, useCallback } from "react";
import { localDB } from "../db/pouchdb"; 

export interface Order {
  _id?: string;
  _rev?: string; 
  date: string;
  time: string;
  paymentType: string;
  cardDetails: string;
  amount: number;
  coffeeType: string;
}

const ITEMS_PER_PAGE = 10;

export interface NewOrderForm {
  date: string;
  time: string;
  paymentType: string;
  cardDetails: string;
  amount: string; 
  coffeeType: string;
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); 
  const [form, setForm] = useState<NewOrderForm>({
    date: "",
    time: "",
    paymentType: "",
    cardDetails: "",
    amount: "",
    coffeeType: ""
  });

  const fetchOrders = useCallback(async () => {
    const res = await localDB.allDocs({ include_docs: true });
    
    const transformedOrders = res.rows
      .map((r) => r.doc)
      .filter(doc => doc && !doc._id.startsWith("_design/")) 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((doc: any) => ({
        _id: doc._id,
        _rev: doc._rev,
        date: doc.date,
        time: doc.time,
        paymentType: doc.payment_type || doc.paymentType,
        cardDetails: doc.card || doc.cardDetails,
        amount: parseFloat(doc.amount_eur || doc.amount || "0"),
        coffeeType: doc.coffee_type || doc.coffeeType,
      } as Order));

    const sortedOrders = transformedOrders.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`).getTime();
        const dateB = new Date(`${b.date}T${b.time}`).getTime();
        return dateB - dateA; 
    });

    setOrders(sortedOrders);
  }, []);

  useEffect(() => {
    fetchOrders();
    const changes = localDB
      .changes({ live: true, since: "now", include_docs: true })
      .on("change", () => {
        setCurrentPage(1); 
        fetchOrders();
      })
      .on("error", (err) => console.error("PouchDB Changes Error:", err));

    return () => changes.cancel();
  }, [fetchOrders]);

  const selectOrder = (order: Order) => {
    setSelectedOrder(order);
    setForm({
      date: order.date,
      time: order.time,
      paymentType: order.paymentType === "Cash" ? "Cash" : "Card",
      cardDetails:
        order.paymentType === "Cash"
          ? "Paid with cash"
          : order.cardDetails,
      amount: order.amount.toString(),
      coffeeType: order.coffeeType,
    });
  };

  const resetForm = () => {
    setSelectedOrder(null);
    setForm({
        date: "",
        time: "",
        paymentType: "",
        cardDetails: "",
        amount: "",
        coffeeType: "",
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData: Order = {
      date: form.date,
      time: form.time,
      payment_type: form.paymentType,
      card: form.cardDetails, 
      amount_eur: parseFloat(form.amount || "0"), 
      coffee_type: form.coffeeType, 
    } as unknown as Order;

    if (selectedOrder && selectedOrder._id && selectedOrder._rev) {
      await localDB.put({
          ...orderData,
          _id: selectedOrder._id,
          _rev: selectedOrder._rev,
      });
    } else {
      await localDB.post(orderData); 
    }

    resetForm();
  };

  const handleDelete = async () => {
      if (selectedOrder && selectedOrder._id && selectedOrder._rev) {
          if (window.confirm(`Are you sure you want to delete the order from ${selectedOrder.date} at ${selectedOrder.time}?`)) {
              await localDB.remove(selectedOrder._id, selectedOrder._rev);
              resetForm(); 
          }
      }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { id, value } = e.target;
    setForm((prev) => {
      if (id === "paymentType" && value === "Cash") {
        return { ...prev, paymentType: value, cardDetails: "Paid with cash" };
      }
      if (id === "paymentType" && value !== "Cash") {
        return { ...prev, paymentType: value, cardDetails: "" };
      }
      if (id === "cardDetails" && prev.paymentType === "Cash") {
        return prev;
      }
      return { ...prev, [id]: value };
    });
  };
  
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = orders.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentOrders,
    form,
    currentPage,
    totalPages,
    ordersLength: orders.length,
    itemsPerPage: ITEMS_PER_PAGE,
    selectedOrder, 
    handleSubmit,
    handleChange,
    handlePageChange,
    selectOrder,   
    handleDelete, 
    resetForm      
  };
}