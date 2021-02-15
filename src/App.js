import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Movies from './components/Movies'
import Search from './components/Search'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MOVIE_BASE_URL = process.env.REACT_APP_OMDB_BASE_URL
const MOVIE_API_KEY = process.env.REACT_APP_OMDB_API_KEY

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(`${MOVIE_BASE_URL}?s=woman&apikey=${MOVIE_API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search)
        setIsLoading(false)
      })
  }, [])

  const handleSearch = (search) => {
    setIsLoading(true)
    setErrorMessage(null)

    fetch(`${MOVIE_BASE_URL}?s=${search}&apikey=${MOVIE_API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          setMovies(jsonResponse.Search)
          setIsLoading(false)
        } else {
          setErrorMessage(jsonResponse.Error)
          setIsLoading(false)
        }
      })
  }

  return (
    <Container>
      <Header name="IMDb" />
      <Search handleSearch={handleSearch} />
      <Movies movies={movies} errorMessage={errorMessage} isLoading={isLoading} />
    </Container>
  )
}

export default App
