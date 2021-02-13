import React from 'react'
import { Link } from 'react-router-dom'

import PhoneImage from '../../assets/home/desktop/image-hero-phone.png'
import { ReactComponent as PassionateSVG } from '../../assets/home/desktop/illustration-passionate.svg'
import { ReactComponent as ResourcefulSVG } from '../../assets/home/desktop/illustration-resourceful.svg'
import { ReactComponent as FriendlySVG } from '../../assets/home/desktop/illustration-friendly.svg'
import CircleSVG from '../../assets/shared/desktop/bg-pattern-small-circle.svg'
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

      <section className="home-values__container">
        <div className="home-values__card">
          <img src={CircleSVG} alt="" className="circle-first" />
          <PassionateSVG />
          <h3 className="home-values__card-title">Passionate</h3>
          <p className="home-values__card-text"> Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions. </p>
        </div>
        <div className="home-values__card m-lr-card">
          <img src={CircleSVG} alt="" className="circle-second" />
          <ResourcefulSVG />
          <h3 className="home-values__card-title">Resourceful</h3>
          <p className="home-values__card-text"> Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs. </p>
        </div>
        <div className="home-values__card">
          <img src={CircleSVG} alt="" className="circle-third" />
          <FriendlySVG />
          <h3 className="home-values__card-title">Friendly</h3>
          <p className="home-values__card-text"> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide. </p>
        </div>
      </section>
    </div>
  )
}

export default Home
