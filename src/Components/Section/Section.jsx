import React from 'react'
import './Sectoin.css'

function Section() {
const information = [
{
img:'./home.svg',
title:"Quality Food",
text:"It can be a very secure path to earn good money and make you very successful creative entrepreneur."
},
{
img:'./yetkazish.svg',
title:"Food Delivery",
text:"It can be a very secure path to earn good money and make you very successful creative entrepreneur."
},
{
img:'./smile.svg',
title:"Super Taste",
text:"It can be a very secure path to earn good money and make you very successful creative entrepreneur."
}

]
return (

<div className='section'>
    <div className="container">
        <p className="section__text">
            Features
        </p>
        <h2 className="section__title">
            Food with a New Passion
        </h2>
        <ul className="section__list">
            {
            information.map((item,index)=>(
            <li key={index} className="section__item">
                <div className="section__element">
                    <img src={item.img} alt="photo" className="section__img" />
                </div>
                <h2 className="section__subtitle">{item.title}</h2>
                <p className="section__subtext">{item.text}</p>
            </li>
            ))
            }
        </ul>
    </div>
</div>
)
}

export default Section