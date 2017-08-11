import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <form className="registration-form" onSubmit={(event) => {
          event.preventDefault();
          let username = event.target.username.value;
          let password = event.target.password.value;
          this.props.saveUserInDatabase(username, password)
        }}>
          <label htmlFor="userUsername" className="usernameText">Choose a Username:</label><br />
          <input type="text" name="username" className="newUsername form-control" placeholder="Choose a Username" />
          <br /><br />
          <label htmlFor="userPassword" className="passwordText">Choose a Password:</label>
          <input type="password" name="password" className="newPassword form-control" placeholder="Choose a Password" /><br />
          <br />
            <div className="buttons">
              <input type="submit" className="btn btn-default" value="Register" />
              <a href="index.html"><button type="button" className="btn btn-default">Home</button></a>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserInDatabase: (username, password) => dispatch(actions.saveUserInDatabase(username, password))
})

export default connect(null, mapDispatchToProps)(RegisterPage);
