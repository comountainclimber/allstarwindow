import React from "react"
import { navigate } from "gatsby"

import InstagramEmbed from "react-instagram-embed"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Arrow from "-!svg-react-loader!../images/chevron-right.svg"
import Logo from "-!svg-react-loader!../images/svg/jumbo.svg"
import Check from "-!svg-react-loader!../images/check.svg"
import main from "../images/main.png"

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
                <div>
                  <Check /> Residential and commercial
                </div>
                <div>
                  <Check /> Local, friendly and professionsal
                </div>
                <div>
                  <Check /> Serving Jackson, Targhee and the greater Teton
                  valley
                </div>
              </div>
              <button className="myButton">Get a quote today</button>
            </div>

            <Logo id="jumbo-logo" />
          </div>
        </div>

        <div id="main-image-container">
          <img src={main} />

          <div>
            "Banh mi twee man braid biodiesel man bun. Ethical fanny pack wolf
            seitan. Cronut jean shorts literally, thundercats sustainable
            heirloom actually lumbersexual lomo wayfarers."
            <br />
            <small> - Max Lasky (second home owner in Jackson)</small>
          </div>
        </div>

        <div id="insta-embed-container">
          <InstagramEmbed
            url="https://www.instagram.com/p/CDKbhELJOjx/"
            clientAccessToken="162870972371128|4e9354d06e6cf968ad370692564b05a7"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
          <InstagramEmbed
            url="https://www.instagram.com/p/CGqCd_1pNhR/"
            clientAccessToken="162870972371128|4e9354d06e6cf968ad370692564b05a7"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />

          <InstagramEmbed
            url="https://www.instagram.com/p/CFa4dslp-Me/"
            clientAccessToken="162870972371128|4e9354d06e6cf968ad370692564b05a7"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage
