import React from 'react';

export default class LoginPage extends React.Component {
  render() {
    return(
      <div>
        <form className="login-form">
          <label htmlFor="userUsername" className="usernameText">Enter Your Username:</label><br />
          <input type="text" name="" className="newUsername form-control" placeholder="Username" value="" />
          <br /><br />
          <label htmlFor="userPassword" className="passwordText">Enter Your Password:</label>
          <input type="password" name="" className="newPassword form-control" placeholder="Password" value="" /><br />
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
