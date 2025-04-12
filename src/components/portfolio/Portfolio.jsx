import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio1.png'
import IMG2 from '../../assets/img/portfolio2.png'
import IMG3 from '../../assets/img/portfolio3.png'
import IMG4 from '../../assets/img/portfolio4.png'

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt='Jarvis AI: GPT Assistant App' />
          </div>
          <h3>Jarvis AI: GPT Assistant App</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/AbhishekRana21/Jarvis-AI' className='btn' target='_blank'>GitHub</a>
          {/* <a href='https://github.com/AbhishekRana21' className='btn btn-primary' target='_blank'>GitHub</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt='AR Cube: Augmented Reality App' />
          </div>
          <h3>AR Cube: Augmented Reality App</h3>
          <div className="portfolio__item-cta">
          <a href='https://play.google.com/store/apps/details?id=com.ZelloSpark.ARCube' className='btn btn-primary' target='_blank'>Play Store</a>
          <a href='https://blogs.zellospark.com/2023/02/projects-arcube.html' className='btn' target='_blank'>Blog</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='MagiPic' />
          </div>
          <h3>MagiPic</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AbhishekRana21/MagiPic' className='btn' target='_blank'>GitHub</a>
            {/* <a href='https://github.com/AbhishekRana21' className='btn btn-primary' target='_blank'>GitHub</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='BLIBO' />
          </div>
          <h3>BLIBO</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/AbhishekRana21/Blibo' className='btn' target='_blank'>GitHub</a>
            {/* <a href='https://github.com/AbhishekRana21' className='btn btn-primary' target='_blank'>GitHub</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio