const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password, {
    host: process.env.db_host,
    dialect: process.env.db_dialect,
    port: process.env.db_port,
    pool: {
        min: 1,
        max: 60,
        idle: 10000
    },
    define: {
        charset: 'utf8mb4',
        timestamps: true
    },
    dialectOptions: {
        collate: 'utf8mb4_general_ci',
        useUTC: true,
        timezone: process.env.db_timezone
    },
    benchmark: false,
    logging: process.env.node_env === 'development' ? console.log : false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Sequelize connection has been established successfully.');
    })
    .catch(err => {
        console.error('Sequelize unable to connect to the database:', err);
    });

module.exports = sequelize;