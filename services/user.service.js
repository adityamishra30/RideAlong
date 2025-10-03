const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('Required fields missing');
    }

    const user = await userModel.create({
        firstname,
        lastname,
        email,
        password
    });

    return user;
};
