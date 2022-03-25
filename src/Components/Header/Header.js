import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg   bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-warning ps-5" href="/sport">Sports DB</a>
    
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse pe-5" id="navbarNavAltMarkup">
           <div className="navbar-nav ms-auto">
          
              <a className="nav-link active text-light" aria-current="page" href="/">Countries</a>
              <a className="nav-link text-light" href="/">Players</a>
              <a className="nav-link text-light" href="/">Home</a>
              <a className="nav-link text-light" href="/">About</a>
          </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;