const express = require("express");
const User = require("../models/users.js");

class Users {
  async getUsers(req, res) {
    const data = await User.find();
    console.log(data);
    try {
      res.status(200).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.send(err);
    }
  }

  async createUser(req, res) {
    try {
      const data = await User.create(req.body);
      res.status().json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.send(err);
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
      res.status(404).res.send(err);
    }
  }

  async deleteUser(req, res) {
    try {
      const data = await User.findByIdAndDelete(rea.params.id);
      res.status(200).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.send(err);
    }
  }

  async updateUser(req, res) {
    try {
      const data = User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({
        message: "Success",
        body: data,
      });
    } catch (err) {
      res.status(404).res.send(err);
    }
  }
}

module.exports = Users;
