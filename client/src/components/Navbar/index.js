import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo192.png";
import Auth from "../../utils/auth";


function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


    return (
      <>

        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg bg-light navbar-light fixed-top py-5">
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Navbar brand --> */}

            <Link className="navbar-brand logo" to="/">
              {/* <img src={Logo} alt="logo" height="20px" /> */}

              <span className="navBrand ms-3 fs-5">Inside the Helmet</span>
            </Link>

            {/* <!-- Toggle button --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

            {/* <!-- Collapsible wrapper --> */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >


              {/* <!-- Icons --> */}
              <div className="navbar-nav justify-content-end me-1">
                {/* <!-- Link --> */}
                <div className="nav-item me-4 block text-center">
                  <Link to="/about" className="nav-link ">
                    Link
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/location" className="nav-link">
                    Link
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/rentals" className="nav-link">
                    Link
                  </Link>
                </div>

                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/" className="nav-link">
                    Link
                  </Link>
                </div>
                {Auth.loggedIn() ? (
                  <>
                  <div className="nav-item me-4 inline-block text-center">
                  <p className="nav-link" onClick={logout}>
                    Logout
                  </p>
                </div>
                <div className="nav-item me-4 fs-5 text-center inline-block">
                  <Link
                    aria-label="profile"
                    to="/me"
                    className="nav-link text-secondary">
                    <FaUserCircle />
                  </Link>
                </div>
                  </>
                ) : (
                  <>
                  
                <div className="nav-item me-4 inline-block text-center">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </div>
                  </>
                )
                }

              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }

export default Navbar;
