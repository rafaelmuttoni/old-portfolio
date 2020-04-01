import styled from 'styled-components'
import media from 'styled-media-query' 

export const LayoutWrapper = styled.section`
  display: flex;
`

export const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;
  color: var(--texts);
  background: var(--background);
  padding-left: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  

  ${media.lessThan('large')`
    padding-left: 0;
    padding-bottom: 4rem;
  `}
`