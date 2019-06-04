require('dotenv').config();

const express = require('express');
const path = require("path");
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

server.applyMiddleware({
    app,
    path: '/api'
});

app.get('/', (req, res) => {
    res.send(`
        Welcome to Blogging Web App API portal! 😀
        <br>
        <a href="http://localhost:3000/">Click this link to the main porta!</a>
    `)
});

const PORT = process.env.port || 5000;
app.listen({port: process.env.port}, () => {
    console.log(`🚀 Server started on port ${PORT}`);

});