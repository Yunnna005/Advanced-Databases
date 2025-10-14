import { useOrders } from "../hook/usePouchDB"; 

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

export default function AddOrder() {
  const {
    currentOrders,
    form,
    currentPage,
    totalPages,
    ordersLength,
    itemsPerPage,
    selectedOrder, 
    handleSubmit,
    handleChange,
    handlePageChange,
    selectOrder,   
    handleDelete,  
    resetForm     
  } = useOrders();

  const isEditing = !!selectedOrder; 

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200 p-8 gap-8 py-24">
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {isEditing ? "Edit Order" : "Add New Order"}
        </h1>
        <form onSubmit={handleSubmit}>          
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
            max={today}
          />

          <label className="block mb-2 text-gray-700">Time</label>
          <input id="time" type="time" value={form.time} onChange={handleChange} className="w-full mb-4 border p-2 rounded" />

          <label className="block mb-2 text-gray-700">Payment Type</label>
          <select id="paymentType" value={form.paymentType} onChange={handleChange} className="w-full mb-4 border p-2 rounded">
            <option value="">Select payment type</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>

          <label className="block mb-2 text-gray-700">Card Details</label>
          <input id="cardDetails" type="text" placeholder="**** **** **** 1234" value={form.cardDetails} onChange={handleChange} className="w-full mb-4 border p-2 rounded" />

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

          <label className="block mb-2 text-gray-700">Amount (€)</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            max={5.5}
            placeholder="Enter amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full mb-4 border p-2 rounded"
          />

          <div className="flex gap-4">
            <button 
              type="submit" 
              className={`font-semibold py-2 px-4 rounded ${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
            >
              {isEditing ? "Update Order" : "Add Order"}
            </button>

            {isEditing && (
              <>
                <button 
                  type="button" 
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </button>
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 rounded"
                >
                  Cancel Edit
                </button>
              </>
            )}
          </div>
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
            {currentOrders.length > 0 ? (
              currentOrders.map((order) => (
                <tr 
                  key={order._id} 
                  onClick={() => selectOrder(order)}
                  className={`cursor-pointer hover:bg-blue-50 ${selectedOrder?._id === order._id ? 'bg-blue-100' : 'bg-white'}`}
                >
                  <td className="border p-2">{order.date}</td>
                  <td className="border p-2">{order.time}</td>
                  <td className="border p-2">{order.paymentType}</td>
                  <td className="border p-2">{order.cardDetails}</td>
                  <td className="border p-2">{order.amount !== undefined ? order.amount.toFixed(2) : "—"}</td>
                  <td className="border p-2">{order.coffeeType}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {ordersLength > itemsPerPage && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}