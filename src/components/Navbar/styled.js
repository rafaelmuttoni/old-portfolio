import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const NavbarWrapper = styled.nav`
  ${media.greaterThan('medium')`
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
  `}

  ${media.lessThan('medium')`
    bottom: 0;
    width: 100vw;
    height: 4rem;
  `}

  position: fixed;
  background: var(--navBackground);
  transition: width 200ms ease;
`

export const IconsUl = styled.ul`

  ${media.greaterThan('medium')`
    flex-direction: column;
    justify-content: center;
  `}

  ${media.lessThan('medium')`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  `}

  list-style: none;
  
  margin: 0;
  display: flex;
  
  padding: 0;
  align-items: center;
  height: 100%;
`

export const IconsLi = styled.li`

  height: 5rem;
  width: 100%;

  ${media.lessThan('medium')`
      justify-content: center;
      height: 4rem;
      width: 100%;
  `}

  ${media.greaterThan('medium')`
    &:last-child {
      margin-top: auto;
  }
  `}
`

export const IconsLink = styled(AniLink)`
  ${media.lessThan('medium')`
    justify-content: center;
  `}
  color: var(--icons);
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  &:hover {
    background: var(--background);
    color: var(--hoverIcons);
  }
  &.active {
    background: var(--background);
    color: var(--hoverIcons);
  }
`
export const ThemeDiv = styled.div`
  ${media.lessThan('medium')`
    justify-content: center;
  `}
  color: var(--icons);
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  min-width: 2rem;
  &:hover {
    background: var(--background);
    color: var(--hoverIcons);
  }
`

export const IconDiv = styled.div`
  min-width: 2rem;
  ${media.greaterThan('medium')`
    margin: 0 1.5rem;  
  `}
`

export const ThemeSpan = styled.span`
  min-width: 2rem;
  ${media.greaterThan('medium')`
    margin: 0 1.5rem;  
  `}
`

export const IconText = styled.p`
  ${media.greaterThan('medium')`
    ${NavbarWrapper}:hover & {
      display: block;
    }  
    ${IconsLink}:hover & {
      color: var(--hoverIcons);
    }
  `}

  font-size: 1.2rem;
  font-weight: 200;
  color: var(--icons);
  display: none;
  margin-left: 1rem;


`