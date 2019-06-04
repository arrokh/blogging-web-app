const {PubSub} = require('apollo-server');
const uuid = require('uuid/v4');
const {Article} = require('../../sequelize/models/ArticleModel');
const {User} = require('../../sequelize/models/UserModel');
const {getUserId, getUserAuth} = require('../utils');

const POST_ADDED = 'POST_ADDED';
const VOTE_UP_ARTICLE = 'VOTE_UP_ARTICLE';

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
        const {userId, user} = await getUserAuth(context, true);

        const article = await Article.findOne({where: {id: args.id}}).then(data => data);

        if (!article)
            throw  new Error('Article with passed Id was not found');

        // Add 1 vote
        article.set('voteUp', ++article.voteUp);


        return await article.save().then(data => {
            pubsub.publish(VOTE_UP_ARTICLE, {
                article: data.dataValues,
                user
            });
            return data;
        });
    },
    onAdded: {
        resolve: payload => payload,
        subscribe: () => pubsub.asyncIterator([POST_ADDED])
    },
    onVoteUpArticle: {
        resolve: payload => payload,
        subscribe: () => pubsub.asyncIterator([VOTE_UP_ARTICLE])
    }
};