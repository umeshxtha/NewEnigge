import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

 function Nav() {
  return (
    <>
          <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand logo me-auto"> KELLY</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link  to={'/'}className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/about'} className="nav-link" >About</Link>
              </li>
              <li className="nav-item">
                <Link to={'/resume'}className="nav-link" >Resume</Link>
              </li>
              <li className="nav-item">
                <Link to={'/services'} className="nav-link" >Services</Link>
              </li>
              <li className="nav-item">
                <Link to={'/portfolio'} className="nav-link" >Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link" >Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-icon">
            <a href="#" className="twitter text-muted"><i className="fa-brands fa-twitter" /></a>
            <a href="#" className="facebook text-muted"><i className="fa-brands fa-facebook" /></a>
            <a href="#" className="instagram text-muted"><i className="fa-brands fa-instagram" /></a>
            <a href="#" className="linkedin text-muted"><i className="fa-brands fa-linkedin" /></a>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Nav
