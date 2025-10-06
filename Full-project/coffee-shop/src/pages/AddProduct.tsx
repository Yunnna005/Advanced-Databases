import { useState } from "react";

interface Order {
  id: string;
  date: string;
  time: string;
  paymentType: string;
  cardDetails: string;
  amount: number;
  coffeeType: string;
}

export default function AddOrderUI() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [form, setForm] = useState({
    date: "",
    time: "",
    paymentType: "",
    cardDetails: "",
    amount: "",
    coffeeType: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: Order = {
      id: new Date().toISOString(),
      date: form.date,
      time: form.time,
      paymentType: form.paymentType,
      cardDetails: form.cardDetails,
      amount: parseFloat(form.amount || "0"),
      coffeeType: form.coffeeType
    };

    setOrders([...orders, newOrder]);
    setForm({
      date: "",
      time: "",
      paymentType: "",
      cardDetails: "",
      amount: "",
      coffeeType: ""
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200 p-8 gap-8 py-24">
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Order</h1>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />

          <label className="block mb-2 text-gray-700">Time</label>
          <input
            id="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />

          <label className="block mb-2 text-gray-700">Payment Type</label>
          <select
            id="paymentType"
            value={form.paymentType}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          >
            <option value="">Select payment type</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>

          <label className="block mb-2 text-gray-700">Card Details</label>
          <input
            id="cardDetails"
            type="text"
            placeholder="**** **** **** 1234"
            value={form.cardDetails}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />

          <label className="block mb-2 text-gray-700">Amount (€)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />

          <label className="block mb-2 text-gray-700">Coffee Type</label>
          <select
            id="coffeeType"
            value={form.coffeeType}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          >
            <option value="">Select coffee type</option>
            <option value="Americano">Americano</option>
            <option value="Americano with milk">Americano with milk</option>
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Espresso">Espresso</option>
            <option value="Cortado">Cortado</option>
            <option value="Hot Chocolate">Hot Chocolate</option>
            <option value="Cocao">Cocao</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Order
          </button>
        </form>
      </div>

      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Orders</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-left">Time</th>
              <th className="border p-2 text-left">Payment</th>
              <th className="border p-2 text-left">Card</th>
              <th className="border p-2 text-left">Amount (€)</th>
              <th className="border p-2 text-left">Coffee</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border p-2">{order.date}</td>
                <td className="border p-2">{order.time}</td>
                <td className="border p-2">{order.paymentType}</td>
                <td className="border p-2">{order.cardDetails}</td>
                <td className="border p-2">{order.amount.toFixed(2)}</td>
                <td className="border p-2">{order.coffeeType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
