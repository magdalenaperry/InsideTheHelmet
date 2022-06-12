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


export const ADD_DASS = gql`
mutation addDass($dass1: String, $dass2: String, $dass3: String, $dass4: String, $dass5: String, $dass6: String, $dass7: String, $dass8: String, $dass9: String, $dass10: String, $dass11: String, $dass12: String, $dass13: String, $dass14: String, $dass15: String, $dass16: String, $dass17: String, $dass18: String, $dass19: String, $dass20: String, $dass21: String) {
  addDass(dass1: $dass1, dass2: $dass2, dass3: $dass3, dass4: $dass4, dass5: $dass5, dass6: $dass6, dass7: $dass7, dass8: $dass8, dass9: $dass9, dass10: $dass10, dass11: $dass11, dass12: $dass12, dass13: $dass13, dass14: $dass14, dass15: $dass15, dass16: $dass16, dass17: $dass17, dass18: $dass18, dass19: $dass19, dass20: $dass20, dass21: $dass21) {
    _id
    dass1
    dass2
    dass3
    dass4
    dass5
    dass6
    dass7
    dass8
    dass9
    dass10
    dass11
    dass12
    dass13
    dass14
    dass15
    dass16
    dass17
    dass18
    dass19
    dass20
    dass21
  }
}
`;