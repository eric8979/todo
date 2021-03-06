const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
// middleware
const auth = require('../../middleware/auth');
// model
const User = require('../../models/User');

// @route    GET api/user
// @desc     Get User by using token
// @access   private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/user
// @desc     Update User name by using token
// @access   private
router.put('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const { name } = req.body;
    user.name = name;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
