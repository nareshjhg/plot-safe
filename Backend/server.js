const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/buyers", require("./routes/buyerRoutes"));
app.use("/api/dealers", require("./routes/dealers"));
app.use("/api/verifiers", require("./routes/verifierRoutes"));
app.use("/api/verification", require("./routes/buyer/verificationRoutes"));
app.use("/api/reports", require("./routes/buyer/reportRoutes"));
app.use("/api/invoices", require("./routes/buyer/invoiceRoutes"));
app.use("/api/status", require("./routes/buyer/propertyStatusRoutes"));
app.use("/api/dealer/clients", require("./routes/dealer/clientRoutes"));
app.use("/api/dealer/properties", require("./routes/dealer/propertyRoutes"));
app.use("/api/subscription", require("./routes/subscriptionRoutes"));
app.use("/api/admin", require("./routes/admin/adminRoutes"));        // 🔥 ADD
app.use("/api/system", require("./routes/admin/systemRoutes"));










// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
