import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const CheckProperty = lazy(() => import("./pages/CheckProperty"));
const Checklist = lazy(() => import("./pages/Checklist"));
const DealerCheck = lazy(() => import("./pages/DealerCheck"));
const RiskScore = lazy(() => import("./pages/RiskScore"));
const ApprovedColonies = lazy(() => import("./pages/ApprovedColonies"));
const ReportFraud = lazy(() => import("./pages/ReportFraud"));
const UploadDocs = lazy(() => import("./pages/UploadDocs"));
const Learn = lazy(() => import("./pages/Learn"));
const Community = lazy(() => import("./pages/Community"));
const Alerts = lazy(() => import("./pages/Alerts"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const ColonyStatusPage = lazy(() => import("./pages/colony-map"));

// Admin
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminDealers = lazy(() => import("./pages/admin/Dealers"));
const AdminReports = lazy(() => import("./pages/admin/Reports"));
const AdminDocs = lazy(() => import("./pages/admin/Docs"));
const AdminBlogs = lazy(() => import("./pages/admin/Blogs"));
const AdminColonies = lazy(() => import("./pages/admin/Colonies"));
const ColonyAdmin = lazy(() => import("./pages/admin/ColonyAdmin"));
const AddColonyForm = lazy(() => import("./components/AddColonyForm"));

// Public
const PublicDashboard = lazy(() => import("./pages/public/Dashboard"));

// Dealer
const DealerDashboard = lazy(() => import("./pages/dealer/Dashboard"));
const AddProperty = lazy(() => import("./pages/dealer/AddProperty"));
const MyListings = lazy(() => import("./pages/dealer/MyListings"));
const UploadDocuments = lazy(() => import("./pages/dealer/UploadDocuments"));
const CheckColonyStatus = lazy(() => import("./pages/dealer/CheckColonyStatus"));
const AreaApprovalMap = lazy(() => import("./pages/dealer/AreaApprovalMap"));
const FraudReportStatus = lazy(() => import("./pages/dealer/FraudReportStatus"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              {/* General */}
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/map" element={<ColonyStatusPage />} />

              {/* Admin */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/dealers" element={<AdminDealers />} />
              <Route path="/admin/reports" element={<AdminReports />} />
              <Route path="/admin/docs" element={<AdminDocs />} />
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/colonies-list" element={<AdminColonies />} />
              <Route path="/admin/colonies" element={<ColonyAdmin />} />
              <Route path="/admin/add-colony-form" element={<AddColonyForm />} />

              {/* Public */}
              <Route path="/public/dashboard" element={<PublicDashboard />} />

              {/* Dealer */}
              <Route path="/dealer/dashboard" element={<DealerDashboard />} />
              <Route path="/dealer/add-property" element={<AddProperty />} />
              <Route path="/dealer/my-properties" element={<MyListings />} />
              <Route path="/dealer/upload-docs" element={<UploadDocuments />} />
              <Route path="/dealer/check-status" element={<CheckColonyStatus />} />
              <Route path="/dealer/map" element={<AreaApprovalMap />} />
              <Route path="/dealer/fraud-reports" element={<FraudReportStatus />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
