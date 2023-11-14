const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const dbConnect = require("./config/databse");

const blogRoutes = require("./routes/blogRoutes");
app.use("/api/v1", blogRoutes);

app.listen(process.env.PORT, () => {
  console.log("server instantiated");
});

dbConnect();
