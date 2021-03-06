import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error)
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center border-primary mt-7">
        <div className="card container text-center py-5 mt-7">
          <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
            <h1>
              Register in
            <Link className="title ml-2" to="/">Chatty</Link>
            </h1>
            <div className="form-group">
              <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
            </div>
            <div className="form-group">
              {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
              <button className="buttons" type="submit">Register</button>
            </div>
            <p>Or register with...</p>
            <button className="buttons" type="button" onClick={this.googleSignIn}>
              Registrarse con Google
            </button>
            <button className="buttons" type="button" onClick={this.githubSignIn}>
              Registrarse con GitHub
            </button>
            <hr></hr>
            <p>You have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    )
  }
}