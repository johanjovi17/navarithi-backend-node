import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Member } from "./models/memberModel.js";
import membersRoute from "./routes/membersRoute.js";

const app = express();

//middleware for parsing request body
app.use(express.json());

//main route
app.get("/", (req, res) => {
  res.json("main page route");
});

app.use("/members", membersRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => console.log("App connected to DB"))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log("server is running"));
