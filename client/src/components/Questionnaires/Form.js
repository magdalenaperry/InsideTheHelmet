
import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
// import Logo from "../assets/logo192.png";

import { useMutation, useQuery } from '@apollo/client';
import { ADD_DEMO, ADD_DASS, ADD_IPRRS, ADD_MSPSS } from '../../utils/mutations';
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../../utils/queries";

import Auth from '../../utils/auth';

import { SpinnerDotted } from 'spinners-react'

import Demographics from './Demographics';
import MSPSS from './MSPSS';
import IPRRS from './IPRRS';
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

  const [iprrsData, setIprrsData] = useState({
  })

  const [mspssData, setMspssData] = useState({
    mspssSum: ''
  })

  // ==============Mutations===========================
  const [addDemographics, { loading: demoLoading, error: demoError, data: demographicStateData }] = useMutation(ADD_DEMO);

  const [addDass, { loading: dassLoading, error: dassError, data: dassStateData }] = useMutation(ADD_DASS);

  const [addIprrs, { loading: iprrsLoading, error: iprrsError, data: iprrsStateData }] = useMutation(ADD_IPRRS);

  const [addMspss, { loading: mspssLoading, error: mspssError, data: mspssStateData }] = useMutation(ADD_MSPSS);

  // =================Pagination===========================
  const [page, setPage] = useState(0);

  const FormTitles = ["Demographics", "DASS", "IPRRS", "MSPSS",]

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Demographics demoData={demoData} setDemoData={setDemoData} />;
      case 1:
        return <Dass dassData={dassData} setDassData={setDassData} />
      case 2:
        return <IPRRS iprrsData={iprrsData} setIprrsData={setIprrsData} />
      case 3:
        return <MSPSS mspssData={mspssData} setMspssData={setMspssData} />
      default:
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
      await addDemographics({
        variables: { ...demoData },
      });
      await addDass({
        variables: { ...dassData }
      });
      await addIprrs({
        variables: { ...iprrsData }
      });
      await addMspss({
        variables: { ...mspssData }
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
                if (page === FormTitles.length - 1) {
                  handleFormSubmit(event);

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