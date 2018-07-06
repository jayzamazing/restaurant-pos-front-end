import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/tables" />;
    }

    return (
        <div className="login container">
          <div className="row">
            <div className="col-centered login-area">
              <h3>Welcome to Restaurant POS.</h3>
              <p>Please use the following credentials in order to login.</p>
                <LoginForm />
              </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
