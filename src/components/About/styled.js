import styled from 'styled-components'
import media from 'styled-media-query'

export const AboutWrapper = styled.div`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 1rem;

  ${media.lessThan('large')`
    max-width: 80vw;
    padding-top: 2rem;
  `}
`

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding-bottom: 0.8rem;
`

export const AboutDescription = styled.p`
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 0.8rem;

`

export const AboutSubtitle = styled.h2`
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-left: 2px solid var(--icons);
  padding-left: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
`

export const SkillsList = styled.ul`
  list-style: none;
  max-width: 60%;
  padding-bottom: 0.8rem;

  ${media.lessThan('large') `
    max-width: 75%;
  `}

  ${media.lessThan('medium') `
    max-width: 90%;
  `}
`

export const SkillsItem = styled.li`
  display: inline-block;
  margin: 3px;
  padding: 7px 5px 7px 5px;
  background: var(--buttons);
  color: var(--buttonsText);
  border-width: 1px 1px 2px 1px;
  border-color: var(--navBackground);
  border-radius: 3px;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 1px 1px 0 rgba(0,0,0,.25);

  &:hover {
    background: var(--buttonsText);
    color: var(--buttons);
  }

  ${media.lessThan('medium')`
    padding: 6px 5px 6px 5px;
    font-size: 0.7rem;
  `}
`