import React from 'react'
import { NavLink } from 'react-router-dom'
import '../global-css.css'

const NavBar = () => {
    return (
        <nav className=' global-nav fixed-top navbar navbar-expand-lg navbar-light bg-transparent'>
            <div className='navbar-nav'>
                <NavLink
                    className='nav-link'
                    to= '/'
                    exact
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Jasper Reed
                </NavLink>
                <NavLink 
                    className='nav-link'
                    to= '/about'
                    exact
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    About
                </NavLink>
                <NavLink 
                    className='nav-link'
                    to= '/honors'
                    exact
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Honors & Awards
                </NavLink>
                <NavLink 
                    className='nav-link'
                    to= '/education'
                    exact
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Education
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
