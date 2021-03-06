import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { SpinnerDotted } from 'spinners-react'
import Logo from "../assets/logo192.png";

import Auth from '../utils/auth';


const styles = {
  logo: {
    height: "100px",
    width: "100px"
  }
}

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const errorAlert = () => {
    if (error) {
      return (
        <>

          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Uh Oh!</strong> Please check your credentials and try again.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            </button>
          </div>
        </>
      )
    }
  }

  const renderForm = () => {
    if (data) {
      return (
        <main>
          <div className='container text-center'>
            <SpinnerDotted />
          </div>

        </main>
      )
    }
    return (

      <>
        <form onSubmit={handleFormSubmit}>

          {/* <!-- Email input --> */}
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
            <button type="submit" className="button btn-accent px-4 btn-block mb-4 fw-light">Login</button>

            {/* <!-- Register buttons --> */}
            <p>Not a member? <Link
              className='text-decoration-none fw-bold text-success'
              to="/Signup">
              Sign up </Link>
              instead!
            </p>
          </div>
        </form>
      </>
    );
  };

  return (
    <>


      <main className='container'>
        <div className='text-center shadow p-3 mb-5 bg-white rounded my-5' >
          <img src={Logo} alt="Inside the Helmet" style={styles.logo} className="my-5" />
          <h2 className='text-center text-uppercase titles mb-5'>login</h2>

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

export default Login;
