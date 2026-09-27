import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App.jsx'
import { logoutUser } from '../api.js'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try { await logoutUser() } catch (e) { /* ignore network errors on logout */ }
    logout()
    navigate('/')
  }

  const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '')

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          <span className="brand-icon">🍽</span> Saffron & Spice
        </NavLink>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/menu" className={linkClass}>Menu</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          {user ? (
            <>
              <span className="nav-user">Hi, {user.name.split(' ')[0]}</span>
              <button className="btn btn-outline nav-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-outline nav-btn">Login</NavLink>
              <NavLink to="/register" className="btn btn-primary nav-btn">Register</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
