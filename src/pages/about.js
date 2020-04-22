import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from '../components/About'

const AboutPage = () => (
  <Layout>
    <SEO title="About me" description="Get to know more about my background as a Developer and the skills I know and work with."/>
    <About />
  </Layout>
)

export default AboutPage