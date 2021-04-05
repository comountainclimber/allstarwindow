import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

import Burger from "-!svg-react-loader!../images/burger.svg"
import Close from "-!svg-react-loader!../images/close.svg"
import logo from "../images/logo.png"

const active = {
  fontWeight: "600",
  // color: "var(--green)",
  textDecoration: "underline solid #272343",
}

const styles = {
  bmBurgerButton: {
    position: "absolute",
    // width: "36px",
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
  bmCross: {
    // background: "#bdc3c7",
  },
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

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

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

      {/* <a id="home" className="menu-item" href="/">
        Home
      </a>

      <Link to="/contact" className="myButton">
        Get a quote today
      </Link>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a> */}
    </div>
  </Menu>
)

const Navigation = props => {
  const [isOpen, toggleIsOpen] = useState(false)
  const { width } = useWindowSize()
  console.log("fppo")

  if (width > 675 && isOpen) {
    console.log("CLOSING")
    toggleIsOpen(false)
  }

  if (isOpen) {
    disablePageScroll()
  } else {
    enablePageScroll()
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
