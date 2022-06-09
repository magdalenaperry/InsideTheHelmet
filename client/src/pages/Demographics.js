import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_DEMO } from '../utils/mutations';

import Auth from '../utils/auth';


const Demographics = () => {

  const [demoState, setDemoState] = useState({
    question1: '',
    question2: '',
    question3: ''
  });

  const [addDemographics, {error, data}] = useMutation(ADD_DEMO);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDemoState({
      ...demoState, [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addDemographics({
        variables: {...demoState },
      });
      // Auth.login(data)
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>Thanks!</p>
      )
    }

    return (
      <>
      <form onSubmit={handleFormSubmit}>

          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name=""
              placeholder='question 1'
              value={demoState.name}
              onChange={handleChange} />
          </div>

          {/* <!-- Age input --> */}

          <div className="form-outline mb-4">
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder='Age'
              value={demoState.age}
              onChange={handleChange} />
          </div>

      </form>
      
      </>
    )
  }

};


export default Demographics;