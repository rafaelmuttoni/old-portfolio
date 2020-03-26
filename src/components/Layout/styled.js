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
  margin-left: 5rem;

  ${media.lessThan('medium')`
    margin: 0;
  `}
`