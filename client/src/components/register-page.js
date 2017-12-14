import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import styles from '../styles/register.css';
import {Link} from 'react-router';

export class RegisterPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="register-page">
        <form className="registration-form" onSubmit={(event) => {
          event.preventDefault();
          let username = event.target.username.value;
          let password = event.target.password.value;
          this.props.saveUserInDatabase(username, password)
        }}>
            <label htmlFor="userUsername" className="usernameText">Choose a Username:</label><br />
            <input type="text" required="true" name="username" className="newUsername form-control" placeholder="Choose a Username" />
            <br /><br />
            <label htmlFor="userPassword" className="passwordText">Choose a Password:</label><br />
            <input type="password" required="true" name="password" className="newPassword form-control" placeholder="Choose a Password" /><br />
            <br />
              <div className="buttons">
                <input type="submit" className="btn btn-default submit" value="Register" />
                <Link to={'/'}><button type="button" className="btn btn-default home">Home</button></Link>
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
