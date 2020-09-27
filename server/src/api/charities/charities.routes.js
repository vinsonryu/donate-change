const express = require("express");

const { getCharity, getCharities } = require("./charities.controller");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // TODO: pagination
    // TODO: filter by region
    const charities = await getCharities();
    res.json(charities);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const charity = await getCharity(id);
    res.json(charity);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
