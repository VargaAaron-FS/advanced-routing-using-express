const express = require("express");
const app = express();

// GET /products/all HTTP/1.1
// Page: 2
// Sort: price
// Order: desc
app.get("/products/all", (request, response) => {
  request.headers;
  response.send(
    "Products - Page number: " +
      response.headers.pageNum +
      ", Sort by: " +
      response.headers.sortBy +
      ", Order by: " +
      response.headers.orderBy
  );
});

// GET /products/all?sort=price HTTP/1.1
app.get("/products/all", (request, response) => {
  response.send("Products - Sort by: " + request.query.sort);
});

// GET /products/8719-small-red HTTP/1.1
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

// GET /products/8719 HTTP/1.1
app.get("/products/:productId", (request, response) => {
  response.send("Product - Product ID: " + request.params.productId);
});

app.listen(3000);
