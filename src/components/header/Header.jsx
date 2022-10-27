import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h2>Hello I'm</h2>
        <h1>Abhishek Rana</h1>
        <h2 className="text-light">A Computer Science Enthusiast</h2>
        <CTA/>
        <HeaderSocials/>

        <a href="#contact" className='scroll__down'><h3>Scroll Down</h3></a>
      </div>
    </header>
  )
}

export default Header