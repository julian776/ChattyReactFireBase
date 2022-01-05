import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <section>
          <div className=" d-flex justify-content-center border-primary mt-7">
            <div className="card container text-center py-5 mt-7">
              <h1 className="display-4">Welcome to chatty</h1>
              <div className="mt-4">
                <Link className="buttons" to="/signup">Register</Link>
                <Link className="buttons" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}