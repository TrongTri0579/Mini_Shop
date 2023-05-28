const ProductModel = require("../models/product.model");

module.exports = {
  //Show the list of Emloyees
  async getAllProduct(req, res) {
    try {
      const data = await ProductModel.all();
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // Show single product
  async getProductByID(req, res) {
    try {
      const id = req.query.ProID;
      const data = await ProductModel.single(id);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // add an product
  async addProduct(req, res) {
    try {
      const { ProID, ProName, description, price, image } = req.body;

      //Check for non NULL before create store Object
      if (!ProID || !ProName || !description || !price || !image) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const store = { ProID, ProName, description, price, image };
      const newProduct = await ProductModel.add(store);

      return res
        .status(200)
        .json({ newProduct, message: "Product added succesfully!" });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  //update an product
  async updateProduct(req, res) {
    try {
      const updateProduct = await ProductModel.patch(req.body);
      if (updateProduct) {
        return res
          .status(200)
          .json({ updateProduct, message: "Product updated succesfully!" });
      }
      throw new Error("ID not found");
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  async deleteProduct(req, res) {
    try {
      const id = req.query.ProID;
      console.log(id);
      const deleted = await ProductModel.del(id);
      if (deleted) {
        return res.status(200).send("Product deleted succesfully");
      } else {
        throw new Error("ProID not found");
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};
