// import { getStoreKeyName } from '@apollo/client/utilities';
import React from 'react';
// import { FaFacebook } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa'
// import { FaEnvelope } from 'react-icons/fa'
// import { FaPhone } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa'

const styles = {
  footer: {
    bottom: 0,
    width: "100%",
    height: "100px",
    backgroundColor: "black" 

  },
  rightBtn: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  h5: {
    letterSpacing: "10px"
  }

}

const Footer = () => {
  return (
    <>
      <footer className="text-white text-center text-lg-start" style={styles.footer}>



        <div className="container p-4">

        </div>


      </footer>
    </>
  );
};

export default Footer;
