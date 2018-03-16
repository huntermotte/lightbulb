import React from 'react';
import styles from '../styles/home.css';
import {Link} from 'react-router';
import lightbulb from './images/lightbulb.png';
import mongodb from './images/mongodb.png';
import reactLogo from './images/react-logo.png';
import js from './images/js.png';
import angular from './images/angular.svg';
import python from './images/python.png';
import vue from './images/vue.png';
import node from './images/node.png';
import ruby from './images/ruby-on-rails.jpeg';
import Typing from 'react-typing-animation';

const programmingTopics = ['JavaScript', 'Node.js', 'CSS', 'Bootstrap', 'HTML', 'ReactJS', 'AngularJS', 'Git + Github', 'Python', 'Java', 'Vue', 'Ruby on Rails', 'Go', 'PHP', 'API Implementation'];
let randomIndex = Math.floor(Math.random() * programmingTopics.length);
let skill = programmingTopics[randomIndex];

const skillAnimation = (skill) => (
  <Typing speed={350} loop={true} onFinishedTyping={(skill) => {skillAnimation(skill)}} className="typewriter"><Typing.Delay ms={400} />{skill}?<Typing.Delay ms={1000} /><Typing.Backspace count={30} /></Typing>
);

export default function Home(props) {



  return(
    <div className="home-container">

    <nav className="mainNav">
      <h1 className="logo"><img src={lightbulb} /> Lightbulb Learning</h1>
      <Link to={'/'}><button className="homeButton">Home</button></Link>
      <Link to={'/learn'}><button className="learnButton">Learn</button></Link>
      <Link to={'/register'}><button className="registerButton">Register</button></Link>
      <Link to={'/login'}><button className="loginButton">Login</button></Link>
    </nav>


    <div className="main-intro">
      <div className="row general-summary">
        <h1 className="motto col-md-6">Get programming help, exactly when you need it <br></br>
          <div className="row logo-row">
            <img className="skill-logos" alt="JavaScript" src={js} height="50" width="50" />
            <img className="skill-logos" alt="Angular" src={angular} height="50" width="50" />
            <img className="skill-logos" alt="React" src={reactLogo} height="50" width="50" />
            <img className="skill-logos" alt="Node" src={node} height="50" width="70" />
            <img className="skill-logos" alt="Python" src={python} height="50" width="50" />
            <img className="skill-logos" alt="MongoDB" src={mongodb} height="50" width="35" />
            <img className="skill-logos" alt="Vue" src={vue} height="50" width="50" />
            <img className="skill-logos" alt="Ruby on Rails" src={ruby} height="50" width="50" />
          </div>
        </h1>
        <h2 className="col-md-6"><i className="fa fa-bolt" aria-hidden="true" /> Select the topic you need help with and find an expert who can assist <br></br><br></br><i className="fa fa-bolt" aria-hidden="true" /> Work more efficiently and consult with some of the brightest around the world</h2><br></br>
      </div>



      <div className="row help-examples">
        <h2 className="skill-suggestion">Need help with {skillAnimation(skill)} Find a mentor!</h2>
        <button className="mentor-explore">Meet Our Mentors</button>
      </div>
    </div>

      <div id="summary-sections">
			   <div className="row no-gutter">
				     <div className="col-lg-4 callout">
					       <span><i className="fa fa-code fa-5x" aria-hidden="true"></i></span>
					       <h2 className="header">Become a better programmer</h2>
					       <p className="subheader">Avoid common mistakes, become a debugging champion, and learn new concepts. </p>
				     </div>

				     <div className="col-lg-4 callout">
					        <span><i className="fa fa-handshake-o fa-5x" aria-hidden="true"></i></span>
					        <h2 className="header">Get expert advice from a human</h2>
					        <p className="subheader">Get tips and tricks directly from experienced senior developers.  </p>
				     </div>

				     <div className="col-lg-4 callout">
					        <span><i className="fa fa-lightbulb-o fa-5x" aria-hidden="true"></i></span>
					        <h2 className="header">Less time wasted on the wrong solutions</h2>
					        <p className="subheader">Get right to the source of an issue quickly and efficiently. </p>
				     </div>
			   </div>
		  </div>

      <footer>
        <ul>
          <li className="footer-links">About</li>
          <li className="footer-links">Contact Us</li>
          <li className="footer-links">Become a Mentor</li>
          <li className="footer-links">Mentor Network</li>
        </ul>
      </footer>

    </div>
  )
}
