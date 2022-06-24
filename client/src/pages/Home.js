

import React from 'react';

import { Link } from "react-router-dom";

import Logo from "../assets/logo192.png";

// import ReactPlayer from "react-player";
// import PodcastPlayer from "@mrpollard/react-rss-podcast-player";
// import ReactAudioPlayer from "react-audio-player";
// import ReactHowler from "react-howler";
// import { Media, Player, controls } from "react-media-player";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


// import { Bird } from "../assets/bird.mp3"

// const { PlayPause, MuteUnmute } = controls;


// https://codesandbox.io/s/react-audio-player-forked-to56ys?file=/src/App.js


// 
// const styles = {
//   h2: {
//     letterSpacing: "2px",
//   }
// }

const Home = () => {



  const url =
    "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2022-5-23/273221451-44100-2-104140b337a0f.m4a";

  // const url2 = 'https://www.youtube.com/watch?v=foE1mO2yM04'

  return (
    <>
      {/* sign up button */}
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




        <div className='container border'>
          

        </div>


        <div className="container accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Epsiode Name 1


              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='row'>

                  <div className='col-md-2 text-md-center'>
                    <img src={Logo} alt="" className='img-fluid' />
                    <p>Episode Title Name</p>



                  </div>
                  <div className='col-md-7 text-md-center'>
                    <div className=" border">
                      <AudioPlayer
                        // style={{ width: "300px" }}
                        style={{ borderRadius: 0 }, {height: 150}}
                        // autoPlay
                        // layout="horizontal"
                        src={url}
                        onPlay={(e) => console.log("onPlay")}
                        showSkipControls={true}
                        showJumpControls={false}
                      // header={`Now playing: ${musicTracks[trackIndex].name}`}
                      // footer="All music from: www.bensound.com"
                      // onClickPrevious={handleClickPrevious}
                      // onClickNext={handleClickNext}
                      // onEnded={handleClickNext}
                      // other props here
                      />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam expedita consequatur nisi tenetur ad fuga sint, similique reiciendis labore dolore aliquam.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Epsiode Name 2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel odit, quos mollitia cupiditate esse reprehenderit sit consequatur, pariatur saepe ex nulla voluptas quis ipsum similique accusamus libero reiciendis, aut ipsam!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Episode Name 3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet ut incidunt maxime nesciunt magnam ad explicabo quasi et? Esse aliquam ut, expedita officiis quia non illo explicabo praesentium harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab minima officia excepturi enim esse nihil laborum explicabo. Corrupti quaerat quibusdam facilis vel repudiandae cum, consectetur maiores tempora beatae aliquam.
              </div>
            </div>
          </div>
        </div>





      </main>



    </>
  );
};

export default Home;


{/* <br />
<br /> */}


{/* with video formatting */ }
{/* <p>- if we opt to include video feed as well, use reactplayer</p>
          <ReactPlayer
            controls
            className="react-player"
            width="100%"
            // height="70px"
          url={url2}s
          />
          <br /> */}




{/* <br /> */ }


{/* RSS feed needed for this to work */ }
{/* <p>-needs proper rss feed for this to work, use podcastplayer</p>
          <PodcastPlayer url="https://anchor.fm/s/a1ec84ec/podcast/rss" />
          <br /> */}





{/* <br /> */ }


{/* small audio file */ }
{/* <div className='col-12'>
<p>- small media player can include with titles, etc. Use ReactAudioPlayer</p>
            <img src="https://via.placeholder.com/900x300" alt="" className='img-fluid rounded border'/>
            <ReactAudioPlayer
              className='col-12'
              src={url}
              // autoPlay 
              // width="300"
              controls
              header="Hello"
            />

          </div>
          <br />


          <br /> */}





{/* plays automatically*/ }
{/* <ReactHowler src={url} playing={true} controls /> */ }
// <br />




// <br />



{/* buttons: play and mute */ }
{/* <Media>
            <div className="media">
              <div className="media-player">
                <Player src={url} />
              </div>
              <div className="media-controls">
                <PlayPause />
                <MuteUnmute />
              </div>
            </div>
          </Media> */}



{/* <p>- iFrame setup links to podcast, embedded into site.</p>
          <iframe src="https://anchor.fm/magdalena-perry/embed/episodes/Hey-Brother--Avicci-e1kbdn3" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>


          <br />

          <br />
          <br />

          <br />

          


          <br />

          <br /> */}