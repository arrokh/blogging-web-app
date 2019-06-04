const UserHandler = require('./handlers/UserHandler');
const ArticleHandler = require('./handlers/ArticleHandler');

module.exports = {
    Query: {
        users: UserHandler.getAll,
        user: UserHandler.getById,
        articles: ArticleHandler.getAll,
        article: ArticleHandler.getById
    },
    Mutation: {
        addArticle: ArticleHandler.add
    },
    Subscription: {
        onAddedArticle: ArticleHandler.onAdded
    }
};