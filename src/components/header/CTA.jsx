import React from 'react'
import CV from '../../assets/pdf/AbhishekRana.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="AbhishekRana" className='btn btn-primary'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA