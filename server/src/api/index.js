const express = require("express");

const accounts = require("./accounts/accounts.routes");
const auth = require("./auth/auth.routes");
const charities = require("./charities/charities.routes");
const users = require("./users/users.routes");

const router = express.Router();

router.use("/accounts", accounts);
router.use("/auth", auth);
router.use("/charities", charities);
router.use("/users", users);

module.exports = router;
