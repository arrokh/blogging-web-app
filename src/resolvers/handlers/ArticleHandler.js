const {PubSub} = require('apollo-server');
const uuid = require('uuid/v4');
const {Article} = require('../../sequelize/models/ArticleModel');

const POST_ADDED = 'POST_ADDED';

const pubsub = new PubSub();

module.exports = {
    getAll: async function (parent, args, context, info) {
        return await Article.findAll().then(data => data);
    },
    getById: async function (parent, args, context, info) {
        const article = await Article
            .findAll({
                where: {
                    id: args.id
                }
            })
            .then(data => data);

        if (article.length < 1)
            throw new Error('Article with passed ID was not found');
        else
            return article[0].dataValues;
    },
    add: async function (parent, args, context, info) {
        const id = uuid();
        const userId = uuid();

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
    onAdded: {
        resolve: payload => payload,
        subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
};