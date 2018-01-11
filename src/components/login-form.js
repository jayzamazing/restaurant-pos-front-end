import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';

export class LoginForm extends React.Component {
    render() {
        let error;
        if (this.props.error) {
            error = <div className="form-error">{this.props.error}</div>;
        }
        return (
            <form className="login-form" onSubmit={this.props.handleSubmit(values =>
                  this.props.login(values.email, values.password, values.store))}>
                {error}
                <Field
                  label="username"
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty]} inputClass="input-field form-control"/>
                <Field
                  label="Password"
                  component={Input}
                  type="password"
                  name="password"
                  id="password"
                  validate={[required, nonEmpty]}
                  inputClass="input-field form-control"/>
                  <button className="btn btn-success log-in" disabled={this.props.invalid || this.props.submitting}>Log in</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  //dispatch to authenticate the user
  login: (email, password, store) => {
    dispatch(
      login(email, password, store)
    );
  }
});
export default connect(null, mapDispatchToProps)(reduxForm({form: 'login'})(LoginForm));
