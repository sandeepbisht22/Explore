import express from "express";
import connectDB from "./db/DB";
import bodyParser from "body-parser";
import placeRouter from "./route/PlaceRouter";

const app = express();

//Making connection with DB
connectDB();

//Adding middleware
app.use(express.json({ strict: false }));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.json({
    error: "Hit the root of CAP",
  });
});

app.use("/place", placeRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
