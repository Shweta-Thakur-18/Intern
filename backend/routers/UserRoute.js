const express = require('express');
const { registerUser, authUser, verifyPin } = require('../controllers/UserController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/verify-pin', verifyPin);

module.exports = router;
