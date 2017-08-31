import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import sunset from './sunset.jpg';
import '../login-page.css';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="login-div" style={{
        background: 'url(' + sunset + ') no-repeat center center fixed',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <form className="login-form" onSubmit={(event) => {
          event.preventDefault();
          let username = event.target.username.value;
          let password = event.target.password.value;
          this.props.getLoggedInUser(username, password)
        }}>
          <label htmlFor="userUsername" className="usernameText">Enter Your Username:</label><br />
          <input type="text" name="username" className="newUsername form-control" placeholder="Username" />
          <br /><br />
          <label htmlFor="userPassword" className="passwordText">Enter Your Password:</label>
          <input type="password" name="password" className="newPassword form-control" placeholder="Password" /><br />
          <br />
            <div className="buttons">
              <input type="submit" className="btn btn-default" value="Login" />
              <a href="index.html"><button type="button" className="btn btn-default">Home</button></a>
            </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLoggedInUser: (username, password) => dispatch(actions.getLoggedInUser(username, password))
})

export default connect(null, mapDispatchToProps)(LoginPage);
