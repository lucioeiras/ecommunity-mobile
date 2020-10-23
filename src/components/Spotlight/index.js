import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import firebase from 'firebase/app'

import { Gradient } from '../../styles/global'

import { 
  Container,
  Title,
  User,
  Avatar,
  Username,
} from './styles'

export default function Spotlight({ post }) {
  const firestore = firebase.firestore()
  const usersRef = firestore.collection('users')

  const { navigate } = useNavigation()

  const [user, setUser] = useState()

  useEffect(() => {
    usersRef.doc(post.user_id).get().then(doc => setUser(doc.data()))
  }, [])
  
  function handleOpenPost() {
    navigate('Read', { post, user })
  }

  return (
    <TouchableOpacity onPress={handleOpenPost}>
      {post && (
        <Container source={{ uri: post.thumbURL }}>
          <Gradient
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
          >
            <Title>{post.title}</Title>

            {user && (
              <User>
                <Avatar source={{ uri: user.avatar }} />
                <Username>{user.name}</Username>
              </User>
            )}
          </Gradient>
        </Container>
      )}
    </TouchableOpacity>
  )
}