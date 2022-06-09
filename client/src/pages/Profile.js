// Node Modules
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// Utilities
import Auth from "../utils/auth";
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../utils/queries";
// Components
import { SpinnerDotted } from 'spinners-react'

// const styles = {
//   profile: {
//     textAlign: "center",
//     width: "150px",
//     height: "150px",
//   },
// };

const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  

  const user = data?.me || data?.user || {};
  // const users = usersData?.users || [];

  console.log(user)

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }

  if (loading) {
    return (
      <main className="text-center mt-5">
        <SpinnerDotted />
      </main>
    );
  }

  if (!user?.username && Auth.loggedIn) {
    return (
      <>
        <main>
          <div className="container text-center text-success">
            <h1>Uh oh! Please login to view your profile.</h1>
        
          </div>
        </main>
      </>
    );
  }


  
  const username = (user.username);
  const cappedUsername = function capUsername() {
    return username.charAt(0).toUpperCase() + username.slice(1);
  }
  console.log(cappedUsername())

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <div className="card">
                <h2 className="card-header">Hi {cappedUsername()},</h2>
                {/* <div className="card-body">
                  <img
                    className="rounded-circle img-fluid"
                    src={Avatar}
                    alt="avatar"
                    style={styles.profile}
                  />
                </div> */}
                <div className="card-footer text-start pt-3 mt-0">
                  <p className="">
                    <strong>Username:</strong> {user.username}
                  </p>
                  <p className="">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="">
                    <a className="text-dark text-decoration-none" href={`tel+${user.phone}`}><strong> Phone:</strong> {user.phone}</a>
                  </p>
                  <p className="">
                    <strong>Athlete Type:</strong> {user.athleteType}
                  </p>
                  <p className="">
                    <strong>Age:</strong> {user.age}
                  </p>
                  <p className="">
                    {user.demographics && user.demographics.map((demographic) => (
                      <>
                        <strong>Race:</strong> {demographic.race}
                      </>
                    ) )}
                  </p>
                  <p className="">
                    {user.demographics && user.demographics.map((demographic) => (
                      <>
                        <strong>Ethnicity:</strong> {demographic.ethnicity}
                      </>
                    ))}
                  </p>

                  {/* <p className="">
                    <strong>Ethnicity:</strong> {user.demographics && user.demographics[0].ethnicity}
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <main className="text-center">
        <div className="container">
          {renderCurrentUserInfo()}
        </div>

      </main>
    </>
  );
};

export default Profile;
