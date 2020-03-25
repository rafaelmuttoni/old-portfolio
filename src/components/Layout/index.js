import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

const LayoutWrapper = styled.section`
  display: flex;
`

const Navbar = styled.nav`
  width: 5rem;
  height: 100vh;
  position: fixed;
  background: #21222C;
`

const LayoutMain = styled.main`
  background: #282A36;
  margin-left: 5rem;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
