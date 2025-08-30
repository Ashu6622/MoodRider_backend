const express = require('express');
const router = express.Router();

const {register, showUsers} = require('../controllers/userController')

router.post('/register', register);
router.get('/alluser', showUsers);


module.exports = router