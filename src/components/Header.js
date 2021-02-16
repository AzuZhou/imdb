import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-weight: 900;
    font-size: 52px;
  }
`

const Header = ({ name }) => (
  <Container>
    <h1>{name}</h1>
  </Container>
)

export default Header
