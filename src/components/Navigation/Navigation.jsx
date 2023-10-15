import React from 'react'
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className="navigation_container">
            <a href="https://mlekpol.com.pl/" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + `/images/MLEKPOL_GREYSCALE.svg`} alt="" />
            </a>

            <ul>
                <li>
                    <p>pro<span>tein</span>25</p>
                </li>
                <li>
                    <p>pro<span>dukty</span></p>
                </li>
                <li>
                    <p>pro<span>mocje</span></p>
                </li>
                <li>
                    <p>pro<span>pozycje</span></p>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation