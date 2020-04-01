import styled from 'styled-components'
import media from 'styled-media-query'

export const ContactWrapper = styled.div`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1rem;

  ${media.lessThan('large')`
    max-width: 85vw;
  `}
`

export const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 0.8rem;
`

export const ContactText = styled.p`
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 0.8rem;

`

export const ContactLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: var(--buttonText);
  &:hover {
    color: var(--icons);
  }
`

export const ContactIcon = styled.div`
  padding-right: 0.5rem;
  width: 2rem;
  color: var(--buttonText);
  ${ContactLink}:hover & {
    color: var(--icons);
  }

  ${media.lessThan('large')`
    width: 3rem;
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  padding-left: 0.5rem;
  ${media.lessThan('large')`
    padding-left: 0;
    align-self: center;
  `}
`

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`