import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Navigation from "./Navigation";
import "./layout.scss";
import "../index.css";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
      />
    </Helmet>
    <div className="content">
      <Navigation />
      <div className="router-content">{children}</div>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
