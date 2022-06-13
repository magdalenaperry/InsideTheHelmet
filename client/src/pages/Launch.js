import React from 'react';
// import { Link } from "react-router-dom";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../utils/queries";

import { SpinnerDotted } from 'spinners-react'
import Logo from "../assets/logo192.png";

const styles = {
  container: {
    marginTop: "100px",
  },
  logo: {
    height: "100px",
    width: "100px"
  }
}


const Launch = () => {

  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });



  const user = data?.me || data?.user || {};
  // const users = usersData?.users || [];

  console.log(user)

  if (error) console.log(error);

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
            <div className='mt-5'>

              <h1>Info user will see without being logged in goes here</h1>
              <p>Login to view launch page information and progress</p>
              <button className="button text-center">
                <Link to="/login" className="">
                  Login
                </Link>
              </button>

            </div>

          </div>
        </main>
      </>
    );
  }




  // // redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
  //   return <Navigate to="/me" replace />;
  // }

  const renderLaunchPageInfo = () => {
    // if (id) return null; 
    return (
      <>
        <p className='mx-5 mb-5'>
          Render session podcasts/images/worksheets here.
        </p>
      </>
    )
  }




  return (
    <>
      <main className=''>
        <div className="container">
          <div className="mx-5 mt-5">
            <div className="col-12 text-center">
              <img className="img-fluid" src={Logo} style={styles.logo} alt='adventure'></img>
              <h1 className='py-3 titles'>Launch Page</h1>
                {renderLaunchPageInfo()}
            </div>
          </div>
        </div>
      </main>


    </>


  );
};

export default Launch;
