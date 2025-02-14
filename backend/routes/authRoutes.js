const express = require('express');
const { registerUser, loginUser } = require('../Controllers/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;