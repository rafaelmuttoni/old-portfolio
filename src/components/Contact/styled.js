import styled from 'styled-components'
import media from 'styled-media-query'

export const ContactWrapper = styled.div`

  ${media.lessThan('medium')`
    padding: 0 2.5rem;
    text-align: left;
  `}
`

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 1.5rem;

  ${media.lessThan('medium')`
    padding: 0 0 1.5rem;
    text-align: left;
    font-size: 1.7rem;
  `}
`

export const ContactText = styled.p`

  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;

  &.options {
    padding-left: 0.5rem;
  }

  ${media.lessThan('medium')`
    font-size: 1.3rem;
  `}
`

export const ContactLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: var(--texts);
  display: flex;
  &:hover {
    color: var(--hoverLinks)
  }
`

export const ContactIcon = styled.div`
  height: 2rem;
  padding-bottom: 3rem;
  width: 2rem;
  color: var(--texts);
  ${ContactLink}:hover & {
    color: var(--hoverLinks);
  }
`