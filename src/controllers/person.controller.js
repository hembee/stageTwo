const Person = require("../models/person.model");
const personValidator = require("../validators/person.validator");

const personController = {
  createPersonController: async (req, res) => {
    try {
      const { name } = req.body;
      const { error } = personValidator.validateAsync({name});
      if (error) throw error;
      const person = await Person.create({name});
      if (!person) {
        return res
          .status(404)
          .json({ error: "Person was not created successfully" });
      }

      res.status(201).json({
        status: "Success",
        message: "Person created successfully",
        data: person,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  readUserController: async (req, res) => {
    try {
      const { user_id } = req.params;
      const person = await Person.findById(user_id);
      if (!person) {
        return res.status(404).json({ error: "User not found!!!!" });
      }

      res.status(200).json({
        status: "Success",
        message: "User found successfully",
        data: person,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateUserController: async (req, res) => {
    try {
      const { user_id } = req.params;
      const { name } = req.body;
      const updated = Person.findByIdAndUpdate(user_id, name, { new: true });
      if (!updated) {
        return res.status(404).json({ error: "Invalid User ID" });
      }
      res.status(200).json({
        status: "Success",
        message: "User updated successfully",
        data: updated,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteUserController: (req, res) => {
    try {
      const { user_id } = req.params;
      const deleted = Person.findByIdAndDelete(user_id);
      if (!deleted) {
        return res.status(404).json({ error: "Invalid User ID" });
      }
      res.status(200).json({
        status: "Success",
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = personController;
