// get, post patch and delete

const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = [
      { name: "John Smith", password: "123password" },
      { name: "James Freeman", password: "pass22pass" },
    ];

    users.forEach((user) => {
      delete user.password;
    });

    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
