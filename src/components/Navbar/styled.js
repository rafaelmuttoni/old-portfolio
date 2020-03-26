import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

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
    height: 5rem;
  `}

  position: fixed;
  background: var(--navBackground);
  transition: width 200ms ease;
`

export const IconsUl = styled.ul`

  ${media.greaterThan('medium')`
    flex-direction: column;
  `}

  ${media.lessThan('medium')`
    flex-direction: row;
  `}

  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  
  align-items: center;
  height: 100%;
`

export const IconsLi = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`

export const IconsLink = styled(Link)`
  ${media.lessThan('medium')`
    justify-content: center;
  `}
  color: var(--icons);
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  &:hover {
    background: var(--background);
    color: var(--hoverIcons);
  }
`

export const IconDiv = styled.div`
  min-width: 2rem;
  margin: 0 1.5rem;
`

export const IconText = styled.p`
  ${media.greaterThan('medium')`
    ${NavbarWrapper}:hover & {
      display: block;
    }  
  `}

  font-size: 1.2rem;
  font-weight: 200;
  color: var(--icons);
  display: none;
  margin-left: 1rem;


  ${IconsLink}:hover & {
    color: var(--hoverIcons);
  }
`