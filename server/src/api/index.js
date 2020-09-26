const express = require("express");

const users = require("./users/users.routes");
const accounts = require("./accounts/account.routes");

const router = express.Router();

router.use("/users", users);
router.use("/accounts", accounts);

module.exports = router;
