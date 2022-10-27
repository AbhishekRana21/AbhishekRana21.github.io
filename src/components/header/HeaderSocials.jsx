import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AbhishekRana21" target="_blank"><BsGithub/></a>
        <a href="https://dev.to/AbhishekRana21" target="_blank"><FaDev/></a>
    </div>
  )
}

export default HeaderSocials