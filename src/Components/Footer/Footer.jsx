import React from 'react'
import './Footer.css'

const malumot = ['Landingpage','Documentation','Referral Program','UI & UX Design','Web Design'];
const company = ['Landingpage','Documentation','Referral Program']
const image = ['./instagram.svg','./Facebook.svg','./twitter.svg','./YouTobe.svg']

function Footer() {
return (
<div className='footer'>
    <div className="container">
        <div className="footer__box">
            <img src="./logo.svg" alt="logo" className="footer__logo" />
            <div className="footer__links">
                <a href="#" className="footer__link">www.company name.com</a>
                <a href="email:#" className="footer__link">companyname@gmail.com</a>
                <a href="tel:#" className="footer__link">Phone: +7 485-118-03-25</a>
            </div>
        </div>
        <div className="footer__element">
            <ul className="footer__list">
                <li className="footer__item">
                    <h5 className="footer__title">
                        Home
                    </h5>
                </li>
                {    
                malumot.map((item,index)=>(
                <li key={index} className="footer__item">
                    <a href="" className="footer__link">
                        {item}
                    </a>
                </li>
                ))
                }
            </ul>
        </div>
        <div className="footer__element">
            <ul className="footer__list">
            <li className="footer__item">
                    <h5 className="footer__title">
                        Menu
                    </h5>
                </li>
                {
                malumot.map((item,index)=>(
                <li key={index} className="footer__item">
                    <a href="" className="footer__link">
                        {item}
                    </a>
                </li>
                ))
                }
            </ul>
        </div>
        <div className="footer__element">

            <ul className="footer__list">
                <li className="footer__item">
                    <h5 className="footer__title">
                        Company
                    </h5>
                </li>
                {
                company.map((item,index)=>(
                <li key={index} className="footer__item">
                    <a href="" className="footer__link">
                        {item}
                    </a>
                </li>
                ))
                }
            </ul>
            <ul className='footer_list'>
                <li className="footer_item">
                    {
                    image.map((item,index)=>(
                    <a href='#' key={index} className="footer_link">
                        <img key={index} src={item} alt="Icon" className="footer__icon" />
                    </a>
                    ))
                    }
                </li>
            </ul>
        </div>
    </div>
</div>
)
}

export default Footer