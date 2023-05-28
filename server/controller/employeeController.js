const employeeModel = require("../models/employee.model");

module.exports = {
  //Show the list of Emloyees
  async getAllEmployee(req, res) {
    try {
      const data = await employeeModel.all();
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // Show single employee
  async getEmployeeByID(req, res) {
    try {
      const id = req.query.ID;
      const data = await employeeModel.single(id);
      return res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  // add an employee
  async addEmployee(req, res) {
    try {
      const { name, designation, email, phone, age } = req.body;

      //Check for non NULL before create store Object
      if (!name || !designation || !email || !phone || !age) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const store = { name, designation, email, phone, age };
      const newEmployee = await employeeModel.add(store);

      return res
        .status(200)
        .json({ newEmployee, message: "Employee added succesfully!" });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  //update an employee
  async updateEmployee(req, res) {
    try {
      const updateEmployee = await employeeModel.patch(req.body);
      if (updateEmployee) {
        return res
          .status(200)
          .json({ updateEmployee, message: "Employee updated succesfully!" });
      }
      throw new Error("ID not found");
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },

  async deleteEmployee(req, res) {
    try {
      const id = req.query.ID;
      const deleted = await employeeModel.del(id);
      if (deleted) {
        return res.status(200).send("Employee deleted succesfully");
      } else {
        throw new Error("ID not found");
      }
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  },
};

// if (req.files) {
//   let path = "";
//   req.files.forEach(function (files, index, arr) {
//     path = path + files.path + ",";
//   });
//   path = path.substring(0, path.lastIndexOf(","));
//   employee.avatar = path;
// }

//   if (req.file) {
//     employee.avatar = req.file.path;
//   }

// const update = (req, res, next) => {
//   let employeeID = req.body.employeeID;

//   let updateData = {
//     name: req.body.name,
//     designation: req.body.designation,
//     email: req.body.email,
//     phone: req.body.phone,
//     age: req.body.age,
//   };
//   Employee.findByIdAndUpdate(employeeID, { $set: updateData })
//     .then(() => {
//       res.json({ message: "Employee updated succesfully!" });
//     })
//     .catch((error) => {
//       res.json({
//         message: "An error Occured!",
//       });
//     });
// };

// // Delete an employee
// const destroy = (req, res, next) => {
//   let employeeID = req.body.employeeID;

//   Employee.findByIdAndRemove(employeeID)
//     .then(() => {
//       res.json({ message: "Employee deleted succesfully!" });
//     })
//     .catch((error) => {
//       res.json({
//         message: "An error Occured!",
//       });
//     });
// };
