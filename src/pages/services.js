import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import twentyOne from "../images/gallery/21.jpg"
import jumbo from "../images/jumbo.png"

import one from "../images/gallery/1.jpg"
import two from "../images/gallery/2.jpg"
import three from "../images/gallery/3.jpg"
import four from "../images/gallery/4.jpg"
import five from "../images/gallery/5.jpg"
import six from "../images/gallery/6.jpg"
import seven from "../images/gallery/7.jpg"
import eight from "../images/gallery/8.jpg"
import nine from "../images/gallery/9.jpg"
import ten from "../images/gallery/10.jpg"
import eleven from "../images/gallery/11.jpg"
import twelve from "../images/gallery/12.jpg"
import thirteen from "../images/gallery/13.jpg"
import fourteen from "../images/gallery/14.jpg"
import fifteen from "../images/gallery/15.jpg"
import sixteen from "../images/gallery/16.jpg"
import seventeen from "../images/gallery/17.jpg"
import eighteen from "../images/gallery/18.jpg"
import nineteen from "../images/gallery/19.jpg"
import twenty from "../images/gallery/20.jpg"
import twentyone from "../images/gallery/21.jpg"
import twentytwo from "../images/gallery/22.jpg"
import twentythree from "../images/gallery/23.jpg"
import twentyfour from "../images/gallery/24.jpg"
import twentyfive from "../images/gallery/25.jpg"

const About = () => (
  <Layout>
    <SEO title="All Star Window Cleaning - Services" />
    <div className="Services">
      <div className="services-information-container">
        <h1> Lorem ipsum dalor </h1>

        <p>
          I'm baby wolf gentrify paleo locavore single-origin coffee. Narwhal
          keffiyeh waistcoat bitters, selvage gochujang bespoke austin butcher.
          PBR&B meh taxidermy swag pork belly snackwave wolf chillwave organic
          yeast.
        </p>

        <div id="middle-section-content">
          <div class="image-container">
            <img src={one} />
          </div>

          <h1> Prism street art </h1>

          <p>
            Ennui roof party selvage chicharrones, typewriter blog fashion axe
            tacos man bun. Church-key vaporware cray twee aesthetic selvage
            crucifix hashtag la croix flannel normcore occupy.
            <ul>
              <li>
                Sriracha pabst pitchfork roof party, four dollar toast pug ennui
                retro.
              </li>

              <li>
                Hella chambray pok pok plaid. Distillery stumptown leggings, af
                flexitarian literally cornhole godard post-ironic pitchfork
                whatever seitan.
              </li>

              <li>Readymade mustache YOLO scenester.</li>

              <li>
                Sriracha pabst pitchfork roof party, four dollar toast pug ennui
                retro.
              </li>
            </ul>
            <br />
            <div class="button-container">
              <Link to="/contact" className="myButton">
                Get a quote today
              </Link>
            </div>
          </p>
          <br />
        </div>

        <div class="image-container">
          <img src={twentyfive} class="image-float-right" />
        </div>
        <h1> Prism street art </h1>

        <p>
          Ennui roof party selvage chicharrones, typewriter blog fashion axe
          tacos man bun. Church-key vaporware cray twee aesthetic selvage
          crucifix hashtag la croix flannel normcore occupy.
          <ul>
            <li>
              Sriracha pabst pitchfork roof party, four dollar toast pug ennui
              retro.
            </li>

            <li>
              Hella chambray pok pok plaid. Distillery stumptown leggings, af
              flexitarian literally cornhole godard post-ironic pitchfork
              whatever seitan.
            </li>

            <li>Readymade mustache YOLO scenester.</li>

            <li>
              Sriracha pabst pitchfork roof party, four dollar toast pug ennui
              retro.
            </li>
          </ul>
          <br />
          <div class="button-container">
            <Link to="/contact" className="myButton">
              Get a quote today
            </Link>
          </div>
        </p>
      </div>
    </div>
  </Layout>
)

export default About
