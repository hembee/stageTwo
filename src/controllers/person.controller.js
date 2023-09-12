const mongoose = require("mongoose");
const Person = require("../models/person.model");
const personValidator = require("../validators/person.validator");

const personController = {
  createPersonController: async (req, res) => {
    try {
      const { name } = req.body;
      const { error } = personValidator.validateAsync(name);
      if (error) throw error;
      const person = await Person.create(name);
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
    }
  },

  readUserController: async (req, res) => {
    try {
      const { user_id } = req.query;
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
    }
  },

  updateUserController: async (req, res) => {
    try {
      const { user_id } = req.query;
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
    }
  },

  deleteUserController: (req, res) => {
    try {
      const { user_id } = req.query;
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
    }
  },
};

module.exports = personController;
