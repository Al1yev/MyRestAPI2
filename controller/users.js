const express = require("express");
const User = require("../models/users.js");

class Users {
  async getUsers(req, res) {
    try {
      if (req.query) {
        console.log(req.query);
        if (req.query.sort) {
          User.sort(req.query.sort.split(",").join(" "));
        }
        if (req.query.field) {
          User.field(req.query.field.split(","), join(" "));
        }
        if (req.query.page && req.query.limit) {
          const page = req.query.page || 1;
          const limit = req.query.limit || 5;
          const skip = (page - 1) * limit;
          User.skip(skip).limit(limit);
        }
      }
      const data = await User.find();
      res.status(200).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.json(err);
    }
  }

  async createUser(req, res) {
    try {
      const data = await User.create(req.body);
      res.status(201).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.json(err);
    }
  }

  async getOneUser(req, res) {
    const data = await User.findById(req.params.id);
    try {
      res.status(200).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.json(err);
    }
  }

  async deleteUser(req, res) {
    try {
      const data = await User.findByIdAndDelete({ _id: req.params.id });
      res.status(204).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.json(err);
    }
  }

  async updateUser(req, res) {
    try {
      const data = User.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.status(201).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.json(err);
    }
  }
}

module.exports = Users;
