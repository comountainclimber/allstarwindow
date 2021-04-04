import React from "react"
import { navigate } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import Arrow from "-!svg-react-loader!../images/chevron-right.svg"
import logo from "../images/logo.png"

function LandingPage() {
  return (
    <Layout>
      <SEO
        title="All Star Window Cleaning"
        description="Exceptional window washing and cleaning services across the Teton Valley since 2004."
      />
      <div id="LandingPageContainer">
        <div className="LandingPage">
          <div id="call-to-action-container">
            <div id="call-to-action">
              <span>✨ Make dirty glass a thing of the past ✨</span>

              <h3>
                {" "}
                Serving the Teton Valey since 2004 with world class window
                cleaning and maintenance services
              </h3>

              <div id="services-list">
                <div>Residential and commercial</div>
                <div>Local, friendly and professionsal</div>
                <div>Serving Jackson, Targhee and the greater Teton valley</div>
              </div>
              <button class="primary-button">Get a quote today</button>
            </div>

            <img id="jumbo-logo" src={logo} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
