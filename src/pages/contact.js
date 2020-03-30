import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Contact from "../components/Contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Get in touch with me! Send me an e-mail or hit me up at my social medias."/>
    <Contact />
  </Layout>
)

export default ContactPage