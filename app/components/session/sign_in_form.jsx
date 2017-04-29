import React from 'react';
import merge from 'lodash/merge';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    const user ={user: merge({}, this.state)};
    this.props.signIn(user).then( () => history.push('/test') );
  }

  handleChange(prop) {
    return (e) => {
      if (prop === "email") {
        this.setState({email: e.target.value});
      } else {
        this.setState({password: e.target.value});
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange('email')} />
        <input type="password" onChange={this.handleChange('password')} />
        <input type="submit" value="Sign In" />
      </form>
    )
  }
}

export default SignInForm;
