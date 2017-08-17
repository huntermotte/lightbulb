import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNewVenueSuggestions()
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <nav>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Bars</button>
          <button>My Notes</button>
          <button onClick={(event) => {
            event.preventDefault()
            this.props.logoutUser()
          }}>Logout</button>
        </nav>

        <h1>Why Not [venue name from API]?</h1>

        <ul>
          <li>Add a Note: +</li>
          <li>Venue Type: []</li>
          <li>Price: $$$</li>
          <li>Reviews from some API</li>
        </ul>

        <p>On the right side, have a map from Google Maps API showing location</p>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.logoutUser()),
  getNewVenueSuggestions: () => dispatch(actions.getNewVenueSuggestions())
})

const mapStateToProps = (state, props) => ({
  venueName: state.venueData
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
