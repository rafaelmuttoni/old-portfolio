import styled from 'styled-components'
import media from 'styled-media-query'

export const ContentWrapper = styled.div`
  padding-bottom: 6rem;
  ${media.lessThan('large')`
    width: 80vw;
  `}
`

export const DevicesWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  ${media.lessThan('large')`
    justify-content: center;
  `}
`

export const DesktopWrapper = styled.div`
  width: 50%;
  height: 50%;
  box-shadow: 8px 8px 0 rgba(0,0,0,.15);
  ${media.lessThan('large')`
    width: 100%;
  `}
`

export const ProjectBar = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: var(--hoverIcons);
  width: 100%;
  height: 1.5rem;
  /* z-index: 10; */

  ${media.lessThan('large')`
    height: 0.75rem;
  `}
`

export const BallsWrapper = styled.div`
  height: 0.8rem;
  width: 3.3rem;
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;

  ${media.lessThan('large')`
    height: 0.4rem;
    width: 2.2rem;
  `}
`

export const RedBall = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  background-color: #ff5f57;
  border-radius: 50%;

  ${media.lessThan('large')`
    height: 0.4rem;
    width: 0.4rem;
  `}
`
export const YellowBall = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  background-color: #ffbd2e;
  border-radius: 50%;

  ${media.lessThan('large')`
    height: 0.4rem;
    width: 0.4rem;
  `}
`
export const GreenBall = styled.span`
  height: 0.8rem;
  width: 0.8rem;
  background-color: #28ca41;
  border-radius: 50%;

  ${media.lessThan('large')`
    height: 0.4rem;
    width: 0.4rem;
  `}
`

export const PhoneWrapper = styled.div`
  /* z-index: 10; */
  position: relative;
  width: 9.05rem;
  height: 18rem;
  margin: auto;
  border: 0.5rem var(--hoverIcons) solid;
  border-top-width: 1.875rem;
  border-bottom-width: 1.875rem;
  border-radius: 1.125rem;
  box-shadow: 8px 8px 0 rgba(0,0,0,.15);

  &:before {
    content: '';
    display: block;
    width: 2rem;
    height: 0.2rem;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--background);
    border-radius: 10px;
  }

  &:after {
    content: '';
    /* z-index: 10; */
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    position: absolute;
    left: 51%;
    bottom: -2.1rem;
    transform: translate(-50%, -50%);
    background: var(--background);
    border-radius: 50%;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`

export const PhoneContent = styled.div`
  width: 102%;
  height: 102%;
`

export const ProjectTitle = styled.a`
  text-decoration: none;
  padding-left: 1rem;
  border-left: 2px solid var(--buttons);
  font-size: 1.8rem;
  color: var(--buttonText);

  ${media.lessThan('large')`
    line-height: 2rem;
  `}

  &:hover {
    color: var(--icons);
  }
`

export const ProjectDesription = styled.p`
  padding: 0.4rem 0 0.4rem 1rem;
  border-left: 2px solid var(--buttons);
  line-height: 2rem;

`

export const ProjectTagsList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  border-left: 2px solid var(--buttons);

  ${media.lessThan('large')`
    padding-bottom: 0.3rem;
  `}
`

export const ProjectTagsItem = styled.li`
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

  ${media.lessThan('large')`
    padding: 6px 5px 6px 5px;
    font-size: 0.7rem;
  `}
`
