import React from 'react';
import video from './DTRDrone.mp4'

export default function Home(props) {
  return(
    <div>
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
      >Get help picking out a bar or restaurant in Raleigh</h2>

      <video id="background-video" autoPlay loop muted width="100%" height="100%">
        <source src={video} type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

    </div>
  )
}
