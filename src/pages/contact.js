import React, { Component } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import contact from "../images/contact.png"

const config = {
  script:
    "https://script.google.com/macros/s/AKfycbwT3nWYek5iDGGU5hLrzzcriAyYENTYv11qSusp8raUQn2gr6Bf/exec",
  sheet: "responses",
  // email: '',
}

const Thanks = () => (
  <div className="thankyou_message">
    <h2>Thanks for reaching out. I will get back to you soon!</h2>
  </div>
)

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "",
        message: "",
        email: "",
        honeypot: "",
      },
      sent: false,
      clicked: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    const { form } = this.state

    // loading
    this.setState({ clicked: true })

    // sent
    const setSent = () => {
      this.setState({ sent: true })
    }

    // checking if bot
    const { honeypot } = form
    if (honeypot) {
      return false
    }

    // sending through xhr as axios won't work (CORS)
    const xhr = new XMLHttpRequest()
    xhr.open("POST", config.script)
    // xhr.withCredentials = true
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function xhrGo() {
      setSent()
    }
    const encoded = Object.keys(form)
      .map(k => {
        return `${encodeURIComponent(k)}=${encodeURIComponent(form[k])}`
      })
      .join("&")

    // finally sending
    xhr.send(encoded)
    return true
  }

  handleChange = ({ target }) => {
    const { id, value } = target
    const { state } = this
    state.form[id] = value
    this.setState(state)
  }

  render() {
    const {
      form: { name, message, email, honeypot },
      sent,
      clicked,
    } = this.state

    return (
      <Layout>
        <SEO title="All Star Window Cleaning - Contact" />
        <div className="contact-container">
          <div className="contact-information-container">
            <h1> Lorem ipsum dalor </h1>
            <br></br>
            <p>
              I'm baby wolf gentrify paleo locavore single-origin coffee.
              Narwhal keffiyeh waistcoat bitters, selvage gochujang bespoke
              austin butcher. PBR&B meh taxidermy swag pork belly snackwave wolf
              chillwave organic yr.
            </p>

            <h1> Prism street art </h1>
            <br></br>
            <p>
              Ennui roof party selvage chicharrones, typewriter blog fashion axe
              tacos man bun. Church-key vaporware cray twee aesthetic selvage
              crucifix hashtag la croix flannel normcore occupy.
              <ul>
                <li>
                  Sriracha pabst pitchfork roof party, four dollar toast pug
                  ennui retro.
                </li>

                <li>
                  Hella chambray pok pok plaid. Distillery stumptown leggings,
                  af flexitarian literally cornhole godard post-ironic pitchfork
                  whatever seitan.
                </li>

                <li>Readymade mustache YOLO scenester.</li>
              </ul>
            </p>
          </div>

          <div className="form-container">
            {sent ? (
              <Thanks />
            ) : (
              <>
                <form
                // method="POST"
                // action={config.script} // change this url
                >
                  <h1> Reach out for a quote</h1>
                  <div>
                    <fieldset>
                      <label htmlFor="name">Name:</label>
                      <input
                        onChange={this.handleChange}
                        id="name"
                        key="name"
                        name="name"
                        placeholder="What your Mom calls you"
                        value={name}
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="message">Message:</label>
                      <textarea
                        onChange={this.handleChange}
                        id="message"
                        key="message"
                        name="message"
                        rows={10}
                        placeholder="Tell me all about it..."
                        value={message}
                      />
                    </fieldset>
                    <fieldset>
                      <label htmlFor="email">Your Email Address:</label>
                      <input
                        onChange={this.handleChange}
                        id="email"
                        key="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.name@email.com"
                        value={email}
                      />
                    </fieldset>

                    <fieldset>
                      <label htmlFor="email">Your Phone Number:</label>
                      <input
                        onChange={this.handleChange}
                        id="phone"
                        key="phone"
                        name="phone"
                        type="phone"
                        required
                        placeholder="(555) 555-5555"
                        value={email}
                      />
                    </fieldset>
                    <fieldset
                      className="honeypot-field"
                      style={{ display: "none" }}
                    >
                      <label htmlFor="honeypot">
                        {/* To help avoid spam, utilize a Honeypot technique with a hidden text field; must
                    be empty to submit the form! Otherwise, we assume the user is a spam bot. */}
                        <input
                          onChange={this.handleChange}
                          id="honeypot"
                          key="honeypot"
                          type="text"
                          name="honeypot"
                          value={honeypot}
                        />
                      </label>
                    </fieldset>
                    {clicked ? (
                      <button type="button" disabled>
                        Loading
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => this.handleClick()}
                        className="myButton"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}
