const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post(
  '/register',
  [
    body('firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters'),
    body('lastname')
      .optional()
      .isLength({ min: 3 })
      .withMessage('Last name must be at least 3 characters'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  userController.registerUser
);

module.exports = router;
