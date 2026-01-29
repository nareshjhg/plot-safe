import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";

const Payments = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/api/invoices", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setInvoices(res.data);
  };

  const downloadInvoice = (id) => {
    window.open(
      `http://localhost:5000/api/invoices/download/${id}`,
      "_blank"
    );
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          💳 Payments & Invoices
        </h1>

        <div className="bg-white shadow rounded-xl p-6">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((inv) => (
                <tr key={inv._id} className="border-b">
                  <td>{inv.invoiceNumber}</td>
                  <td>{new Date(inv.createdAt).toLocaleDateString()}</td>
                  <td>₹{inv.amount}</td>
                  <td
                    className={
                      inv.status === "paid"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }
                  >
                    {inv.status}
                  </td>
                  <td>
                    {inv.status === "paid" ? (
                      <button
                        onClick={() => downloadInvoice(inv._id)}
                        className="text-blue-600 hover:underline"
                      >
                        Download
                      </button>
                    ) : (
                      <button className="text-blue-600 hover:underline">
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
