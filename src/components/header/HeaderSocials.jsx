import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaKeyboard} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/AbhishekRana21" target="_blank"><BsGithub/></a>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank"><BsLinkedin/></a>
        <a href="https://www.keybr.com/profile/12ao5hj" target="_blank"><FaKeyboard/></a>
    </div>
  )
}

export default HeaderSocials