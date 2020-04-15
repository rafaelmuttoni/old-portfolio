import styled from 'styled-components'
import media from 'styled-media-query'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const NavbarWrapper = styled.nav`
  ${media.greaterThan('large')`
    top: 0;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
  `}

  ${media.lessThan('large')`
    bottom: 0;
    width: 100vw;
    height: 3.5rem;
  `}

  position: fixed;
  background: var(--navBackground);
  transition: width 200ms ease;
  z-index: 10;
`

export const IconsUl = styled.ul`

  ${media.greaterThan('large')`
    flex-direction: column;
    justify-content: center;
  `}

  ${media.lessThan('large')`
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

  ${media.lessThan('large')`
      justify-content: center;
      height: 3.5rem;
      width: 100%;
  `}

  ${media.greaterThan('large')`
    &:last-child {
      margin-top: auto;
  }
  `}
`

export const IconsLink = styled(AniLink)`
  ${media.lessThan('large')`
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
  ${media.lessThan('large')`
    justify-content: center;
    min-width: 1.5rem;
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
  ${media.greaterThan('large')`
    margin: 0 1.5rem;
    width: 32px;
    min-width: 32px;  
  `}
  ${media.lessThan('large')`
    min-width: 24px;
    width: 24px;
  `}
`

export const ThemeSpan = styled.span`
  ${media.greaterThan('large')`
    margin: 0 1.5rem; 
    width: 32px;
    min-width: 32px; 
  `}
  ${media.lessThan('large')`
    min-width: 24px;
    width: 24px;  
  `}
`

export const IconText = styled.p`
  ${media.greaterThan('large')`
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