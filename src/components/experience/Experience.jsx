import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Positions held</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__contentR">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>IDZ Digital | Software Developer Intern</h4>
                <small className='text-light'>
                <b>April 2023 - July 2023 | Mumbai, Maharashtra</b><br />
                ➔ Built 14 game prototypes of diverse complexities.<br />
                ➔ Made 2D and 3D assets for the prototypes.<br />
                ➔ Updated the prototypes as per requirement and feedback.
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Google Developer Student Club | Technical Lead</h4>
                <small className='text-light'>
                <b>August 2022 - July 2023 | Graphic Era University, Dehradun</b><br />
                ➔ Helped budding developers among 1000+ members by proving support and guidance.<br />
                ➔ Solved queries and shared resources related to game development.<br />
                ➔ Prepared 7 creative and insightful contents for learners.
                </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Toycathon 2021 | Team Leader</h4>
                <small className='text-light'>
                <b>December 2020 - June 2021 | Dehradun</b><br />
                ➔ Led a team of 4 individuals and reached the Finals of the all India hackathon.<br />
                ➔ Worked on the digital and physical prototype of a board game that promoted logical and creative thinking.<br />
                ➔ Used Python to design and build the player interface along with MySQL to store essential player data in the database.
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
      </div>
    </section>
  )
}

export default Experience