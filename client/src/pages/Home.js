

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
      <main>
        <div className="container-fluid">
          
                <Link to="/Location">
                  <button type="button" className="button btn-warning mb-5 px-4 py-2 my-2 fs-5">
                    Button Template
                  </button>
                </Link>
                

          </div>
      </main>



    </>
  );
};

export default Home;
