const express = require("express");
const User = require("../models/users.js");

class Users {
  async getUsers(req, res) {
    const data = await User.find();
    try {
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
