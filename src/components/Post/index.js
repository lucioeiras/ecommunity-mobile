import React from 'react'
import { View } from 'react-native'

import { Container, Thumb, Title, User } from './styles'

export default function Post({ thumb, title, user }) {
  return (
    <Container>
      <Thumb source={thumb} />

      <View>
        <Title>{title}</Title>
        <User>por {user}</User>
      </View>
    </Container>
  )
}