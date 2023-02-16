const Employee = require("../models/employeeModel");

const insertEmployee = async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
    });

    const result = await employee.save();
    res.send("Register has been successfull" + result);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = { insertEmployee };
