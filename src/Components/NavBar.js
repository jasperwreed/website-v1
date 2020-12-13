import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <NavLink 
                to= '/'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to= '/about'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
            >
                About
            </NavLink>
            <NavLink 
                to= '/honors'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
            >
                Honors & Awards
            </NavLink>
            <NavLink 
                to= '/education'
                exact
                activeStyle={{
                    background: 'lightgrey'
                }}
            >
                Education
            </NavLink>
        </div>
    )
}

export default NavBar
