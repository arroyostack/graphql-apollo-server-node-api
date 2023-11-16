export const typeDefs = `#graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!
        reviews: [Review!]
      #   author: Author!
     }

     type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
     }

     type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
     }

     type Query {
        reviews: [Review]
        review(id:ID): Review
        games: [Game]
        game(id:ID): Game
        authors: [Author]
        author(id:ID): Author
     },
     type Mutation {
      deleteGame(id:ID!): [Game]
      addGame(game:AddGameInput!): Game!
      updateGame(id:ID!, edits: EditGameInput!): Game
     },
     input AddGameInput {
      title: String!
      platform: [String!]!
     },
     input EditGameInput {
      title: String
      platform: [String!]
     }
`;

// Types built into graphql: Int, Float, String, Boolean, ID. 
// Required is instruct by adding a '!' exclamation mark. 