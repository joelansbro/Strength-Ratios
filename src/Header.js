import React from 'react';
import './bulma.min.css';
import './App.css';

function Header(){
    return(
        <nav className="navbar is-dark">
            <div className="navbar-item">
                <a href="https://github.com/joelansbro">Github</a>
            </div>
            <div className="navbar-item">
                <a href="https://twitter.com/joel_ansbro">Twitter</a>
            </div>
            <div className="navbar-item">
                <a href="https://joelansbro.com">Blog</a>
            </div>
        </nav>
    )
}

export default Header;