import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import firebase from 'firebase/app'

import { Container, Thumb, Title, User } from './styles'

export default function Post({ post }) {
  const firestore = firebase.firestore()

  const postsRef = firestore.collection('posts')
  const usersRef = firestore.collection('users')

  const [user, setUser] = useState()

  const { navigate } = useNavigation()

  useEffect(() => {
    usersRef.doc(post.user_id).get().then(doc => setUser(doc.data()))
  }, [])
  
  async function handleOpenPost() {
    post.clicks += 1
    await postsRef.doc(post.uid).set(post)

    navigate('Read', { post, user })
  }

  return (
    <TouchableOpacity onPress={handleOpenPost}>
      {post && (
        <Container>
          <Thumb source={{ uri: post.thumbURL }} />

          <View>
            <Title>{post.title}</Title>
            {user && <User>por {user.name}</User>}
          </View>
        </Container>
      )}
    </TouchableOpacity>
  )
}