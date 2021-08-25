import React from 'react'
import logo from '../assets/bitbay-logo.svg'

const Header = () => {
const baseUrl = 'https://siemkins07.github.io/orderbook/'

    return (
        <header>
            <a href={baseUrl}> <img src={logo} alt='logo'></img></a>
           
            <nav>
                <ul>
                    <li><a href={baseUrl}>BitBay One</a></li>
                    <li><a href={baseUrl}>BitBay Two</a></li>
                    <li><a href={baseUrl}>BitBay Tree</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
