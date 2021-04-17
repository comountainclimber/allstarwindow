import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"

import Burger from "-!svg-react-loader!../images/burger.svg"
import Close from "-!svg-react-loader!../images/close.svg"
import logo from "../images/logo.png"

const active = {
  fontWeight: "600",
  textDecoration: "underline solid #272343",
}

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "28px",
    height: "22px",
    right: "36px",
    top: "36px",
    opacity: "0.75",
  },
  bmBurgerBars: {
    background: "#272343",
  },
  bmCrossButton: {
    height: "32px",
    width: "32px",
    right: "36px",
    top: "36px",
    opacity: "0.75",
  },
  bmCross: {},
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "70%",
    marginTop: "-50px",
  },
  bmMenu: {
    background: "var(--light-grey)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",

    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "purple",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    left: 0,
    marginTop: "-50px",
  },
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
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

export const MobileMenu = ({ isOpen, onStateChange }) => (
  <Menu
    right
    isOpen={isOpen}
    styles={styles}
    onStateChange={onStateChange}
    customCrossIcon={<Close id="mobile-menu-close-button" />}
  >
    <div id="mobile-links-container">
      <Link
        to="/"
        className="myButton"
        onClick={() => onStateChange({ isOpen: false })}
      >
        Home
      </Link>

      <Link
        to="/services"
        className="myButton"
        onClick={() => onStateChange({ isOpen: false })}
      >
        Services
      </Link>

      <Link
        to="/photos"
        className="myButton"
        onClick={() => onStateChange({ isOpen: false })}
      >
        Photos
      </Link>

      <Link
        to="/contact"
        className="myButton"
        onClick={() => onStateChange({ isOpen: false })}
      >
        Contact
      </Link>
    </div>
  </Menu>
)

const Navigation = props => {
  const [isOpen, toggleIsOpen] = useState(false)
  const { width } = useWindowSize()

  if (width > 675 && isOpen) {
    toggleIsOpen(false)
  }

  if (isOpen) {
    if (typeof document !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    }
  } else {
    if (typeof document !== "undefined") {
      document.getElementsByTagName("body")[0].style.overflow = "visible"
    }
  }

  return (
    <React.Fragment>
      <nav id="navigation">
        <div id="desktop-nav-links">
          <Link id="logo" to="/">
            <img alt="logo" src={logo}></img>
          </Link>
          <NavigationLinks />
        </div>

        <MobileMenu
          onStateChange={({ isOpen }) => toggleIsOpen(isOpen)}
          isOpen={isOpen}
        />
      </nav>
      <div id="nav-bottom-border" />
    </React.Fragment>
  )
}

export default Navigation
