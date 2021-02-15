import React from 'react'
import styled from 'styled-components'
import Loader from './Loader'
import ErrorMesasage from './ErrorMessage'
import Movie from './MovieItem'

const Container = styled.div``

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
