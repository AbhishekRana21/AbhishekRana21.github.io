import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio1.png'
import IMG2 from '../../assets/img/portfolio2.png'

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='Drawlax: Fun Drawing Game' />
          </div>
          <h3>Drawlax: Fun Drawing Game</h3>
          <div className="portfolio__item-cta">
            <a href='https://www.zellospark.com/2022/10/projects-drawlax.html' className='btn' target='_blank'>Blog</a>
            <a href='https://play.google.com/store/apps/details?id=com.ZelloSpark.Drawlax' className='btn btn-primary' target='_blank'>Play Store</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='BLIBO' />
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