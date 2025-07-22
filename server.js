<<<<<<< HEAD
const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
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
>>>>>>> 96078beb7c7e2131bd5bdde716df5b366d644b3d
});
