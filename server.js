const express = require("express");
// const sequelize = require("sequelize");
const sequelize = require("./config/database");
const cors = require("cors");
const path = require("path");

const app = express();
const cookieParser = require("cookie-parser");

//Routes here

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",").map((origin) =>
  origin.trim(),
);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//use routes
//app.use=(routeHere)

const port = process.env.PORT;

sequelize
  .sync()
  .then(() => {
    app.listen(port);
    console.log(`Connected on port ${port}`);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = app;
