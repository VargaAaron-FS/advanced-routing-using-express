const express = require("express");
const app = express();

// GET / HTTP/1.1 (Retrieving info)
app.get("/", (request, response) => {
  response.send("Home Page! GET");
});

// POST / HTTP/1.1 (Sending info)
app.post("/", (request, response) => {
  response.send("Home Page! POST");
});

// GET /products/all HTTP/1.1
app.get("/products/all", (request, response) => {
  console.log(request.query.pageNum);
  console.log(request.query.sortBy);
  console.log(request.query.orderBy);
  response.send("Products - Page Number: " + request.query.pageNum);
});

// GET /products/all?sort=price HTTP/1.1
// app.get("/products/all", (request, response) => {
//   let sortBy = request.query.sortBy;
//   response.send("Products - Sort by: " + sortBy);
// });

// GET /products/424 HTTP/1.1
app.get("/products/:productId", (request, response) => {
  response.send("Product - Product ID: " + request.params.productId);
});

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get("/products/:productId-:productName", (request, response) => {
  response.send(
    "Product Page! Product name: " +
      request.params.productName +
      ", Product id: " +
      request.params.productId
  );
});

// GET /products/nike-large-white-shoe HTTP/1.1
// app.get("/products/:productName", (request, response) => {
//   response.send("Product Page! Product name: " + request.params.productName);
// });

app.listen(3000);
