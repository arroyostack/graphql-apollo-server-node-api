import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';

// Database
import db from './_db.js';

// Types

// Resolvers
const resolvers = {
    Query: {
        games () {
            return db.games;
        },
        game ( _, args ) {
            return db.games.find( game => game.id === args.id );
        },
        reviews () {
            return db.reviews;
        },
        review ( _, args ) {
            return db.reviews.find( review => review.id === args.id );
        },
        authors () {
            return db.authors;
        },
        author ( _, args ) {
            return db.authors.find( author => author.id === args.id );
        }
    },
    Game: {
        reviews ( parent ) {
            return db.reviews.filter( review => review.game_id === parent.id );
        }
    },
    Author: {
        reviews ( parent ) {
            return db.reviews.filter( author => author.id === parent.id );

        }
    },
    Review: {
        author ( parent ) {
            return db.authors.find( author => author.id === parent.author_id );
        },
        game ( parent ) {
            return db.games.find( game => game.id === parent.game_id );
        }
    },
    Mutation: {
        deleteGame ( _, args ) {
            db.games = db.games.filter( game => game.id !== args.id );

            return db.games;
        },
        addGame ( _, args ) {
            let game = {
                ...args.game,
                id: ( Math.floor( Math.random() * 1000 ) )
            };

            db.games.push( game );

            return game;
        }
    }
};

// Server setup.
// Apollo server object expects object argument, and  this object expects two properties: 
// 1. typeDefs: basic pre-descriptions of our data types and the relationship they have with other data types.
// 2. resolvers: a group of resolver functions that determine how we respond to queries for different data on the graph.
const server = new ApolloServer( {
    typeDefs,
    resolvers

} );

const { url } = await startStandaloneServer( server, {
    listen: { port: 4001 }
} );

console.log( 'Server  ready at port ', 4001 );