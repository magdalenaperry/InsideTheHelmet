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
  const email = "magperry16@gmail.com"
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
  if (Auth.loggedIn() && Auth.getProfile().data.email === email) {
    return (
      <>
        <h1>this works</h1>
        <Navigate to="/admin" replace />;
      </>
    )

  }



  const username = (user.username);
  const cappedUsername = function capUsername() {
    return username.charAt(0).toUpperCase() + username.slice(1);
  }

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <>


        <h1 className="titles mt-5">Helmet Dashboard</h1>
        <div className="row">
          <div className="col-md-4 mb-5">

            <div className="card shadow rounded bg-white mt-5 pt-5" style={{ height: "400" }}>
              {/* <h2 className="card-header">Hi {cappedUsername()},</h2> */}
              <div className="px-5">
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/400"
                  stle={{ width: "100%" }}
                  alt="avatar"
                // style={styles.profile}
                />
              </div>
              <div className="px-5 py-5 pt-3 mt-0">
                <p className="">
                  {/* <strong>Username:</strong>  */}
                  {cappedUsername()}, {user.age}
                </p>
                <p className="">
                  {/* <strong>Athlete Type:</strong>  */}
                  {user.athleteType}
                </p>
                <p className="">
                  {/* // <strong> Phone:</strong>  */}
                  {user.phone}
                </p>
                <p className="">
                  {/* <strong>Email:</strong>  */}
                  {user.email}
                </p>
                {/* <p className=""> */}
                {/* <strong>Age:</strong>  */}
                {/* {user.age} */}
                {/* </p> */}
                <p className="">
                    {user.demographics && 
                    user.demographics.map((demographic) => (
                      <>
                        <strong>Race:</strong> {demographic.race}
                      </>
                    ))}
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
          <div className="col-md-8">
            <div className="card shadow rounded bg-white mt-5 pt-5" style={{ height: 400 }}>

            </div>
          </div>
        </div>
        <div className="card shadow col-12 rounded bg-white mb-5" style={{ height: "400" }}>
          <p className="my-5">Section Here</p>
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
