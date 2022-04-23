import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Wrapper = styled.div`
  padding: 40px;
`
