import React from 'react'
import '../global-css.css'

const About = () => {
    return (
        <div className='full-view bg-dark text-white container-fluid'>
            <h2>
                Who Am I?
            </h2>
            <p>
                I am an Athlete, Activist, and Full Stack Web Developer, to say the least
            </p>
            <h3>Athlete</h3>
            <p>
                + Former Division 1 atlete for The University of Vermont Track & Field program
            </p>
            <h3>Activist</h3>
            <p>
                + Notable presence in my community through sports and organizations
                such as Vermont Partnership For Fairness and Diversity, Student-Athlets Of Color
                (SAOC) at The University of Vermont (UVM), and Alpha Gamma Rho (AGR) at UVM.
            </p>
            <h3>Full Stack Web Developer</h3>
            <p>
                + Experienced in Ruby on Rails and JavaScript based 
                programming with a background in Full Stack Web Development.
            </p>
            <p>
                + Developed SPA’s using a mixture of Ruby on Rails (backend), 
                JavaScript, Reactjs, and Redux (frontend) to generate a clean user experience.
            </p>
        </div>
    )
}

export default About