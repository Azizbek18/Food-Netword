import React from 'react'
import "./About.css"
import Button from '../Button/Button'
function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__left">
                <img src="./foodphoto.jpg" alt="photo" className="about__img" />
            </div>
            <div className="about__rigth">
                <p className="about__text">
                    About us
                </p>
                <h2 className="about__title">
                    Food Stalls with Persons but  to  Product marketing plane
                    catlogues etc to. 
                </h2>
                <p className="about__subtext">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                    equipment  make your marketing plane Effective.
                </p>
                <Button>Read More</Button>
            </div>
        </div>
    </div>
  )
}

export default About