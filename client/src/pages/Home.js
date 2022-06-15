

import React from 'react';

// import { FaLocationArrow, FaRegCheckCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

// import Hikers from "../assets/hikers.jpg"
// import Kayak from "../assets/kayak.jpg"

const styles = {
  h2: {
    letterSpacing: "2px",
  }
}

const Home = () => {

  return (
    <>
      <main className="">
        <div className="container">
          <div className='mt-5'>
            <Link to="/signup">
              <button type="button"
                className="button btn-accent mb-5 px-4 py-2 my-2 fs-5">
                Sign Up
              </button>
            </Link>
          </div>
                
                

          </div>
      </main>



    </>
  );
};

export default Home;
