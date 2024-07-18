require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/db");
const authRoutes = require("../backend/routes/authRoutes");
const employeeRoutes = require("../backend/routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/employees", employeeRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
});
