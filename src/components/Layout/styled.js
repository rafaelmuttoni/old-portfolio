import styled from 'styled-components'
import media from 'styled-media-query' 

export const LayoutWrapper = styled.section`
  display: flex;
`

export const LayoutMain = styled.main`
  background: #282A36;
  margin-left: 5rem;

  ${media.lessThan('medium')`
    margin: 0;
  `}
`