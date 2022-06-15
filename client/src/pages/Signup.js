import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
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



const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    athleteType: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.signup(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/profile">back to the homepage.</Link>
        </p>
      )
    }
    return (

      <>
        <form onSubmit={handleFormSubmit}>

          {/* <!-- Username input --> */}
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder='Username'
              value={formState.name}
              onChange={handleChange} />
          </div>

          {/* <!-- Age input --> */}

          <div className="form-outline mb-4">
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder='Age'
              value = {formState.age}
              onChange={handleChange} />
          </div>

          {/* <!-- Athlete Type input --> */}
          <div className="form-outline mb-4">
            <select
              name="athleteType"
              type="select"
              className="form-select"
              id="athleteType"
              onChange={handleChange}
              value={formState.athleteType}
            >
              <option value="" disabled>Athlete Level</option>
              <option value="Professional Athlete">Professional Athlete</option>
              <option value="Collegiate Athlete">Collegiate Athlete</option>
              <option value="Other">Other</option>
            </select>
          </div>




          {/* <!-- Phone input --> */}
          <div className="form-outline mb-4">
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder='Phone'
              value={formState.phone}
              onChange={handleChange} />
          </div>

          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              placeholder='Email'
              name="email"
              type="email"
              className="form-control"
              value={formState.email}
              onChange={handleChange} />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password"
              className="form-control"
              name="password"
              placeholder='Password'
              value={formState.password}
              onChange={handleChange} />
          </div>

          {/* <!-- Submit button --> */}
          <div className='text-center'>
            <button type="submit" className="button btn-block mb-4">Sign Up</button>

            <p>Already a member? <Link
              className='text-decoration-none fw-bold text-success'
              to="/Login">
             Login </Link>
              instead!
            </p>

          </div>

        </form>
      </>


    );
  };

  const errorAlert = () => {
    if (error) {
      return (
        <>
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Uh Oh!</strong> Please make your password longer than 5 characters.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <main className="container">
        <div className="text-center shadow p-3 mb-5 bg-white rounded my-5">
          <img src={Logo} alt="Inside the Helmet" style={styles.logo} className="my-5" />
          <h2 className='text-center text-uppercase titles mb-5'>sign up</h2>

          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-10'>
                <div className="tab-content text-center">
                  {errorAlert()}

                  {renderForm()}


                </div>
              </div>
            </div>
          </div>
        </div>
      </main >


    </>
  );
};

export default Signup;
