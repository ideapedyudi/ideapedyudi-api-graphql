const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
});

const options = {
    port: process.env.PORT || 4000,
    endpoint: '/graphql',
    playground: '/playground',
};

server.start(options, ({ port }) =>
    console.log(
        `Server started, listening on port ${port} for incoming requests.`
    )
);