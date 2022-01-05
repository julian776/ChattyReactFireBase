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
              Registrarse en
            <Link className="title ml-2" to="/">Chatty</Link>
            </h1>
            <p className="lead">Llena la información para crear una cuenta</p>
            <div className="form-group">
              <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
            </div>
            <div className="form-group">
              {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
              <button className="btn btn-primary px-5" type="submit">Registrarse</button>
            </div>
            <p>También puedes registrarte con uno de estos servicios</p>
            <button className="btn btn-info mr-2" type="button" onClick={this.googleSignIn}>
              Registrarse con Google
            </button>
            <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
              Registrarse con GitHub
            </button>
            <hr></hr>
            <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link></p>
          </form>
        </div>
      </div>
    )
  }
}