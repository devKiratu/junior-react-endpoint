import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.listen({port: process.env.PORT}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
