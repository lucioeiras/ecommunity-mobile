import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import { View } from 'react-native'

import firebase from 'firebase/app'

import Header from '../../components/Header'
import Spotlight from '../../components/Spotlight'
import Post from '../../components/Post'
import SearchBar from '../../components/SearchBar'

import { Container, Title, Subtitle } from '../../styles/global'

import { 
  SearchContainer,
  SpotlightContainer,
  LastContainer,
} from './styles'

export default function Home() {
  const firestore = firebase.firestore()
  const postsRef = firestore.collection('posts')

  const [lastPosts, setLastPosts] = useState()
  const [spotlightPost, setSpotlightPost] = useState()
  const [loading, setLoading] = useState(true)

  function loadPosts() {
    postsRef
      .orderBy('clicks', 'desc')
      .limit(1)
      .get()
      .then(querySnapshot => {
        const searchedPosts = []

        querySnapshot.forEach(doc => searchedPosts.push(doc.data()))
        
        setSpotlightPost(searchedPosts[0])
      })

    postsRef
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        const searchedPosts = []

        querySnapshot.forEach(doc => searchedPosts.push(doc.data()))
        
        setLastPosts(searchedPosts)
      })

    setLoading(false)
  }

  useEffect(() => {
    loadPosts()
  }, [])

  return (
    <>
    {loading && <AppLoading />}
    <Container onScrollBeginDrag={loadPosts}>
      <Header />

      <SearchContainer>
        <Title>Encontre um novo conhecimento</Title>
        <SearchBar />
      </SearchContainer>

      <SpotlightContainer>
        <Subtitle>Destaque</Subtitle>

        {spotlightPost && <Spotlight post={spotlightPost} />}
      </SpotlightContainer>

      <LastContainer>
        <Subtitle>Últimas adicionadas</Subtitle>

        <View>
          {!!lastPosts && lastPosts.map(post => <Post key={post.uid} post={post} /> )}
        </View>
      </LastContainer>
    </Container>
    </>
  )
}
