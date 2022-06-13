import React from 'react';
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

const About = () => {


  return (
    <>
      <main className=''>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 text-center">
              <img className="img-fluid" src={Logo} style={styles.logo} alt='adventure'></img>
              <h1 className='py-3 titles'>about</h1>
              <p className='mx-2 mb-5 text-center'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium error alias omnis molestiae accusamus aspernatur assumenda iure aut quidem magni placeat dolore illo quo fugit qui, provident esse reiciendis inventore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam error architecto sed eos, in ullam id amet, laboriosam impedit ducimus sequi fugit quod eligendi cum recusandae odio iste assumenda nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae libero sit. Ratione placeat labore, asperiores consectetur incidunt molestiae dignissimos quisquam neque enim doloribus excepturi aliquam porro exercitationem. Tenetur, harum.
              </p>
            </div>
          </div>
        </div>
      </main>


    </>


  );
};

export default About;
