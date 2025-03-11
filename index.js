require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(cors);
app.use(express.urlencoded({ extended: true }));
// Endpoint to test the server
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

// Get the port from .env or use a default value
const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
  console.log(`Listening ${PORT}`);
});
