const express = require("express");

const {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} = require("./accounts.controllers");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { customer_id, ...account } = req.body;
  try {
    const response = await createAccount(customer_id, account);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const response = await getAccount(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  const { id, ...fields } = req.body;

  try {
    const response = await updateAccount(id, fields);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteAccount(id);
    res.status(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
