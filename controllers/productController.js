<<<<<<< HEAD
=======
// controllers/productController.js

>>>>>>> 96078beb7c7e2131bd5bdde716df5b366d644b3d
exports.getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

<<<<<<< HEAD
exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};

exports.getProductById = (req, res) => {
  res.send(`Fetching product with ID: ${req.params.id}`);
};
=======
exports.getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

exports.addProduct = (req, res) => {
  res.send("Adding a new product");
};
>>>>>>> 96078beb7c7e2131bd5bdde716df5b366d644b3d
