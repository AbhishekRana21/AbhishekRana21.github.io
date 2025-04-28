import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKeyboard, FaKaggle} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderMobileSocials = () => {
  return (
    <div className='header__mobile-socials'>
        <a href="https://github.com/AbhishekRana21" target="_blank" className='mbtn'><BsGithub/></a>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank" className='mbtn'><BsLinkedin/></a>
        <a href="https://www.kaggle.com/abhishekrana21" target="_blank" className='mbtn'><FaKaggle/></a>
        <a href="https://leetcode.com/u/AbhishekRana21/" target="_blank" className='mbtn'><SiLeetcode/></a>
        <a href="https://www.keybr.com/profile/12ao5hj" target="_blank"><FaKeyboard/></a>
    </div>
  )
}

export default HeaderMobileSocials