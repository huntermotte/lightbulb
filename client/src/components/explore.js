import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import VenueMap from './map';

export class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getNewVenueSuggestions()
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

        <h1>Why Not {this.props.venueName}?</h1>

          <button className='save-button' onClick={(event) => {
            event.preventDefault()
            let name = this.props.venueName
            this.props.addVenueToSavedList(name)
          }}>Save this venue!</button><br />

          <h2 style={{display: 'inline'}}>Add some notes to remember about this venue  </h2>

          <form className='add-note-form' onSubmit={(event) => {
            event.preventDefault()
            let name = this.props.venueName
            let note = event.target.userInput.value
            this.props.addNoteToVenue(name, note)
            event.target.userInput.value = ''
          }} >
            <input type="text" name="userInput" placeholder="Add your note here" />
            <input type="submit" value="Add" />
          </form>

          <h2>Address: {this.props.address}</h2>
          <h2>Category: {this.props.venueType}</h2>
          <h2>Price: {this.props.price}</h2>

          <button onClick={(event) => {
            event.preventDefault()
            this.props.getNewVenueSuggestions()
          }}>Get another suggestion</button>

        <VenueMap />

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
  return {
    venueName,
    venueType,
    price,
    address
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore)
