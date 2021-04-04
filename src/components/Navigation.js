import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

const active = {
  fontWeight: "600",
  // color: "var(--green)",
  "text-decoration": "underline solid #272343",
}

export const NavigationLinks = ({ isMobile = false, closeMenu }) => (
  <div className="inner-links-container">
    <Link to="/services" activeStyle={active}>
      SERVICES
    </Link>

    <Link to="/photos" activeStyle={active}>
      PHOTOS
    </Link>

    <Link to="/contact" activeStyle={active}>
      CONTACT
    </Link>
  </div>
)

const Navigation = props => {
  return (
    <React.Fragment>
      <nav id="navigation">
        <div id="desktop-nav-links">
          <Link id="logo" to="/">
            <img alt="logo" src={logo}></img>
          </Link>
          <NavigationLinks />
        </div>
      </nav>
      <div id="nav-bottom-border" />
    </React.Fragment>
  )
}

export default Navigation
