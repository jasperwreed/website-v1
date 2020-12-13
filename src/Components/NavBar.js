import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='navbar-nav'>
                <NavLink
                    className='nav-link'
                    to= '/'
                    exact
                    activeStyle={{
                        background: 'lightgrey'
                    }}
                >
                    Home
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
