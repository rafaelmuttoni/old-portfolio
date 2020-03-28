import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
`

export const ProjectsTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  border-left: 2px solid var(--buttons);
  padding-left: 1rem;
  padding-bottom: 0.8rem;
`

export const ProjectsDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  border-left: 2px solid var(--buttons);
  padding-left: 1rem;
  padding-bottom: 0.8rem;
`

export const ProjectsFilterList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  border-left: 2px solid var(--buttons);
`

export const ProjectsFilterItem = styled.li`
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
    cursor: pointer;
  }
`