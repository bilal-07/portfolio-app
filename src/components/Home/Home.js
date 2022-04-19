import React from 'react'
import LogoS from '../../assets/images/logo-b.png'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          <br />
          I'm
          <img src={LogoS} alt="" />
          ilal
          <br />
          Web Developer
        </h1>
        <h2>Fronted Developer | JavaScrit Expert | React JS </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
