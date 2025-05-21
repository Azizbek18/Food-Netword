import React from 'react'
import './Hero.css'
import Button from '../Button/Button'

function Hero() {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__left">
                <h1 className="hero__title">
                    Making time a good time by making food the good food.
                </h1>
                <p className="hero__text">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
                </p>
                <div className="hero__element">
                    <Button>Order Now</Button>
                    <Button>Food Details</Button>
                </div>
            </div>
            <div className="hero__rigth">
                <img src="./food.png" alt="Food" className="hero__pic" />
                <img src="./soya.png" alt="soya" className="hero__img" />
            </div>
        </div>
    </div>
  )
}

export default Hero