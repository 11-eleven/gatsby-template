import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="This is the page description"
      meta="meta, data"
    />
    <TextWrapper>
      <h1>Hi peeps</h1>
      <p>Welcome to your new Gatsby site. Now go build something great.</p>
    </TextWrapper>
  </Layout>
)

export default IndexPage

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 0 0 20px;
`
