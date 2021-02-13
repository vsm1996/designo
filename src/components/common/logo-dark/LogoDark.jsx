import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/shared/desktop/logo-dark.png'

import './logodark.css'
const LogoDark = () => {
  return (
    <Link to="/">
      <img src={logo} alt="designo logo dark" className="logo-dark" />
    </Link>

  )
}

export default LogoDark
