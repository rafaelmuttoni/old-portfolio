import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/Welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="I'm a self-taught Front-End Developer currently looking for great projects."/>
    <Welcome />
    
  </Layout>
)

export default IndexPage
