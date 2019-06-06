const UserHandler = require('./handlers/UserHandler');
const ArticleHandler = require('./handlers/ArticleHandler');
const AuthHandler = require('./handlers/AuthHandler');
const ScalarHandler = require('./handlers/ScalarHandler');

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
    },
    // Scalar Data Type
    Date: ScalarHandler.date
};