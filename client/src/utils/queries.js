import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
query Users {
  users {
    username
    _id
    email
    password
    phone
    age
    athleteType
    demographics {
      _id
      race
      ethnicity
    }
    dass {
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
    iprrs {
      _id
      iprrs1
      iprrs2
      iprrs3
      iprrs4
      iprrs5
      iprrs6
    }
    mspss {
      _id
      mspss1
      mspss2
      mspss3
      mspss4
      mspss5
      mspss6
      mspss7
      mspss8
      mspss9
      mspss10
      mspss11
      mspss12
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

export const QUERY_DEMO = gql`
query demographics {
  demographics {
    race
    ethnicity
    _id
    users {
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
        dass11
        dass10
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
        _id
      }
      age
      demographics {
        race
        ethnicity
      }
    }
  }
}
`