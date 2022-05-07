const express = require("express");
const app = express();

// GET / HTTP/1.1 (Retrieving info)
// app.get("/", (request, response) => {
//   response.send("Home Page! GET");
// });

// POST / HTTP/1.1 (Sending info)
// app.post("/", (request, response) => {
//   response.send("Home Page! POST");
// });

// GET /products/all HTTP/1.1
// Page: 2
// Sort: price
// Order: desc
app.get("/products/all", (request, response) => {
  request.headers.pageNum;
  request.headers.sortBy;
  request.headers.orderBy;
  response.send(
    "Products - Page number: " +
      request.headers.pageNum +
      ", Sort by: " +
      request.headers.sortBy +
      ", Order by: " +
      request.headers.orderBy
  );
});

// GET /products/all?sort=price HTTP/1.1
app.get("/products/all", (request, response) => {
  let sort = request.query.sort;
  response.send("Products - Sort by: " + sort);
});

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get(
  "/products/:productId-:productSize-:productColor",
  (request, response) => {
    response.send(
      "Product - Product ID: " +
        request.params.productId +
        ", Product Size: " +
        request.params.productSize +
        ", Product Color: " +
        request.params.productColor
    );
  }
);

// GET /products/424 HTTP/1.1
app.get("/products/:productId", (request, response) => {
  response.send("Product - Product ID: " + request.params.productId);
});

// GET /products/nike-large-white-shoe HTTP/1.1
// app.get("/products/:productName", (request, response) => {
//   response.send("Product Page! Product name: " + request.params.productName);
// });

app.listen(3000);
