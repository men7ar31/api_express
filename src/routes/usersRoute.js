const express = require('express');
const userSchemas = require('../models/userModels');

const router = express.Router();

// create user
router.post('/users', (req, res) => {
  const user = userSchemas(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.send(console.log(error)));
});

// get all users
router.get('/users', (req, res) =>{
    userSchemas
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.send(console.log(error)));
});

// get a user
router.get('/users/:id', (req, res) =>{
    const {id} = req.params;
    userSchemas
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.send(console.log(error)));
});

// update a user
router.put('/users/:id', (req, res) =>{
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchemas
    .updateOne({_id: id}, {$set: {name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.send(console.log(error)));
});

// delete a user
router.delete('/users/:id', (req, res) =>{
    const {id} = req.params;
    userSchemas
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.send(console.log(error)));
});
module.exports = router