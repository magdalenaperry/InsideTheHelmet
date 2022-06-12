import React from 'react';

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../utils/queries";

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

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Navigate to="/me" replace />;
  }


  return (
    <>
      <main className=''>
        <div className="container">
          <div className="row mx-5 mt-5">
            <div className="col-12 text-center">
              {/* <img className="img-fluid" src='http://via.placeholder.com/200' alt='adventure'></img> */}
              <h1 className='py-3 titles'>Launch</h1>
              <p className='row mx-5 mb-5 text-center'>
                Render information here, college or professional athletes?
                
              </p>
              
            </div>
          </div>
        </div>
      </main>


    </>


  );
};

export default Launch;
