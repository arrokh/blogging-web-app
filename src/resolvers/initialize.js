const UserHandler = require('./handlers/UserHandler');
const ArticleHandler = require('./handlers/ArticleHandler');
const AuthHandler = require('./handlers/AuthHandler');

module.exports = {
    Query: {
        users: UserHandler.getAll,
        user: UserHandler.getById,
        articles: ArticleHandler.getAll,
        article: ArticleHandler.getById
    },
    Mutation: {
        login: AuthHandler.login,
        register: AuthHandler.register,
        addArticle: ArticleHandler.add
    },
    Subscription: {
        onAddedArticle: ArticleHandler.onAdded
    }
};