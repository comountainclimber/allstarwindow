import React from "react"

import instagram from "../images/ig.svg"
import facebook from "../images/fb.svg"

export default () => {
  return (
    <footer className="footer">
      <div className="footer-flex-container">
        <div id="left-footer-content">
          ©{new Date().getFullYear()} allstarwindowcleaning.com
        </div>

        <div id="right-footer-content">
          <a href="mailto:mark@boschguitar.com">
            <span>info@allstarwindowcleaning.com</span>
          </a>

          <div id="footer-social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img alt="facebook-icon" src={facebook} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <img alt="instagram-icon" src={instagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
