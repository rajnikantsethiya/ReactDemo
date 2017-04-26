import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  handleChange(event){
    this.setState({ email: event.target.value });
    console.log(this.state.email);
    console.log(this.state.password);
  }

  onSubmit(email,password){
    const { dispatch } = this.props;
    // dispatch (authentication());
  }

    render(){
      return (
        <div>
          <div>
            Email: <input type="text" value={this.state.email} onChange={ this.handleChange }/>
            Password: <input type="text" value={this.state.password} onChange={ this.handleChange }/>
          </div>
          <input type="submit" value="submit" />
        </div>
      );
    }
  }