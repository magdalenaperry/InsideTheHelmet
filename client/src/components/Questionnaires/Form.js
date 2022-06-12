
import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
// import Logo from "../assets/logo192.png";

import { useMutation, useQuery } from '@apollo/client';
import { ADD_DEMO, ADD_DASS } from '../../utils/mutations';
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../../utils/queries";

import Auth from '../../utils/auth';

import { SpinnerDotted } from 'spinners-react'

import Demographics from './Demographics';
import Relationships from './Relationships';
import SportInjury from './SportInjury';
import Dass from './Dass'



const Form = () => {
// =================Verification=========================
  // gets id for current user
  const { id } = useParams();

  // gets current user data
  const { loading: userLoading, data: userData, error: userError } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  // if userData available, find 'me', or 'user' or return empty
  const user = userData?.me || userData?.user || {};
  // console.log(user);

  // show error
  if (userError) console.log(userError);
  if (userLoading) console.log(userLoading);




// ==============Data UseStates=======================
  const [dassData, setDassData] = useState({
  })

  const [demoData, setDemoData] = useState({
    race: '',
    ethnicity: '',
  })

  const [formData, setFormData] = useState({
  })

  // ==============Mutations===========================
  const [addDemographics, { loading: demoLoading, error: demoError, data: demographicStateData }] = useMutation(ADD_DEMO);

  const [addDass, {loading: dassLoading, error: dassError, data: dassStateData }] = useMutation(ADD_DASS);

// =================Pagination===========================
  const [page, setPage] = useState(0);

  const FormTitles = ["Demographics", "titlename2", "titlename3", "titlename4",]
  
  const PageDisplay = () => {
    switch(page) {
      case 0 : 
        return <Demographics demoData={demoData} setDemoData={setDemoData}/>;
      case 1 : 
        return <Relationships formData={formData} setFormData={setFormData}/>
      case 2 : 
        return <SportInjury formData={formData} setFormData={setFormData}/>
      case 3:
        return <Dass dassData={dassData} setDassData={setDassData}/>
      default : 
        console.log('all done')
    }
  }

  // navigates to home to populate updated db
  const sendHomepage = async () => {
    window.location.assign("/");
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { demographicStateData } = await addDemographics({
        variables: { ...demoData },
      });
      const { dassStateData } = await addDass({
        variables: { ...dassData}
      });

      // sends home after you click submit
      sendHomepage(); 
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {

    // data exists already because of use state? why does this work?
    if (!demoData && !dassData) {
      return (
        <>
          {sendHomepage()}
        </>
      )
    }

    if (user?.username && Auth.loggedIn && user.athleteType === 'Collegiate Athlete') {
      return (
        <>
          <div className='header'>
            <h3 className='text-center text-uppercase titles'>{FormTitles[page]}</h3>
          </div>
          <div className='body'>
            <form 
            // onSubmit={handleFormSubmit}
            >
            {PageDisplay()}

            </form>
          </div>
          <div className='footer'>
            <button
            className='button'
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>

            <button
              className='button'
              onClick={(event) => {
                if (page === FormTitles.length - 1){
                  handleFormSubmit(event);
                  console.log(dassData, demoData);

                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}>
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>

          </div>
        </>
      )
    }
  }

  // if (user?.username && Auth.loggedIn && user.athleteType === 'Collegiate Athlete') {
  return (
    <div className='container mt-5 pt-5'>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
      </div>

      <div className='form-container container shadow rounded my-4 py-5 px-5'>
        {renderForm()}

      </div>
    </div>
  )
}
// }

export default Form