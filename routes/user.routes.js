const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

router.post('/registerUser',authController.registerUser);
router.get('/getUser', authController.getUser);

module.exports = router;
