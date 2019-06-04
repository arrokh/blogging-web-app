const {PubSub} = require('apollo-server');
const uuid = require('uuid/v4');
const {Article} = require('../../sequelize/models/ArticleModel');
const {User} = require('../../sequelize/models/UserModel');
const {getUserId, getUserAuth} = require('../utils');

const POST_ADDED = 'POST_ADDED';

const pubsub = new PubSub();

module.exports = {
    getAll: async function (parent, args, context, info) {
        return await Article.findAll().then(data => data);
    },
    getById: async function (parent, args, context, info) {
        const article = await Article.findOne({where: {id: args.id}}).then(data => data);

        if (!article)
            throw new Error('Article with passed ID was not found');
        else
            return article;
    },
    add: async function (parent, args, context, info) {
        const id = uuid();
        const userId = getUserId(context);

        const res = await Article
            .create({
                id,
                userId,
                ...args
            })
            .then(data => data)
            .catch(err => console.error(err));

        const article = res.dataValues;

        pubsub.publish(POST_ADDED, article);

        return article;
    },
    postedBy: async function (parent, args, context, info) {
        return await User.findOne({where: {id: parent.userId}}).then(data => data);
    },
    voteUp: async function (parent, args, context, info) {
        const {userId} = await getUserAuth(context);

        const article = await Article.findOne({where: {id: args.id}}).then(data => data);

        if (!article)
            throw  new Error('Article with passed Id was not found');

        // Add 1 vote
        article.set('voteUp', ++article.voteUp);

        return await article.save().then(data => data);
    },
    onAdded: {
        resolve: payload => payload,
        subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
};