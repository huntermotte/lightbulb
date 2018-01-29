import 'isomorphic-fetch';
import $ from 'jquery';
import {hashHistory} from 'react-router';

export const RECEIVE_CREDENTIALS = 'RECEIVE_CREDENTIALS';
export const receiveCredentials = (user) => ({
  type: RECEIVE_CREDENTIALS,
  user
});

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const saveUserInDatabase = (username, password) => {
  return (dispatch) => {
    return $.ajax({
      type: 'POST',
      data: JSON.stringify({username, password}),
      contentType: 'application/json',
      url: '/api/register',
      success: (user) => {
        dispatch(receiveCredentials(user))
        hashHistory.push('/login')
      },
      error: (err) => {
        console.log(err)
        alert('Please enter a unique username and/or password')
      }
    })
  }
}

export const getLoggedInUser = (username, password) => {
  return (dispatch) => {
    $.ajax({
      type: 'GET',
      headers: {
	    'content-type': "application/json",
	    authorization: "Basic " + btoa(username + ':' + password)
      },
      url: '/api/me',
      success: (user) => {
        dispatch(receiveCredentials(user))
        hashHistory.push('/learn')
      },
      error: (err) => {
        console.log(err)
        alert('Incorrect username or password! Please try again')
      }
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
  $.ajax({
    type: 'GET',
    url: '/api/logout',
    success: function(data) {
      dispatch(logoutCurrentUser())
      if (data.loggedOut) {
        hashHistory.push('/')
      }
    }
  })
  }
}


// export const getNewVenueSuggestions = () => {
//   return (dispatch) => {
//     $.ajax({
//       type: 'GET',
//       url: 'https://api.foursquare.com/v2/venues/explore?ll=35.77,-78.63&client_id=G21UGA10DG4RYZZFJPZTORRVYB3NHGE2SVWJO33BB2XKHVQR&client_secret=OJF0EI1MJGAXWX3LPJKIEQKU0E4UJRP333PNBC2R5LIFIAWO&v=20161016&section=food',
//       success: (data) => {
//         let randomIndex = Math.floor(Math.random() * 30) + 1
//         dispatch(retrieveVenueData(data.response.groups[0].items[randomIndex].venue))
//         dispatch(setCurrentVenue(data.response.groups[0].items[randomIndex].venue))
//         dispatch(grabNotesForSavedVenues(data.response.groups[0].items[randomIndex].venue.name))
//       },
//       error: (err) => console.log(err)
//     })
//   }
// }
