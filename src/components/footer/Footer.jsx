import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKeyboard} from 'react-icons/fa'
import {SiKaggle, SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ABHISHEK RANA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/AbhishekRana21" target="_blank"><BsGithub/></a>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank"><BsLinkedin/></a>
        <a href="https://www.kaggle.com/abhishekrana21" target="_blank"><SiKaggle/></a>
        <a href="https://leetcode.com/u/AbhishekRana21/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.keybr.com/profile/12ao5hj" target="_blank"><FaKeyboard/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Abhishek Rana. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer