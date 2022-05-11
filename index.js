const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const productRouter = require("./routes/Products");
app.set("views", __dirname + "/templates/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home", { title: "Home", message: "Hello there!", users: [
      { name: "Aaron Varga", email: "apvarga89@icloud.com" },
      { name: "Michael Varga", email: "mvargs@gmail.com" },
      { name: "Sean Varga", email: "seaniebonners@yahoo.com" },
    ] });
});

app.use("/products", productRouter);

app.listen(3000);