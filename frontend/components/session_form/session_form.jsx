import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  renderErrors() {
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to BenchBnb!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <label>Username
            <input
              type="text"
              name="user[username]"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <label>Password
            <input
              type="password"
              name="user[password]"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <input type="submit" name="" value={this.props.formType} />
        </form>
      </div>
    )
  };
};

export default withRouter(SessionForm);
