const express = require("express");
const router = express.Router();
const Users = require("../controller/users.js");
const usersController = new Users();

router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

router
  .route("/:id")
  .get(usersController.getOneUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

module.exports = router;
