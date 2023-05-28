const CategoryModel = require("../models/category.model");

module.exports = {
  //Show the list of Emloyees
  async getAllCategory(req, res) {
    try {
      const data = await CategoryModel.all();
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // Show single Category
  async getCategoryByID(req, res) {
    try {
      const id = req.query.CatID;
      const data = await CategoryModel.single(id);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // add an Category
  async addCategory(req, res) {
    try {
      const { ProID, ProName, description, price, image } = req.body;

      //Check for non NULL before create store Object
      if (!ProID || !ProName || !description || !price || !image) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const store = { ProID, ProName, description, price, image };
      const newCategory = await CategoryModel.add(store);

      return res
        .status(200)
        .json({ newCategory, message: "Category added succesfully!" });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  //update an Category
  async updateCategory(req, res) {
    try {
      const updateCategory = await CategoryModel.patch(req.body);
      if (updateCategory) {
        return res
          .status(200)
          .json({ updateCategory, message: "Category updated succesfully!" });
      }
      throw new Error("ID not found");
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  async deleteCategory(req, res) {
    try {
      const id = req.query.ProID;
      const deleted = await CategoryModel.del(id);
      if (deleted) {
        return res.status(200).send("Category deleted succesfully");
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
