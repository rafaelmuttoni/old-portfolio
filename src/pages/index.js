import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Welcome from "../components/Welcome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Hi, my name is Rafael Muttoni. I'm a self-taught Front-End Developer and this is my Website."/>
    <Welcome />
    
  </Layout>
)

export default IndexPage
