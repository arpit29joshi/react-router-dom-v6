import React from 'react'
import { NavLink } from 'react-router-dom'

function StyleNavbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Dashboard
      </NavLink>
    </nav>
  )
}

export default StyleNavbar
