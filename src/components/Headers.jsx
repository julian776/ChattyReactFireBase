import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
    return (
    <header>
    <nav >
        <Link to="/">Chatty</Link>
        <button type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <Link className="nav-item nav-link mr-3" to="/chat">Perfil</Link>
              <button className="btn btn-secondary mr-3" onClick={() => auth().signOut()}>Salir</button>
            </div>
            : <div>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;