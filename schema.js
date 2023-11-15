export const typeDef = `#graphql
    type Games {
        id: ID!,
        title: String!,
        platform: [String!]!
     }

     type Review {
        id: ID!
        rating: Int!
        content: String!
     }

     type Author {
        id: ID!
        name: String!
        verified: Boolean!
     }

     type Query {
        reviews: [Review]
        games: [Games]
        authors: [Author]
     }

    #  The following is mandatory a 'special' type. Is a type that every 
    # graphql must have. Its job is to specify the entry point to the graph and also specify the return type.

`;

// Types built into graphql: Int, Float, String, Boolean, ID.
// Required is instruct by adding a '!' exclamation mark. 