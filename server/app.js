const express = require("express");
const app = express();
const AuthRouter = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");

const EmloyeeRouter = require("./routes/employee");
const ProductRouter = require("./routes/product");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "14MB" }));
app.use("/uploads", express.static("uploads"));

app.use("/api/employee", EmloyeeRouter);
app.use("/api/product", ProductRouter);
app.use("/api", AuthRouter);

app.get("/", function (req, res) {
  res.send("hello");
  //res.render("home");
});

app.listen(process.env.PORT, function () {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
