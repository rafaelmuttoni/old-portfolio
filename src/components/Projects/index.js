import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styled"
import SingleProject from "../SingleProject"

const Projects = () => {
  const {
    portfolioDesktop,
    portfolioMobile,
    dynamicDesktop,
    dynamicMobile,
    fabioDesktop,
    fabioMobile,
    pokemonDesktop,
    pokemonMobile,
    compoundDesktop,
    compoundMobile,
  } = useStaticQuery(
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
        fabioDesktop: file(relativePath: { eq: "fabio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        fabioMobile: file(relativePath: { eq: "fabio_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 882) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        pokemonDesktop: file(relativePath: { eq: "pokemon.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        pokemonMobile: file(relativePath: { eq: "pokemon_mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 882) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        compoundDesktop: file(relativePath: { eq: "compound.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        compoundMobile: file(relativePath: { eq: "compound_mobile.jpg" }) {
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

  const fabioDkImg = <Img fluid={fabioDesktop.childImageSharp.fluid} />
  const fabioMbImg = <Img fluid={fabioMobile.childImageSharp.fluid} />

  const pokemonDkImg = <Img fluid={pokemonDesktop.childImageSharp.fluid} />
  const pokemonMbImg = <Img fluid={pokemonMobile.childImageSharp.fluid} />

  const compoundDkImg = <Img fluid={compoundDesktop.childImageSharp.fluid} />
  const compoundMbImg = <Img fluid={compoundMobile.childImageSharp.fluid} />

  return (
    <S.ContentWrapper>
      <S.ProjectsWrapper>
        <S.ProjectsTitle>
          web developer projects{" "}
          <span role="img" aria-label="Laptop">
            💻
          </span>
        </S.ProjectsTitle>
        <S.ProjectsDescription>
          <span className="outdated">
            [completely outdated{" "}
            <span role="img" aria-label="Sweating Face">
              😅
            </span>
            ]
          </span>{" "}
          projects I've worked on, you can{" "}
          <S.ProjectLink to="/contact" fade>
            check my social medias
          </S.ProjectLink>{" "}
          for more projects to come.
        </S.ProjectsDescription>
      </S.ProjectsWrapper>
      <SingleProject
        title="Rafael Muttoni - Portfolio"
        url="https://rafaelmuttoni.com"
        description="This website's purpose is to serve me as my Resume and Portfolio."
        tags={[
          "Front-end",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "Gatsby",
          "GraphQL",
          "styled-components",
        ]}
        dkImg={portfolioDkImg}
        mbImg={portfolioMbImg}
      />
      <SingleProject
        title="Dynamic's Website"
        url="https://dynamicpoa.com"
        description="Website made for a company that offers solutions with Microsft's products (Office, PowerBI, etc.)."
        tags={[
          "Front-end",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "Gatsby",
          "Tailwindcss",
          "Lottie",
        ]}
        dkImg={dynamicDkImg}
        mbImg={dynamicMbImg}
      />
      <SingleProject
        title="Saúde dos Pés"
        url="http://cirurgiaminimanope.com.br/"
        description="Website made for a Doctor, it's purpose is to inform about a specific foot surgery."
        tags={[
          "Front-end",
          "Wordpress",
          "Elementor",
          "Microthemer",
          "HTML5",
          "CSS",
        ]}
        dkImg={fabioDkImg}
        mbImg={fabioMbImg}
      />
      <SingleProject
        title="Pokémon Searcher"
        url="https://pokemonsearcher.netlify.app/"
        description="A React App fetching data from PokéAPI."
        tags={[
          "Front-end",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "Axios",
          "styled-components",
        ]}
        dkImg={pokemonDkImg}
        mbImg={pokemonMbImg}
      />
      <SingleProject
        title="Compound Interest Calculator"
        url="https://juroscompostos.netlify.com/"
        description="A compound interest calculator for your long term investments."
        tags={[
          "Front-end",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "Gatsby",
          "GraphQL",
          "styled-components",
        ]}
        dkImg={compoundDkImg}
        mbImg={compoundMbImg}
      />
    </S.ContentWrapper>
  )
}

export default Projects
