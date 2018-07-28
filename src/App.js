import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Login from './components/login-page';
import {refreshAuthToken} from './actions/auth';
import HeaderBar from './components/header-bar';
import Tables from './components/tables/tables';

import './App.css';

export class App extends Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
        // Try to get a fresh auth token if we had an existing one in
        // localStorage
        this.props.dispatch(refreshAuthToken());
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }
  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }
    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <div className="App">
        <HeaderBar location={this.props.location} />
        <Route exact path="/" component={Login} />
        <Route exact path="/tables" component={Tables} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});
export default withRouter(connect(mapStateToProps)(App));
