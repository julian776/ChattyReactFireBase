import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "./../helpers/auth";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
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
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
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
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center border-primary mt-7">
        <div className="card container text-center py-5 mt-7">
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            Welcome to chatty
            <Link className="title ml-2" to="/">
              Chatty
            </Link>
          </h1>
          <p className="lead">
            LogIn
          </p>
          <div class="form-group">
          <div className="form-group align-item-center">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          </div>
          <div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
            <button className="btn btn-primary px-5" type="submit">Iniciar sesión</button>
          </div>
          <button className="btn btn-info mr-2" type="button" onClick={this.googleSignIn}>
            Sign In With Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Sign In With GitHub
          </button>
          <hr />
          <p>
            Register <Link to="/signup">Registrarse</Link>
          </p>
        </form>
        </div>
      </div>
    );
  }
}