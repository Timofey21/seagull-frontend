import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <header className="header-container">
            <div className="header-logo">SEAGULL</div>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header

