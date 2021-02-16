import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  height: 40px;
  width: 100%;
  max-width: 400px;
  min-width: 260px;
  margin-bottom: 60px;
  display: flex;
  /* border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07); */
`

const Input = styled.input`
  margin-right: 20px;
  padding: 0 20px;
  width: 100%;
  border-radius: 20px;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  font-weight: bold;
`
const Submit = styled.button`
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  background-color: #051094;
  color: white;
  font-weight: bold;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07),
    0 32px 64px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  font-weight: bold;
`

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
      <Input placeholder="Title..." type="text" value={search} onChange={handleInput} />
      <Submit type="submit" onClick={handleSubmit}>
        Search
      </Submit>
    </Container>
  )
}

export default Search
