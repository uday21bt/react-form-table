import React from 'react';
import './navbar.styles.scss';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav className='navbar-container'>
            <ul className="nav-links">
                <Link to='/' className={`nav-link ${path === '/' && 'active'}`}>New Feedback</Link>
                <Link to='/view-data' className={`nav-link ${path === '/view-data' && 'active'}`}>View Data</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
