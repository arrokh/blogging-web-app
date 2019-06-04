const {User} = require('../../sequelize/models/UserModel');
const {Article} = require('../../sequelize/models/ArticleModel');
module.exports = {
    getAll: async function (parent, args, context, info) {
        return await User.findAll().then(data => data);
    },
    getById: async function (parent, args, context, info) {
        const user = await User.findOne({where: {id: args.id}}).then(data => data);

        if (!user)
            throw new Error('User with passed ID was not found');
        else
            return user;
    },
    listArticles: async function (parent, args, context, info) {
        return await Article.findAll({where: {userId: parent.id}}).then(data => data);
    }
};