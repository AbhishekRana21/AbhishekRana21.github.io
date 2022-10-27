import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDev} from 'react-icons/fa'

const HeaderMobileSocials = () => {
  return (
    <div className='header__mobile-socials'>
        <a href="https://linkedin.com/in/AbhishekRana21" target="_blank" className='btn btn-primary'><BsLinkedin/></a>
        <a href="https://github.com/AbhishekRana21" target="_blank" className='btn btn-primary'><BsGithub/></a>
        <a href="https://dev.to/AbhishekRana21" target="_blank" className='btn btn-primary'><FaDev/></a>
    </div>
  )
}

export default HeaderMobileSocials