import React from 'react'
import '../global-css.css'

const Education = () => {
    return (
        <div className='full-view'>
            {/* blank background */}
            <h2>Education</h2>
            <h3>University</h3>
            <h4>The University of Vermont</h4>
            {/* logo for uvm */}
            <p>
                I attended The University of Vermont from August 2018 until June 2020.
                The decision to leave was due to a few factors. The structure of the learining
                did not fit my plans for the future, my social life was oversaturated with 
                carelessness and people whom did not seek to better themselves
            </p>
            <h3>Coding Bootcamp</h3>
            <h4>Flatiron School</h4>
            {/* logo for flatiron */}
            <p>
                I learned about Flatiron School mid-way through my first year at UVM, researched
                the structure of learning and in June of 2020, I made my decision to leave UVM and 
                join the Flatiron School.
            </p>
        </div>
    )
}

export default Education