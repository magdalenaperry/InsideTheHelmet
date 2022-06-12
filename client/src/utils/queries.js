import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      phone
      age
      athleteType
      dass {
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
      demographics {
        race
        ethnicity
        _id
        }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
      phone
      age
      athleteType
      dass {
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
      demographics {
        race
        ethnicity
        _id
        }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      phone
      age
      athleteType
      dass {
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
      demographics {
        race
        ethnicity
        _id
        }
    }
  }
`;
