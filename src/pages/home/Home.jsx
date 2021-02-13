import React from 'react'
import { Link } from 'react-router-dom'

import PhoneImage from '../../assets/home/desktop/image-hero-phone.png'
import './home.css'
const Home = () => {
  return (
    <div>
      <header className="home-header__container">
        <div className="home-header">
          <h1 className="home-header__title"> Award-winning custom designs and digital branding solutions </h1>
          <p className="home-header__text"> With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services. </p>
          <Link to="/our-company" className="home-header__link"> Learn More </Link>
        </div>
        <img src={PhoneImage} alt="header phone" className="home-header__img" />
      </header>
    </div>
  )
}

export default Home
