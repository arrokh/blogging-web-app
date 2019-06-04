const {User} = require('../../sequelize/models/UserModel');

module.exports = {
    getAll: async function (parent, args, context, info) {
        return await User.findAll().then(data => data);
    },
    getById: async function (parent, args, context, info) {
        const user = await User
            .findAll({
                where: {
                    id: args.id
                }
            })
            .then(data => data);

        if (user.length < 1)
            throw new Error('User with passed ID was not found');
        else
            return user[0].dataValues;
    }
};