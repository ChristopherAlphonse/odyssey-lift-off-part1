import gql from "graphql-tag";

export const typeDefs = gql`
  "Entry point for track, must be non-nullable"
  type Query {
    "Get tracks array for homepage grid"
    trackForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
