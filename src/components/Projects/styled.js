import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 1rem 1rem;

  ${media.lessThan('medium')`
    padding: 2rem 1rem 1rem 1rem;
  `}
`

export const ProjectsWrapper = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  /* border-left: 2px solid var(--buttons);
  padding-left: 1rem; */
  padding-bottom: 0.8rem;
`

export const ProjectsDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  /* border-bottom: 2px solid var(--buttons); */
  /* padding-left: 1rem; */
  padding-bottom: 0.8rem;
`

export const ProjectLink = styled(AniLink)`
  text-decoration: none;
  color: var(--links);
  font-weight: 600;
  &:hover {
    color: var(--hoverLinks);
  }
`