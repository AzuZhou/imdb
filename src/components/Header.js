import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  text-align: center;
  margin: 20px;
`

const Header = ({ name }) => (
  <Container>
    <h1>{name}</h1>
  </Container>
)

export default Header
