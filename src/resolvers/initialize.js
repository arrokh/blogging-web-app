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
        // Auth
        login: AuthHandler.login,
        register: AuthHandler.register,
        //Article
        addArticle: ArticleHandler.add,
        voteUpArticle: ArticleHandler.voteUp
    },
    Subscription: {
        //Article
        onAddedArticle: ArticleHandler.onAdded,
        onVoteUpArticle: ArticleHandler.onVoteUpArticle
    },
    Article: {
        postedBy: ArticleHandler.postedBy
    },
    User: {
        listArticles: UserHandler.listArticles
    }
};