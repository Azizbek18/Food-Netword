import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import './Slider.css'

const material = [
    {
        img:'./avatar.jpg',
        text: 'You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.',
        WhitestarImg:'./WhiteStar.svg',
        GoldStar:'./star.svg',
        subtitle:'Augusta W. Reynoso',
        subtext:'UI&UX DeSIGNER'
    },
    {
        img:'./ronaldo.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque omnis praesentium facilis magni ad exercitationem error accusamus sapiente velit fugiat consequuntur, reprehenderit quo quasi!',
        WhitestarImg:'./WhiteStar.svg',
        GoldStar:'./star.svg',
        subtitle:'Leo Meri',
        subtext:'Developper'
    },
    {
        img:'./bola.png',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus nulla maxime exercitationem enim ratione porro fuga quasi, similique repudiandae dignissimos minima minus recusandae?',
        WhitestarImg:'./WhiteStar.svg',
        GoldStar:'./star.svg',
        subtitle:'Augusta W. Reynoso',
        subtext:'Programist'
    }
]


function Slider() {
    const [number,setnumber]= useState(Array(material.length).fill(0));
    const [current, setcurrent]= useState(0);

    const prevSlide = () => {
        setcurrent(prev=>(prev===0?material.length-1:prev-1))
    }
    const nextSlide = () => {
        setcurrent(prev=>(prev===material.length-1?0:prev+1))
    }
    const Tanlash = (star) => {
        const newnumber = [...number];
        newnumber[current] = star;
        setnumber(newnumber);
    }
    const box = material[current];
  return (
    <div className='slider'>
        <div className="container">
            <p className="slider__text">
                Testimonial
            </p>
            <h4 className="slider__title">
                Making Food great again and again
            </h4>
            <p className="slider__subtext">
                You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.
            </p>
            <div className="slider__box">
                <div className="slider_arrow" onClick={prevSlide}>
                    <IoIosArrowBack className='slider__arrow'/>
                </div>
                <div className="slider__main">
                    <div key={current} className="slider__main-box">
                        <img src="./orqaFon.svg" alt="Orqa Fon" className="slider__photo" />
                        <div className="slider__element">
                            <img src={box.img} alt="image" className="slider__pic" />
                        </div>
                        <p className="slider__subtext-name">
                            {box.text}
                        </p>
                        <div className="slider__icon-star">
                            {
                                [1,2,3,4,5].map((star)=>(
                                    <img key={star} onClick={()=>Tanlash(star)} src={star <= number[current] ? box.GoldStar : box.WhitestarImg} alt="Yulduz" className="card__img" />
                                ))
                            }
                        </div>
                        <h4 className="slider__subtitle">
                            {box.subtitle}
                        </h4>
                        <p className="slider__text-name">
                            {box.subtext}
                        </p>
                    </div>
                        
                </div>
                <div className="slider_arrow" onClick={nextSlide}>
                <IoIosArrowForward className='slider__arrow' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider