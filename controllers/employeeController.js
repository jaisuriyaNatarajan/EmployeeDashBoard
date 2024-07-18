const { Employee } = require("../models/db");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createEmployee = async (req, res) => {
  const { name, email, position, department, startDate } = req.body;
  try {
    const employee = await Employee.create({
      name,
      email,
      position,
      department,
      startDate,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, position, department, startDate } = req.body;
  try {
    await Employee.update(
      { name, email, position, department, startDate },
      { where: { id } }
    );
    res.json({ message: "Employee updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.destroy({ where: { id } });
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
