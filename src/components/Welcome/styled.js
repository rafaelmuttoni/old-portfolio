import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const WelcomeWrapper = styled.div`
  text-align: center;

  ${media.lessThan('medium')`
    padding: 0 2.5rem;
    text-align: left;
  `}
`
export const WelcomeText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  &.strong {
    font-weight: 600;
    font-size: 1.7rem;
  }

  ${media.lessThan('medium')`
    font-size: 1.2rem;
    &.strong {
      font-weight: 600;
      font-size: 1.4rem;
    }
  `}
`

export const WelcomeLink = styled(AniLink)`
  text-decoration: none;
  color: var(--links);
  font-weight: 600;
  &:hover {
    color: var(--hoverLinks);
  }
`