import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit() {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(this.state); //whatever laziness not a specific reason
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div className="errors">
            {errors.map((e, i) => {
              return <div key={`e-${i}`}>{e}</div>;
            })}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
