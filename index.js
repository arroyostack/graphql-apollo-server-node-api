import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Types
import { typeDef } from './schema';

// Server setup.
// Apollo server object expects object argument, and  this object expects two properties: 
// 1. typeDefs: basic pre-descriptions of our data types and the relationship they have with other data types.
// 2. resolvers: a group of resolver functions that determine how we respond to queries for different data on the graph.
const server = new ApolloServer( {
    typeDef
    // resolvers

} );

const { url } = await startStandaloneServer( {
    listen: { port: 4001 }
} );

console.log( 'Server  ready at port ', 4000 );