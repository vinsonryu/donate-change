const axios = require("axios");

const baseURL = "http://api.reimaginebanking.com";

const createAccount = async (customer_id, account) => {
  const apiURL = `${baseURL}/customers/${customer_id}/accounts?key=${process.env.API_KEY}`;
  const { data } = await axios.post(apiURL, account);
  return data;
};

const getAccount = async (id) => {
  const apiURL = `${baseURL}/accounts/${id}?key=${process.env.API_KEY}`;
  const { data } = await axios.get(apiURL);
  return data;
};

// TODO: parse fields.
const updateAccount = async (id, fields) => {
  const apiURL = `${baseURL}/accounts/${id}?key=${process.env.API_KEY}`;
  const { data } = await axios.put(apiURL, fields);
  return data;
};

const deleteAccount = async (id) => {
  const apiURL = `${baseURL}/accounts/${id}?key=${process.env.API_KEY}`;
  const { status } = await axios.delete(apiURL);
  return status === 204;
};

module.exports = {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
