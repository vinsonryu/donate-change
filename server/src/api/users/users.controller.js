const axios = require("axios");
const User = require('./users.model'); 

const baseURL = "http://api.reimaginebanking.com/";

// TODO: communicate with database
const getUser = (req, res) => {
        User.find({id: req.params.id})
            .then(user => res.json(user))
            .catch(err => res.status(404).json({ msg: 'Sorry! User not found' }));
        
  };

const postUser = (body) => {
    const username = body.username;
    const password = body.password;
    const customer_id = body.customer_id;
    
    const user = new User({
    username: username,
    password: password,
    customer_id: customer_id
  });
  return user
    .save()
    .then(result => {
      console.log(result);
      console.log('Created User');
    })
    .catch(err => {
      console.log(err);
    });
  };

  
  // TODO: communicate with database
  const getUserAccounts = (id) => {
    return {}
  };
  
  // TODO: communicate with database
  const updateUser = (id, fields) => {
    return {}
  };
  
  // TODO: communicate with database
const deleteUser = (id) => {
    console.log('deleting user')
    return User.findOneAndDelete(id)
    .then(() => {
      console.log("User deleted");
    })
    .catch(err => console.log(err));
  };
  
  
  // CapitalOneCustomer
  
  const createCapitalOneCustomer = async (id) => {
    const apiURL = `${baseURL}/customers?key=${process.env.API_KEY}`;
    const { data } = await axios.post(apiURL);
    return data;
  };
  
  const getCapitalOneCustomer = async (id) => {
    const apiURL = `${baseURL}/customers/${id}?key=${process.env.API_KEY}`;
    const { data } = await axios.get(apiURL);
    return data;
  };
  
  const getCapitalOneCustomerAccounts = async (id) => {
    const apiURL = `${baseURL}/customers/${id}/accounts?key=${process.env.API_KEY}`;
    const { data } = await axios.get(apiURL);
    return data;
  };
  
  const updateCapitalOneCustomer = async (id, fields) => {
    const apiURL = `${baseURL}/customers/${id}?key=${process.env.API_KEY}`;
    const { data } = await axios.put(apiURL, fields);
    return data;
  };
  
  module.exports = {
    getUser,
    postUser,
    getUserAccounts,
    updateUser,
    deleteUser,
    createCapitalOneCustomer,
    getCapitalOneCustomer,
    getCapitalOneCustomerAccounts,
    updateCapitalOneCustomer,
  };




