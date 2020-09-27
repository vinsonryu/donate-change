const axios = require("axios");
const bcrypt = require("bcrypt");

const apiUrl = `http://api.reimaginebanking.com/customers?key=${process.env.API_KEY}`;

const createUser = async (data) => {
  const user = parseUser(data);

  const hashed = await bcrypt.hash(user.password, 12);
  const inserted = { id: 1, ...user, password: hashed }; // TODO: insert user into the database
  delete inserted.password;

  return inserted;
};

const parseUser = (data) => {
  return {
    username: data.username,
    password: data.password,
  };
};

const createCapitalOneCustomer = async (data) => {
  const customer = parseCapitalOneCustomer(data);

  const { data: res } = await axios.post(apiUrl, customer);

  return {
    ...res.objectCreated,
    customer_id: res.objectCreated._id,
  };
};

const parseCapitalOneCustomer = (data) => {
  return {
    first_name: data.first_name,
    last_name: data.last_name,
    address: {
      street_number: data.address.street_number,
      street_name: data.address.street_name,
      city: data.address.city,
      state: data.address.state,
      zip: data.address.zip,
    },
  };
};

module.exports = {
  createUser,
  createCapitalOneCustomer,
};
