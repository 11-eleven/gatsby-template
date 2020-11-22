import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Wrapper>
      <Logo>
        <a href="/">
          eleven
        </a>
      </Logo>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  display: grid;
  padding: 40px;
`
const Logo = styled.h1`
  font-size: 18px;

  a {
    color: black;
  }
`

