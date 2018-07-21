import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './login-form.css';

export class LoginForm extends React.Component {
    componentWillMount() {
      //deal with setting the initial values for the fields
      this.props.initialize({
        username: 'jack',
        password: 'ifts(8@3re)$'
      });
    }
    render() {
        let error;
        if (this.props.error) {
            error = <div className="form-error">{this.props.error}</div>;
        }
        return (
            <form className="col-centered login-form col-xs-12 col-sm-8 col-md-8 col-md-8 center_div ng-pristine ng-valid" onSubmit={this.props.handleSubmit(values =>
                  this.props.login(values.email, values.password, values.store))}>
                {error}
                <Field
                  label="username"
                  placeholder="Please enter your username"
                  component={Input}
                  type="text"
                  name="username"
                  id="username"
                  validate={[required, nonEmpty]} inputClass="input-field form-control"/>
                <Field
                  label="password"
                  placeholder="Please enter your password"
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
