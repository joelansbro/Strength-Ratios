import React from 'react';
import './App.css';
import './bulma.min.css';

function Header(){
    return(
        <nav className="navbar is-dark">
            <div className="navbar-item">
                Github
            </div>
            <div className="navbar-item">
                Twitter
            </div>
            <div className="navbar-item">
                Blog
            </div>
        </nav>
    )
}

export default Header;