require('dotenv').config();

const express = require('express');
const path = require('path');
const ip = require('ip');
const { ApolloServer } = require('apollo-server-express');

const sequelize = require('./sequelize/initialize');
const typeDefs = require('./schemas/initialize');
const resolvers = require('./resolvers/initialize');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    context: request => request,
});

const app = express();

server.applyMiddleware({
    app,
    path: '/api'
});

app.get('/', (req, res) => {
    res.send(`
        Welcome to Blogging Web App API! 🚀😀🚀
    `)
});

const PORT = process.env.port || 5000;
app.listen({ port: process.env.port }, () => {
    console.log(`
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀                                          🚀🚀🚀
🚀🚀🚀 API Server running at: ${ip.address()}:${PORT} 🚀🚀🚀
🚀🚀🚀                                          🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
    `);
});