import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_DEMO } from '../utils/mutations';
import {
  // QUERY_USERS,
  QUERY_USER,
  QUERY_ME,
} from "../utils/queries";

import Auth from '../utils/auth';

import { SpinnerDotted } from 'spinners-react'


const styles = {
  container: {
    marginTop: "100px",
  },
  logo: {
    height: "100px",
    width: "100px"
  }
}

const Demographics = () => {
// gets id for current user
  const { id } = useParams();

// gets current user data
  const { loading: userLoading, data: userData, error: userError } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

// if userData avaialable, find 'me', or 'user' or return empty
  const user = userData?.me || userData?.user || {};
  console.log(user);

// show error
  if (userError) console.log(userError);
  if (userLoading) console.log(userLoading);


// set states for demographics questions
  const [demoState, setDemoState] = useState({
    race: '',
    ethnicity: '',
    // question3: ''
  });

  

  const [addDemographics, { loading: demoLoading, error: demoError, data: demoData }] = useMutation(ADD_DEMO);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDemoState({
      ...demoState, [name]: value,
    });
  };

  // console.log(demoData);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { demoData } = await addDemographics({
        variables: { ...demoState },
      });

    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {

    if (demoData) {
      return (
        <>
        <Navigate to="/me" replace />
          <p>
            Success! You may now head{' '}
            <Link to="/profile">back to the homepage.</Link>
          </p>
        </>

      )
    }

    if (user?.username && Auth.loggedIn && user.athleteType === 'Collegiate Athlete') {
      return (
        <>
          <form onSubmit={handleFormSubmit}>
{/* 
            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control"
                name=""
                placeholder='question 1'
                value={demoState.name}
                onChange={handleChange} />
            </div> */}

            {/* <!-- Age input --> */}

            {/* <div className="form-outline mb-4">
              <input
                type="number"
                className="form-control"
                name="age"
                placeholder='Age'
                value={demoState.age}
                onChange={handleChange} />
            </div> */}

            <div className="form-outline mb-4">
              <select
                name="race"
                type="select"
                className="form-select"
                id="race"
                onChange={handleChange}
                value={demoState.race}
              >
                <option value="" disabled>Race</option>
                <option value="race1">Race 1</option>
                <option value="race2">Race 2</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-outline mb-4">
              <select
                name="ethnicity"
                type="select"
                className="form-select"
                id="ethnicity"
                onChange={handleChange}
                value={demoState.ethnicity}
              >
                <option value="" disabled>Ethnicity</option>
                <option value="ethnicity1">Ethnicity 1</option>
                <option value="ethnicity2">Ethnicity 2</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='text-center'>
              <button type="submit" className="btn btn-success btn-block mb-4">Submit</button>
            </div>

          </form>
        </>
      )
    }






  }
  return (
    <>
      <main style={styles.main}>
        <div className="text-center" style={styles.container}>
          {/* <img src={Logo} alt="Vita Amet" style={styles.logo} className="mb-5" /> */}

          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-6 '>
                <div className="tab-content">
                  {/* {errorAlert()} */}

                  {renderForm()}


                </div>
              </div>
            </div>
          </div>
        </div>
      </main >

    </>
  )

};


export default Demographics;