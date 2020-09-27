const axios = require("axios");

const baseURL = "http://api.reimaginebanking.com";

const getCharities = async (id) => {
  const apiURL = `${baseURL}/merchants?key=${process.env.API_KEY}`;
  const { data } = await axios.get(apiURL);
  return data;
};

const getCharity = async (id) => {
  const apiURL = `${baseURL}/merchants/${id}?key=${process.env.API_KEY}`;
  const { data } = await axios.get(apiURL);
  return data;
};

module.exports = {
  getCharity,
  getCharities
};
