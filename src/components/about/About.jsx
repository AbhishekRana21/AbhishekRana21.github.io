import React from 'react'
import './about.css'
import ME from '../../assets/img/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Positions</small>
            </article>

            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>University</h5>
              <small>CGPA: 9.23</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
            
          </div>

          <p>
            {/* A person who:<br/>
            • Believes in creating greatness.<br/>
            • Stays optimistic and focuses on the aim.<br/>
            • Is open to collaborate and make a positive impact. */}
            Welcome to my portfolio website. <br/>
            I am pursuing my undergraduate degree in B.Tech Computer Science and Engineering (2021 - 2025) from Graphic Era Hill University, Dehradun.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About