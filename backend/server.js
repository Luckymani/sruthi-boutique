require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ROUTER IMPORTS
const { authRouter } = require("./Routes/authRouter");

const app = express();

// MIDDELWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ROUTES
app.use("/auth", authRouter);

async function startServer() {
  try {
    const port = process.env.PORT;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database");

    app.listen(port, () => {
      console.log("server has started on port,", port);
    });
  } catch (error) {
    console.log(error.message);
  }
}

startServer();
