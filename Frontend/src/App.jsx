// Starter React + Vite + Tailwind + Routing + Pages + Layout
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CheckProperty from "./pages/CheckProperty";
import Checklist from "./pages/Checklist";
import DealerCheck from "./pages/DealerCheck";
import RiskScore from "./pages/RiskScore";
import ApprovedColonies from "./pages/ApprovedColonies";
import ReportFraud from "./pages/ReportFraud";
import UploadDocs from "./pages/UploadDocs";
import Learn from "./pages/Learn";
import Community from "./pages/Community";
import Alerts from "./pages/Alerts";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminDealers from "./pages/admin/Dealers";
import AdminReports from "./pages/admin/Reports";
import AdminDocs from "./pages/admin/Docs";
import AdminBlogs from "./pages/admin/Blogs";
import AdminColonies from "./pages/admin/Colonies";
import './index.css';
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import ColonyStatusPage from "./pages/colony-map";
import ColonyAdmin from "./pages/admin/ColonyAdmin";
import AddColonyForm from "./components/AddColonyForm";
import PublicDashboard from "./pages/public/Dashboard";
import DealerDashboard from "./pages/dealer/Dashboard";
import AddProperty from "./pages/dealer/AddProperty";
import MyListings from "./pages/dealer/MyListings";
import UploadDocuments from "./pages/dealer/UploadDocuments";
import CheckColonyStatus from "./pages/dealer/CheckColonyStatus";
import AreaApprovalMap from "./pages/dealer/AreaApprovalMap";
import FraudReportStatus from "./pages/dealer/FraudReportStatus";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check-property" element={<CheckProperty />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/dealer-check" element={<DealerCheck />} />
            <Route path="/risk-score" element={<RiskScore />} />
            <Route path="/approved-colonies" element={<ApprovedColonies />} />
            <Route path="/report-fraud" element={<ReportFraud />} />
            <Route path="/upload-docs" element={<UploadDocs />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/community" element={<Community />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Sign-up" element={<Signup />} />
            <Route path="/About" element={<About />} />
            <Route path="/map" element={<ColonyStatusPage />} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/dealers" element={<AdminDealers />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/docs" element={<AdminDocs />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
            <Route path="/admin/colonies-List" element={<AdminColonies />} />
            <Route path="/admin/colonies" element={<ColonyAdmin />} />
            <Route path="/admin/Add-colonies-form" element={<AddColonyForm />} />

            {/* Public Routes */}
            <Route path="/public_Dashboard" element={<PublicDashboard />} />
            {/* Public Routes */}
            <Route path="/dealer_Dashboard" element={<DealerDashboard />} />
            <Route path="/Add_property" element={<AddProperty />} />
            <Route path="/dealer/my-properties" element={<MyListings />} />
            <Route path="/dealer/upload-docs" element={<UploadDocuments/>} />
            <Route path="/dealer/check-status" element={<CheckColonyStatus/>} />
            <Route path="/dealer/map" element={<AreaApprovalMap/>} />
            <Route path="/dealer/fraud-reports" element={<FraudReportStatus/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
