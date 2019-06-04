require('dotenv').config();

const express = require('express');
const {ApolloServer} = require('apollo-server-express');

const sequelize = require('./sequelize/initialize');
const typeDefs = require('./schemas/initialize');
const resolvers = require('./resolvers/initialize');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: request => request,
});

const app = express();
const PORT = process.env.port|| 5000;

server.applyMiddleware({app, path: '/graphql'});

app.listen({port: process.env.port}, () => {
    console.log(`🚀 Server started on port ${PORT}`);

});