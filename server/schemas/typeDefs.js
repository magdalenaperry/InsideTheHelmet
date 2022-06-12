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
    dass: [Dass]
  }

  type Demographics {
  _id: ID
  race: String
  ethnicity: String
  }

  type Dass {
  _id: ID
  dass1: String
  dass2: String
  dass3: String
  dass4: String
  dass5: String
  dass6: String
  dass7: String
  dass8: String
  dass9: String
  dass10: String
  dass11: String
  dass12: String
  dass13: String
  dass14: String
  dass15: String
  dass16: String
  dass17: String
  dass18: String
  dass19: String
  dass20: String
  dass21: String
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
    dass: [Dass]
  }

  type Mutation {
    addUser(email: String!, username: String!, password: String!, athleteType: String!, age: String!, phone: String): Auth
    login(email: String!, password: String!): Auth
    addDemographics(race: String, ethnicity: String): Demographics
    
    addDass(dass1: String, dass2: String, dass3: String, dass4: String, dass5: String, dass6: String, dass7: String, dass8: String, dass9: String, dass10: String, dass11: String, dass12: String, dass13: String, dass14: String, dass15: String, dass16: String, dass17: String, dass18: String, dass19: String, dass20: String, dass21: String): Dass
  }
`;

module.exports = typeDefs;
