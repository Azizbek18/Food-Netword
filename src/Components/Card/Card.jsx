    import React from 'react'
    import './Card.css'
    import { useState } from 'react'
    import Button from '../Button/Button'
    function Card() {
        let cardInfor = [
            {
                img:"./tabaka.jpg",
                title:'Vegie Muffen',
                subtitle:'16$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'
            },
            {
                img:"./go'sht.jpg",
                title:'Salads',
                subtitle:'12$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'
            },
            {
                img:"./hamburgers.jpg",
                title:'Vegie Muffen',
                subtitle:'10$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'
            },
            {
                img:"./salat.jpg",
                title:'Vegie Muffen',
                subtitle:'14$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'

            },
            {
                img:"./tuxumSalat.jpg",
                title:'Vegie Muffen',
                subtitle:'9$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'
            },
            {
                img:"./bishteks.jpg",
                title:'Vegie Muffen',
                subtitle:'15$',
                text:'There are many things are needed to start the Fast Food Business.',
                icon:'./Plus.svg',
                rate:'./WhiteStar.svg',
                glodImg:'./star.svg'
            }

        ]

        const [count,setcount] = useState(Array(cardInfor.length).fill(0));
        const [number,setnumber]= useState(Array(cardInfor.length).fill(0));

        const qushish = (index) => {
            const newcount =[...count];
            newcount[index]++;
            setcount(newcount);
        };     
        const deleteCard = (index,e) => {
            e.stopPropagation();
            const newcount =[...count];
            if (newcount[index]>0) {
                newcount[index]--;
                setcount(newcount);
            }
        } 

        const Tanlash = (index,star) => {
            const newnumber = [...number];
            newnumber[index] = star;
            setnumber(newnumber);
        }

    return (
        <div className='card'>
            <div className="container">
                <p className="card__text">
                    Menu
                </p>
                <h3 className="card__title">
                    Food Full of treaty Love
                </h3>
                <p className="card__subtext">
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, 
                </p>
                <ul className="card__list">
                    {
                    cardInfor.map((item,index)=>(
                        <li key={index} className="card__item">
                            <div className="card__element">
                                <img src={item.img} alt="Photo" className="card__pic" />
                            </div>
                            <div className="card__box">
                                <h3 className="card__subtitle">
                                    {item.title}
                                </h3>
                                <h3 className="card__subtitle">
                                    {item.subtitle}
                                </h3>
                            </div>
                            <p className="card__subtext-name">
                                {item.text}
                            </p>
                            <div className="card__icon">
                                <div onClick={()=>qushish(index)} className="card__icon-plus">
                                    <img src={item.icon} alt="plus" className="card__image" />
                                    {
                                        count[index]>0 && (
                                            <div className="card__numbers" id="numbers">{count[index]}</div>
                                        )
                                    }
                                    {
                                        count[index]>0 && (
                                            <span className="card__delete" onClick={(e)=>deleteCard(index,e)}>+</span>
                                        )
                                    }
                                </div>
                                <div className="card__icon-star">
                                    {
                                        [1,2,3,4,5].map((star)=>(
                                            <img key={star} onClick={()=>Tanlash(index,star)} src={star <= number[index] ? item.glodImg : item.rate} alt="Yulduz" className="card__img" />
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
                <Button>Learn More</Button>
            </div>
        </div>
    )
    }

    export default Card