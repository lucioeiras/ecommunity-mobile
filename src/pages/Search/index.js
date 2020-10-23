import React, { useState, useEffect } from 'react'

import firebase from 'firebase/app'

import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Spotlight from '../../components/Spotlight'
import Post from '../../components/Post'

import { Container, Title, Subtitle } from '../../styles/global'

import {
  SearchContainer, 
  SpotlightContainer,
  ResultsContainer,
  ResultsPostsList,
} from './styles'

export default function Search({ route }) {
  const firestore = firebase.firestore()
  const postsRef = firestore.collection('posts')

  const { searched } = route.params

  const [bestResult, setBestResult] = useState()
  const [results, setResults] = useState([])

  useEffect(() => {
    postsRef.get().then(querySnapshot => {
      const searchedPosts = []
  
      querySnapshot.forEach(doc => {
        const post = doc.data()
  
        if (post.text.includes(searched) || post.title.includes(searched)) {
          searchedPosts.push(post)
        }
      })
  
      setBestResult(searchedPosts[0])
      searchedPosts.shift()

      setResults(searchedPosts)
    })
  }, [searched])

  return (
    <Container>
      <Header />

      <SearchContainer>
        <Title>Resultados da sua pesquisa</Title>
        <SearchBar value={searched} />
      </SearchContainer>

      {!!bestResult && (
        <SpotlightContainer>
          <Subtitle>Melhor Resultado</Subtitle>

          <Spotlight post={bestResult} />
        </SpotlightContainer>
      )}

      {!!results && !!results[0] && (
        <ResultsContainer>
          <Subtitle>Mais resultados</Subtitle>

          <ResultsPostsList>
            {results.map(result => <Post key={result.uid} post={result}/>)}
          </ResultsPostsList>
        </ResultsContainer>
      )}
    </Container>
  )
}
