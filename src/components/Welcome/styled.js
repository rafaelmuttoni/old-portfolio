import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const WelcomeWrapper = styled.div`
  text-align: center;

  ${media.lessThan("large")`
    max-width: 80vw;
    text-align: left;
  `}
`
export const WelcomeText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  &.strong {
    font-weight: 600;
    font-size: 1.7rem;
  }

  ${media.lessThan("large")`
    font-size: 1.2rem;
    &.strong {
      font-weight: 600;
      font-size: 1.4rem;
    }
  `}

  transition: opacity 2000ms ease;

  &.hidden {
    opacity: 0;
  }

  &.display {
    opacity: 1;
  }

  a.terapeuta {
    text-decoration: none;
    color: #7e57c2;
    &:hover {
      color: #551a8b;
    }
  }
`

export const WelcomeLink = styled(AniLink)`
  text-decoration: none;
  color: var(--links);
  font-weight: 600;
  &:hover {
    color: var(--hoverLinks);
  }
`
