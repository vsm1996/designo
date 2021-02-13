import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/shared/desktop/logo-light.png'

import './logolight.css'
const LogoLight = () => {
  return (
    <Link to="/">
      <img src={logo} alt="designo logo light" className="logo-light" />
    </Link>

  )
}

export default LogoLight
