import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <p className="contact__text">
                Contact 
            </p>
            <h4 className="contact__title">
                Food Stalls with Persons but also specialized <br /> equipment, Skills to manage.
            </h4>
            <form action="#" className='contact__form'>
                <input type="text" className='contact__input' placeholder='Enter your message' />
                <button className='contact__btn' type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact