require('dotenv').config();

const {ApolloServer} = require('apollo-server');
const sequelize = require('./sequelize/initialize');
const typeDefs = require('./schemas/initialize');
const resolvers = require('./resolvers/initialize');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: request => request,
});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});