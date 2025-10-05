const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;

    const isUserAlready = await userModel.findOne({ email });
    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });
};
