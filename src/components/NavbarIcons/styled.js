import styled from 'styled-components'
import { Link } from 'gatsby'

export const IconsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
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
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
`

export const IconDiv = styled.div`
  color: var(--icons);
  min-width: 2rem;
  margin: 0 1.5rem;
`

export const IconText = styled.span`
  display: none;
  margin-left: 1rem;
`