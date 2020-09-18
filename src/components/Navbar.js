import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
       <Link className="brand-logo center" to="/"> REDUX - APP Con Nít Con Nôi </Link>
        <ul className="left hide-on-med-and-down hoverable">
          <li><NavLink to='/new'> New </NavLink></li>
          <li><NavLink to='/stories'> My Stories</NavLink></li>
          <li><NavLink to='/print'> Print </NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)