import React from 'react'
import { Link } from 'react-router-dom'

import HomeHeader from '../../components/home-header/HomeHeader'

import { ReactComponent as PassionateSVG } from '../../assets/home/desktop/illustration-passionate.svg'
import { ReactComponent as ResourcefulSVG } from '../../assets/home/desktop/illustration-resourceful.svg'
import { ReactComponent as FriendlySVG } from '../../assets/home/desktop/illustration-friendly.svg'
import CircleSVG from '../../assets/shared/desktop/bg-pattern-small-circle.svg'
import RightArrow from '../../assets/shared/desktop/icon-right-arrow.svg'

import './home.css'
const Home = () => {
  return (
    <div>
      <HomeHeader />

      <section className="home-projects__container">
        <div className="home-projects__left">
          <div className="home-projects-left-card web-design">
            <h2>Web Design</h2>
            <Link to="/web-design" className="home-projects__link">View Projects <img src={RightArrow} alt="header phone" className="home-projects__link-arrow" /> </Link>
          </div>
        </div>
        <div className="home-projects__right">
          <div className="home-projects-right-card app-design">
            <h2>App Design</h2>
            <Link to="/web-design" className="home-projects__link">View Projects <img src={RightArrow} alt="header phone" className="home-projects__link-arrow" /> </Link>
          </div>
          <div className="home-projects-right-card graphic-design">
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
