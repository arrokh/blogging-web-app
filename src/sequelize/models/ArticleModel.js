const Sequelize = require('sequelize');
const sequelize = require('../initialize');

class Article extends Sequelize.Model {
}

Article.init({
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.UUIDV4,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.TIME,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.TIME,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'article'
});

module.exports = {Article};