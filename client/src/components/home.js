import React from 'react';
import video from './DTRDrone.mp4';
import styles from '../styles/home.css';
import {Link} from 'react-router';

export default function Home(props) {
  return(
    <div>
    <nav className="mainNav">
      <Link to={'/'}><button className="navButton">Home</button></Link>
      <Link to={'/register'}><button className="navButton">Register</button></Link>
      <Link to={'/login'}><button className="navButton">Login</button></Link>
    </nav>
      <h1 style={{
        position: 'absolute',
        textAlign: 'center',
        top: '30%',
        width: '100%',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontWeight: 'bold'
      }}
      >Where Should We Go?</h1>
      <h2 style={{
        position: 'absolute',
        textAlign: 'center',
        top: '40%',
        width: '100%',
        color: 'white',
        fontFamily: 'Ubuntu',
        fontWeight: 'bold'
      }}
      >Get help picking out a restaurant in Raleigh</h2>

      <Link to={'/register'}>
        <button className="getStarted" style={{
          position: 'absolute',
          textAlign: 'center',
          top: '55%',
          width: '150px',
          height: '40px',
          left: '45%',
          fontFamily: 'Ubuntu',
          fontWeight: 'bold'
        }}>
          Get Started
        </button>
      </Link>

      <video id="background-video" autoPlay loop muted width="100%" height="100%">
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

    </div>
  )
}
