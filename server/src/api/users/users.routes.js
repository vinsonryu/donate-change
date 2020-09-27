const express = require("express");
const { postUser } = require("./users.controller");
const { deleteUser } = require("./users.controller");

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

router.post('/add-user', (req, res, next) => {
  console.log( postUser(req.body) );
  next('/');
});

router.delete('/:id', (req, res, next) => {
  const cust_id = req.params.id ;
  console.log( deleteUser(cust_id) );
  next('/');
});


module.exports = router;
