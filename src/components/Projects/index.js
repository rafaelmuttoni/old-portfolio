import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import * as S from './styled'
import SingleProject from '../SingleProject'

const Projects = () => {
  const { portfolioDesktop, portfolioMobile, dynamicDesktop, dynamicMobile } = useStaticQuery(
    graphql`
      query {
        portfolioDesktop: file(relativePath: { eq: "portfolio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        portfolioMobile: file(relativePath: { eq: "portfolio_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 882) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        dynamicDesktop: file(relativePath: { eq: "dynamic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        dynamicMobile: file(relativePath: { eq: "dynamic_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 882) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const portfolioDkImg = <Img fluid={portfolioDesktop.childImageSharp.fluid} />
  const portfolioMbImg = <Img fluid={portfolioMobile.childImageSharp.fluid} />

  const dynamicDkImg = <Img fluid={dynamicDesktop.childImageSharp.fluid} />
  const dynamicMbImg = <Img fluid={dynamicMobile.childImageSharp.fluid} />

  return (
    <S.ContentWrapper>
      <S.ProjectsWrapper>
        <S.ProjectsTitle>web developer projects <span role="img" aria-label="Laptop">💻</span></S.ProjectsTitle>
        <S.ProjectsDescription>latest projects I've worked on, you can <S.ProjectLink to="/contact" fade>check my social medias</S.ProjectLink> for more</S.ProjectsDescription>
      </S.ProjectsWrapper>
      <SingleProject title="muttoni.dev" url="https://muttoni.dev" description="This website's purpose is to serve me as my Resume and Portfolio. Website made from scratch with gatsby-starter-default." tags={['Front-end', 'Javascript', 'HTML5', 'CSS', 'React', 'Gatsby', 'GraphQL', 'styled-components']} dkImg={portfolioDkImg} mbImg={portfolioMbImg}/>
      <SingleProject title="dynamicpoa.com" url="https://dynamicpoa.com" description="Website made for a company that offers solutions with Microsft's products (Office, PowerBI, etc.)." tags={['Front-end', 'Javascript', 'HTML5', 'CSS', 'React', 'Gatsby', 'Tailwindcss', 'Lottie']} dkImg={dynamicDkImg} mbImg={dynamicMbImg}/>
    </S.ContentWrapper>
  )
}

export default Projects