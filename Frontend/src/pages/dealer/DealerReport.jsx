import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";

// Charts
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Export
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const DealerReport = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [dateRange, setDateRange] = useState("");

  // Fetch dealer properties
  const loadData = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/dealer/properties", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProperties(res.data.properties);
    } catch (err) {
      console.log("Load Error:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filters
  const filteredData = properties.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status ? p.cluStatus === status : true;

    const matchPrice =
      priceRange === ""
        ? true
        : priceRange === "low"
        ? p.price < 1000000
        : priceRange === "mid"
        ? p.price >= 1000000 && p.price < 5000000
        : p.price >= 5000000;

    const matchDate = dateRange
      ? new Date(p.createdAt) >= new Date(dateRange)
      : true;

    return matchSearch && matchStatus && matchPrice && matchDate;
  });

  // Chart: Monthly property count
  const months = Array(12).fill(0);
  properties.forEach((p) => {
    const month = new Date(p.createdAt).getMonth();
    months[month]++;
  });

  const barData = {
    labels: [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec",
    ],
    datasets: [
      {
        label: "Properties Added",
        data: months,
        backgroundColor: "rgba(34,197,94,0.6)",
      },
    ],
  };

  // Pie Chart: Status
  const statusCount = {
    Approved: properties.filter((p) => p.cluStatus === "Approved").length,
    Pending: properties.filter((p) => p.cluStatus === "Pending").length,
    Rejected: properties.filter((p) => p.cluStatus === "Rejected").length,
  };

  const pieData = {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        data: [
          statusCount.Approved,
          statusCount.Pending,
          statusCount.Rejected,
        ],
        backgroundColor: [
          "rgba(34,197,94,0.7)",
          "rgba(234,179,8,0.7)",
          "rgba(239,68,68,0.7)",
        ],
      },
    ],
  };

  // Export Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "Dealer_Report.xlsx");
  };

  // Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Dealer Report", 14, 10);

    const tableData = filteredData.map((p) => [
      p.title,
      p.address,
      p.price,
      p.cluStatus,
      new Date(p.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [["Title", "Address", "Price", "Status", "Date"]],
      body: tableData,
    });

    doc.save("Dealer_Report.pdf");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Dealer Report
        </h1>

        {/* Filters Section */}
        <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Status Filter */}
          <select
            className="p-2 border rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Price Filter */}
          <select
            className="p-2 border rounded"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">All Price</option>
            <option value="low">Below 10 Lakh</option>
            <option value="mid">10 Lakh - 50 Lakh</option>
            <option value="high">Above 50 Lakh</option>
          </select>

          {/* Date Filter */}
          <input
            type="date"
            className="p-2 border rounded"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </div>

        {/* Export Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={exportPDF}
            className="bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Download PDF
          </button>

          <button
            onClick={exportExcel}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            Export Excel
          </button>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Monthly Performance</h2>
            <Bar data={barData} />
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">CLU Status Breakdown</h2>
            <Pie data={pieData} />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No Data Found
                  </td>
                </tr>
              ) : (
                filteredData.map((p) => (
                  <tr key={p._id} className="border hover:bg-gray-100">
                    <td className="p-2 border">{p.title}</td>
                    <td className="p-2 border">{p.address}</td>
                    <td className="p-2 border">₹ {p.price}</td>
                    <td className="p-2 border">{p.cluStatus}</td>
                    <td className="p-2 border">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DealerReport;
