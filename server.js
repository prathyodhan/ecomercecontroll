// server.js
const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// Mount product routes
app.use("/products", productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
