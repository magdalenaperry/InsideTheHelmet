import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($email: String!, $username: String!, $password: String!, $athleteType: String!, $age: String!, $phone: String) {
  addUser(email: $email, username: $username, password: $password, athleteType: $athleteType, age: $age, phone: $phone) {
    token
    user {
      _id
      username
      email
      password
      phone
      age
      athleteType
    }
  }
}
`;

export const ADD_DEMO = gql`
mutation addDemographics($race: String, $ethnicity: String) {
  addDemographics(race: $race, ethnicity: $ethnicity) {
    race
    ethnicity
  }
}
`;
