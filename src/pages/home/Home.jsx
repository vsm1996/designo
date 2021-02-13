import React from 'react'
import { Link } from 'react-router-dom'

import PhoneImage from '../../assets/home/desktop/image-hero-phone.png'
import RightArrow from '../../assets/shared/desktop/icon-right-arrow.svg'

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

      <section className="home-projects__container">
        <div className="home-projects__left">
          <div className="home-projects1 web-design">
            <h2>Web Design</h2>
            <Link to="/web-design" className="home-projects__link">View Projects <img src={RightArrow} alt="header phone" className="home-projects__link-arrow" /> </Link>
          </div>
        </div>
        <div className="home-projects__right">
          <div className="home-projects2 app-design">
            <h2>App Design</h2>
            <Link to="/web-design" className="home-projects__link">View Projects <img src={RightArrow} alt="header phone" className="home-projects__link-arrow" /> </Link>
          </div>
          <div className="home-projects2 graphic-design">
            <h2> Graphic Design </h2>
            <Link to="/web-design" className="home-projects__link">View Projects <img src={RightArrow} alt="header phone" className="home-projects__link-arrow" /> </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
