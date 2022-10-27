import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ABHISHEK RANA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/AbhishekRana21"><BsLinkedin/></a>
        <a href="https://github.com/AbhishekRana21"><BsGithub/></a>
        <a href="https://dev.to/AbhishekRana21"><FaDev/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Abhishek Rana. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer