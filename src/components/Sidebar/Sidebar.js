import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/Bilal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Logo Subtitle" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="about-us"
            activeclassname="active"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            className="contact-us"
            activeclassname="active"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bilalaslam0355/"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/bilal-07"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} color="4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
