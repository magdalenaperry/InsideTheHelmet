const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    phone: String
    age: String!
    athleteType: String!
    demographics: [Demographics]
  }

  type Demographics {
  _id: ID
  race: String
  ethnicity: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    demographics: [Demographics]
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!, athleteType: String!, age: String!, phone: String): Auth
    login(email: String!, password: String!): Auth
    addDemographics(race: String, ethnicity: String): Demographics
  }
`;

module.exports = typeDefs;
