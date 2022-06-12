
import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
// import Logo from "../assets/logo192.png";

import { useMutation, useQuery } from '@apollo/client';
import { ADD_DEMO } from '../../utils/mutations';
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
import Stress from './Stress'



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
  console.log(user);

  // show error
  if (userError) console.log(userError);
  if (userLoading) console.log(userLoading);




// ==============Data UseStates=======================
  const [formData, setFormData] = useState({
    // race: '', 
    // ethnicity: '', 
    // dass: {},
    // dass2:''
    // confirmPassword: ''
  })

  const [demoData, setDemoData] = useState({
    race: '',
    ethnicity: '',
  })


  // ==============Mutations===========================
  const [addDemographics, { loading: demoLoading, error: demoError, data: demographicData }] = useMutation(ADD_DEMO);


// =================Pagination===========================
  // sets multistep pages
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
        return <Stress formData={formData} setFormData={setFormData}/>
      default : 
        console.log('all done')

    }
  }






  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { demographicData } = await addDemographics({
        variables: { ...demoData },
      });
      // const { formData } 

      // check to see if you can add multiple variables from different mutations here:
      // const { questionData } = await addQuestions({
      //   variables: { ...questionState },
      // });

      // sends home after you click submit 
      <Navigate to="/" replace />
    } catch (e) {
      console.error(e);
    }
  };

  // naviagtes to home to populate updated db
  // const sendHomepage = async () => {
  //   window.location.assign("/");
  // }

  const renderForm = () => {

    // if data has already been submitted for demographics:
    // if (demoData) {
    //   return (
    //     <>
    //       {sendHomepage()}
    //     </>
    //   )
    // }

    if (user?.username && Auth.loggedIn && user.athleteType === 'Collegiate Athlete') {
      return (
        <>
          <div className='header'>
            <h3>{FormTitles[page]}</h3>
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
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>

            <button
              onClick={(event) => {
                if (page === FormTitles.length - 1){
                  handleFormSubmit(event);
                  console.log(formData, demoData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}>
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>

            {/* <div className='text-center'>
              <button type="submit" className="button btn-success btn-block mb-4">Submit</button>
            </div> */}
          </div>
        </>
      )
    }

  }



  // if (user?.username && Auth.loggedIn && user.athleteType === 'Collegiate Athlete') {
  return (
    <div className='form container'>
      <div className='progressbar'>
        <div style={{width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%"}}></div>

      </div>
      <div className='form-container container shadow my-4'>
        {renderForm()}

      </div>
    </div>
  )
}
// }

export default Form