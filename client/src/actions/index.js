import 'isomorphic-fetch';
import $ from 'jquery';

export const RECEIVE_CREDENTIALS = 'RECEIVE_CREDENTIALS';
export const receiveCredentials = (user) => {
  type: RECEIVE_CREDENTIALS,
  user
};

// make a sync action to


export const saveUserInDatabase = (username, password) => {
  return (dispatch) => {
    $.ajax({
      type: 'POST',
      data: JSON.stringify({username, password}),
      contentType: 'application/json',
      url: 'http://localhost:8080/api/register',
      success: (user) => {
        console.log(dispatch)
        return dispatch(receiveCredentials(user))
        // redirect to <Route path={path} component={component}>
      },
      error: (err) => console.log(err)
    })
  }
}

export const getLoggedInUser = (username, password) => {
  return (dispatch) => {
    fetch('http://localhost:8080/me')
    .then(response => console.log(response))
    .then(response => response.json())
    .then(json => dispatch(receiveCredentials(json.username, json.password)))
    .catch(err => console.log('Error while parsing', err))
  }
}
