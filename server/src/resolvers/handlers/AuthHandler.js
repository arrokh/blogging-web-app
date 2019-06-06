const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const {User} = require('../../sequelize/models/UserModel');
const {APP_SECRET, getUserId} = require('../utils');

module.exports = {
    login: async function (parent, args, context, info) {
        const user = await User.findOne({where: {email: args.email}}).then(data => data);

        if (!user)
            throw new Error('User with passed email was not found.');

        const isPasswordValid = await bcrypt.compare(args.password, user.password);

        if (!isPasswordValid)
            throw  new Error('Invalid password');

        const token = jwt.sign({userId: user.id}, APP_SECRET);

        return {
            token,
            user
        }

    },
    register: async function (parent, args, context, info) {
        const password = await bcrypt.hash(args.password, 10);
        const id = uuid();
        const isEmailExist = await User.findOne({where: {email: args.email}}).then(data => data);

        if (isEmailExist)
            throw new Error('Email already registered, try another one or login.');

        const user = await User
            .create({
                ...args,
                id,
                password
            })
            .then(data => data);

        const token = jwt.sign({userId: user.id}, APP_SECRET);

        return {
            user,
            token
        };
    }
};