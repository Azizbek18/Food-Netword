import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Button from './Components/Button/Button'
import Section from './Components/Section/Section'
import About from './Components/About/About'
import Card from './Components/Card/Card'
import AppDownland from './Components/AppDownland/AppDownland'
import Slider from './Components/Slider/Slider'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Section/>
      <About/>
      <Card/>
      <AppDownland/>
      <Slider/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App