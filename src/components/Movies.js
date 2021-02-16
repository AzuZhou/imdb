import React from 'react'
import styled from 'styled-components'
import Loader from './Loader'
import ErrorMesasage from './ErrorMessage'
import Movie from './MovieItem'

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  grid-gap: 40px;
`

const Movies = ({ movies, errorMessage, isLoading }) => {
  if (isLoading && !errorMessage) return <Loader />
  if (!isLoading && errorMessage) return <ErrorMesasage message={errorMessage} />

  return (
    <Container>
      {movies &&
        movies.map((movie, index) => <Movie key={`${index}-${movie.Title}`} movie={movie} />)}
    </Container>
  )
}

export default Movies
