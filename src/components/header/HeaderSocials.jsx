import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKeyboard, FaKaggle} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/AbhishekRana21" target="_blank"><BsGithub/></a>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank"><BsLinkedin/></a>
        <a href="https://www.kaggle.com/abhishekrana21" target="_blank"><FaKaggle/></a>
        <a href="https://leetcode.com/u/AbhishekRana21/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.keybr.com/profile/12ao5hj" target="_blank"><FaKeyboard/></a>
    </div>
  )
}

export default HeaderSocials