const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");

const DbConnection = require("./DataBaseConnection");

const AdminRouter = require("./Routes/adminRoutes");
const UserRouter = require("./Routes/userRoutes");
const PostRouter = require("./Routes/postRouter");
const Contact = require("./Routes/contactUs");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
env.config();

// DataBase Connection
DbConnection();

app.use("/auth/admin", AdminRouter);
app.use("/auth/user", UserRouter);
app.use("/post", PostRouter);
app.use("/message", Contact);

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("your server runing at:" + port);
});
