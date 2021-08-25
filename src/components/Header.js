import React from 'react'
import logo from '../assets/bitbay-logo.svg'

const Header = () => {
    return (
        <header>
            <a href="/"> <img src={logo} alt='logo'></img></a>
           
            <nav>
                <ul>
                    <li><a href='/'>BitBay One</a></li>
                    <li><a href='/'>BitBay Two</a></li>
                    <li><a href='/'>BitBay Tree</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
