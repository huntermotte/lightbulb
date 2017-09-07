import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import styles from '../styles/profile.css';
import {Link} from 'react-router';

export class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUserData()
  }

  render() {
    return(
      <div className="profileMain" >
      <nav>
        <button><Link to={'/explore'}>Go Back to Explore</Link></button>
        <button onClick={(event) => {
          event.preventDefault()
          this.props.logoutUser()
        }}>Logout</button>
      </nav>
        <h1>My Venues and Notes</h1>
        {this.props.userVenues.map((venue, index) => {
          return(
            <div key={index}>
              <h2> {venue.name} </h2>
                <ul>
                  {venue.notes.map((note, index) => {
                    return(
                      <li key={index}> {note} </li>
                    )
                  })}
                </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: () => dispatch(actions.getUserData())
})

const mapStateToProps = (state, props) => {
  let userVenues = [];
  if (state.userData) {
    for (let i=0; i < state.userData.length; i++) {
      userVenues[i] = state.userData[i]
    }
  }
  return {
    userVenues
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
