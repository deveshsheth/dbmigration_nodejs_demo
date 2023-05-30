const express = require('express');
const router = express.Router();
const {User}  = require('../models/user');

router.get('/getData', async (req, res) => {
  try {
    const data = await User.findAll(); // Replace ModelName with your actual model name
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
