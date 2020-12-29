import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as S from "./styled"
import SingleProject from "../SingleProject"

const Projects = () => {
  const {
    terapeutapro,
    zaply,
    portfolio,
    dynamic,
    fabio,
    pokemon,
    compound,
  } = useStaticQuery(
    graphql`
      query {
        terapeutapro: file(relativePath: { eq: "terapeutapro.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        zaply: file(relativePath: { eq: "zaply.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        portfolio: file(relativePath: { eq: "portfolio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        dynamic: file(relativePath: { eq: "dynamic.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        fabio: file(relativePath: { eq: "fabio.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        pokemon: file(relativePath: { eq: "pokemon.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        compound: file(relativePath: { eq: "compound.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, maxHeight: 468) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const terapeutaproImg = <Img fluid={terapeutapro.childImageSharp.fluid} />
  const zaplyImg = <Img fluid={zaply.childImageSharp.fluid} />
  const portfolioImg = <Img fluid={portfolio.childImageSharp.fluid} />
  const dynamicImg = <Img fluid={dynamic.childImageSharp.fluid} />
  const fabioImg = <Img fluid={fabio.childImageSharp.fluid} />
  const pokemonImg = <Img fluid={pokemon.childImageSharp.fluid} />
  const compoundImg = <Img fluid={compound.childImageSharp.fluid} />

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
          projects I've worked on, you can{" "}
          <S.ProjectLink to="/contact" fade>
            check my social medias
          </S.ProjectLink>{" "}
          for more projects to come.
        </S.ProjectsDescription>
      </S.ProjectsWrapper>

      <SingleProject
        title="Terapeuta Pro"
        url="https://terapeutapro.com.br"
        description="A software built to help therapists organize their schedule and finances."
        tags={[
          "Fullstack",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "Material UI",
          "Node",
          "Adonis",
          "MySQL",
        ]}
        Img={terapeutaproImg}
      />
      <SingleProject
        title="Recipe2Basket"
        url="https://recipe2basket.com"
        description="Worked with the team at Zaply to develop a SAAS Web App for the food industry called Recipe2Basket"
        tags={[
          "Fullstack",
          "Javascript",
          "HTML5",
          "CSS",
          "React",
          "styled-components",
          "Material UI",
          "Node",
          "Express",
          "Adonis",
          "MySQL",
        ]}
        Img={zaplyImg}
      />
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
        Img={portfolioImg}
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
        Img={dynamicImg}
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
        Img={fabioImg}
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
        Img={pokemonImg}
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
        Img={compoundImg}
      />
    </S.ContentWrapper>
  )
}

export default Projects
