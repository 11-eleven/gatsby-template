import React from "react"
import styled from "styled-components"

const Footer = () => {
  const emojis = ["👩🏻‍💻", "♥️", "👨🏼‍💻", "🍟", "🍣"]
  return (
    <Wrapper>
      <p>
        Created {emojis[Math.floor(Math.random() * emojis.length)]} with by
        eleven
      </p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
  padding: 10px 0;
  background: rgba(128, 128, 128, 0.222);
`
