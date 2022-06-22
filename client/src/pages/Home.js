

import React from 'react';

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";
import PodcastPlayer from "@mrpollard/react-rss-podcast-player";
import ReactAudioPlayer from "react-audio-player";
import ReactHowler from "react-howler";
import { Media, Player, controls } from "react-media-player";
const { PlayPause, MuteUnmute } = controls;


// const styles = {
//   h2: {
//     letterSpacing: "2px",
//   }
// }

const Home = () => {

  const url =
    "https://anchor.fm/s/3ca3951c/podcast/play/34000987/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-4-22%2F189000537-44100-2-8ece7d27bd7d2.m4a";

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


          <br />
          <ReactPlayer
            controls
            className="react-player"
            // width="100%"
            // height="100%"
            url={url}
          />
          <br />
          <PodcastPlayer url={url} />
          <br />

          {/* normal audio player */}
          <ReactAudioPlayer src={url} autoPlay controls />
          <br />


          <ReactHowler src={url} playing={true} controls />
          <br />

          {/* buttons: play and mute */}
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






        </div>
      </main>



    </>
  );
};

export default Home;
