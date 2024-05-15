const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userscontroller');
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);
module.exports = router;