import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form``

const Input = styled.input``
const Submit = styled.button``

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const resetInputField = () => {
    setSearch('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(search)
    resetInputField()
  }

  return (
    <Container>
      <Input placeholder="Search" type="text" value={search} onChange={handleInput} />
      <Submit type="submit" onClick={handleSubmit} />
    </Container>
  )
}

export default Search
