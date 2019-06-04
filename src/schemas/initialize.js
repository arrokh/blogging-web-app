const {importSchema} = require('graphql-import');

const text = importSchema(__dirname + '\\gql\\schema.graphql');

module.exports = text;