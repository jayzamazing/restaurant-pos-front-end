import React from 'react';
import {connect} from 'react-redux';
import './header-bar.css';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

export class HeaderBar extends React.Component {
  //logout user and invalidate session
  logOut() {
      this.props.dispatch(setCurrentUser(null));
      this.props.dispatch(setAuthToken(null));
      clearAuthToken();
  }
  render() {
    console.log(this.props.loggedIn)
    let logout;
    if (this.props.loggedIn) {
      logout = (
        <div className="logout-btn">
          <button className="btn logout-btn" onClick={() => this.logOut()}>Log out</button>
        </div>
      );
    }
    return (
      <header className="container-fluid">
        <div className="jumbotron">
          <h1>Restaurant POS</h1>
          {logout}
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(HeaderBar);
