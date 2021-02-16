import React from 'react'
import styled from 'styled-components'

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    width: 100%;
  }

  p {
    font-weight: bold;
  }
`

const Poster = styled.div`
  margin: 20px 0 10px;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
  }
`

const MovieItem = ({ movie }) => {
  const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster

  return (
    <Container>
      <h3>{movie.Title}</h3>

      <Poster>
        <img alt={movie.Title} src={poster} />
      </Poster>

      <p>({movie.Year})</p>
    </Container>
  )
}

export default MovieItem
