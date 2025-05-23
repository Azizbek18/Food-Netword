import React from 'react'
import './Header.css'
import { useState } from 'react';
import Button from '../Button/Button'
function Header() {
const navlar =['Home', 'About us','Menu','Features','Contact us'];
const [menuOpen, setMenuOpen] = useState(false);
return (
<div className='header'>
    <div className="container">
        <div className="nav">
            <div className="header__box">
                <ul className="header__items">
                    <li className="header__item">
                        <a href="#" className="header__logo">
                            <img src="./logo.svg" alt="Logo" className="header__pic" />
                        </a>
                    </li>
                </ul>
                {menuOpen && (
                <button className="close-btn" onClick={()=> setMenuOpen(false)}>
                    &times;
                </button>
                )}
                <ul className={`header__list header__list-mobile ${menuOpen ? "active" : "" }`}>
                    {navlar.map((matn,index)=>(
                    <li key={index} className="header__item">
                        <a href="#" className="header__link">{matn}</a>
                    </li>
                    ))}
                </ul>
            </div>
            <Button>Booking Now</Button>
            <div className="bars" onClick={()=> setMenuOpen(!menuOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </div>
</div>
)
}

export default Header