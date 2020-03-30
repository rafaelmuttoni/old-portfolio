import styled from 'styled-components'
import media from 'styled-media-query'

export const ContactWrapper = styled.div`
  padding-left: 1rem;

  ${media.lessThan('medium')`
    padding: 0 2.5rem;
    text-align: left;
  `}
`

export const InfoWrapper = styled.div`
  padding-left: 1rem;
  border-left: 2px solid var(--buttons);
  padding-top: 0.7rem;
`


export const PageTitle = styled.h1`
  padding-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 300;

  ${media.lessThan('medium')`
    padding: 0 0 1.5rem;
    text-align: left;
    font-size: 1.7rem;
  `}
`

export const PageText = styled.p`
  padding-bottom: 1rem;
  font-size: 1.1rem;
`

export const ContactLabel = styled.p`

  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  padding-bottom: 1rem;
  padding-left: 0.5rem;


  ${media.lessThan('medium')`
    font-size: 1.3rem;
  `}
`

export const ContactLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: var(--buttonText);
  display: flex;
  align-items: center;
  &:hover {
    color: var(--icons);
  }
`

export const ContactIcon = styled.div`
  height: 2rem;
  padding-bottom: 3rem;
  width: 2rem;
  color: var(--buttonText);
  ${ContactLink}:hover & {
    color: var(--icons);
  }
`