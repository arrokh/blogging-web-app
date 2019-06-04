const Sequelize = require('sequelize');
const sequelize = require('../initialize');

class User extends Sequelize.Model {
}

User.init({
    id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
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
    tableName: 'user'
});

module.exports = {User};