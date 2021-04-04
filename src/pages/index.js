import React from "react";
import { navigate } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import logo from "../images/jumbo.svg";
import Arrow from "-!svg-react-loader!../images/chevron-right.svg";

function LandingPage() {
  return (
    <Layout>
      <SEO
        title="All Star Window Cleaning"
        description="Exceptional window washing and cleaning services across the Teton Valley since 2004."
      />
      <div id="LandingPageContainer">
        <div className="LandingPage"></div>
      </div>
    </Layout>
  );
}

export default LandingPage;
