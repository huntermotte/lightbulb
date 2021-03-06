import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Link} from 'react-router';
import Profile from './profile';
import styles from '../styles/learn.css';

export class Learn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNewVenueSuggestions()
  }


  render() {
    return(
      <div className="learnMain" >

      <nav>
        <Link to={'/'}><button className="learn-home">Home</button></Link>
        <Link to={'/'}><button className="learn-logout">Logout</button></Link>
      </nav>

      <div className="learn-intro">
        <h1 className="learn-header">What will you learn today?</h1>
        <h2 className="learn-header">Search for what you need help with: </h2>
        <form className="searchbar">
          <input type="text" id="userInput" onKeyUp={() => {
            let input, filter, h3, topic, i;
            input = document.getElementById("userInput");
            filter = input.value.toUpperCase();
            h3 = document.getElementsByTagName("h3");
            for (i = 0; i < h3.length; i++) {
              if (h3[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                h3[i].parentElement.style.display = "";
              }
              else {
                h3[i].parentElement.style.display = "none";
              }
            }
          }} className="query" name="search" placeholder="Enter skills Ex. JavaScript, React, Node, Angular..." />
          <input type="submit" className="search-button" value="Search" />
        </form>
      </div>

        <div className="learning-sections">
          <div className="row">
            <div className="topic col-md-4">
              <h3 className="topic-header">JavaScript (client side)</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Why isn&#39;t my function working properly?</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">Node</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">Python</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="topic col-md-4">
              <h3 className="topic-header">Angular</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">CSS</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">Ruby</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="topic col-md-4">
              <h3 className="topic-header">Java</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">PHP</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
            <div className="topic col-md-4">
              <h3 className="topic-header">Vue</h3>
              <a href="https://hangouts.google.com/hangouts/_/lightbulblearning.co/huntermotte" target="_blank"><button className="btn">Meet Now</button></a>
              <h4 className="issue-header">Get help with issues such as:</h4>
              <ul className="issue-list">
                <li>Issue 1</li>
                <li>Issue 2</li>
                <li>Issue 3</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.logoutUser()),
  getNewVenueSuggestions: () => dispatch(actions.getNewVenueSuggestions()),
  addVenueToSavedList: (name) => dispatch(actions.addVenueToSavedList(name)),
  addNoteToVenue: (name, note) => dispatch(actions.addNoteToVenue(name, note)),
  grabNotesForSavedVenues: (name) => dispatch(actions.grabNotesForSavedVenues(name))
})

const mapStateToProps = (state, props) => {
  let venueName = '';
  if (state.currentVenue.name) {
    venueName = state.currentVenue.name
  }
  let venueType = '';
  if (state.currentVenue.categories) {
    venueType = state.currentVenue.categories[0].pluralName
  }
  let price = '';
  if (state.currentVenue.price) {
    price = state.currentVenue.price.message
  }
  let address = '';
  if (state.currentVenue.location) {
    address = state.currentVenue.location.address
  }
  let latitude = '';
  if (state.currentVenue.location) {
    latitude = state.currentVenue.location.lat
  }
  let longitude = '';
  if (state.currentVenue.location) {
    longitude = state.currentVenue.location.lng
  }
  let notes = [];
  if (state.notes) {
    notes = state.notes
  }
  let addVenue = false;
  if (state.addVenue) {
    addVenue = state.addVenue
  }
  return {
    venueName,
    venueType,
    price,
    address,
    latitude,
    longitude,
    notes,
    addVenue
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Learn)
