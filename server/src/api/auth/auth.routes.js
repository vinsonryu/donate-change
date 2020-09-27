const express = require("express");
const jwt = require("jsonwebtoken");

const { createUser, createCapitalOneCustomer } = require("./utils");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { id, username } = await createUser(req.body);
    const { customer_id } = await createCapitalOneCustomer(req.body);

    const payload = { id, username, customer_id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET);

    res.json({ user: payload, token });
  } catch (error) {
    next(error);
  }
});

router.post("/signin", async (req, res, next) => {
  try {
    res.json({ method: "POST", route: "/auth/signin" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
