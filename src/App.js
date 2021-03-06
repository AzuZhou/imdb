import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Movies from './components/Movies'
import Search from './components/Search'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
`

const MOVIE_BASE_URL = process.env.REACT_APP_OMDB_BASE_URL
const MOVIE_API_KEY = process.env.REACT_APP_OMDB_API_KEY

const initialState = {
  isLoading: true,
  movies: [],
  errorMessage: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      }
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      }
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = (search) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    })

    fetch(`${MOVIE_BASE_URL}?s=${search ? search : 'woman'}&apikey=${MOVIE_API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonResponse.Search,
          })
        } else {
          throw Error(jsonResponse.Error)
        }
      })
      .catch((error) => {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          payload: error.message,
        })
      })
  }

  const handleSearch = (search) => {
    handleFetch(search)
  }

  const { movies, isLoading, errorMessage } = state

  return (
    <Container>
      <Header name="IMDb" />
      <Search handleSearch={handleSearch} />
      <Movies movies={movies} errorMessage={errorMessage} isLoading={isLoading} />
    </Container>
  )
}

export default App
