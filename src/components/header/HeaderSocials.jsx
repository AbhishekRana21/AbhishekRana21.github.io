import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank"><BsLinkedin/></a>
        <a href="https://leetcode.com/AbhishekRana21" target="_blank"><SiLeetcode/></a>
        <a href="https://github.com/AbhishekRana21" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials