import React from 'react'
import './Header.css'
import Button from '../Button/Button'
function Header() {
    const navlar =['Home', 'About us','Menu','Features','Contact us']
return (
<div className='header'>
    <div className="container">
        <div className="nav">
            <ul className="header__list">
                <li className="header__item">
                    <a href="#" className="header__logo">
                        <img src="./logo.svg" alt="Logo" className="header__pic" />
                    </a>
                </li>
                {navlar.map((matn,index)=>(
                    <li key={index} className="header__item">
                        <a href="#" className="header__link">{matn}</a>
                    </li>
                ))}
            </ul>
            <Button>Booking Now</Button>
        </div>
    </div>
</div>
)
}

export default Header