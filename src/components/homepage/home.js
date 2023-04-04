import React from 'react';
import './home.css';
import logo from './mainpage/homescreen/rys.png';

const Home = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="app logo" />
                </div>

                <div className="navbar-login">
                    {/* <img src={} /> */}
                </div>
            </nav>
        </div>
    )
}

export default Home
