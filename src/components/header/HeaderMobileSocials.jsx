import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderMobileSocials = () => {
  return (
    <div className='header__mobile-socials'>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank" className='mbtn'><BsLinkedin/></a>
        <a href="https://leetcode.com/AbhishekRana21" target="_blank"><SiLeetcode/></a>
        <a href="https://github.com/AbhishekRana21" target="_blank" className='mbtn'><BsGithub/></a>
    </div>
  )
}

export default HeaderMobileSocials