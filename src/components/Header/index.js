import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { 
  Container, 
  Avatar,
  User,
  Hint, 
} from './styles'

export default function Header({ user, avatar }) {
  const { navigate } = useNavigation()

  function handleProfile() {
    navigate('Profile')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleProfile}>
        <Avatar source={avatar} />
      </TouchableOpacity>
      
      <View>
        <User>{user}</User>
        <Hint>Clique para ver o seu perfil</Hint>
      </View>
    </Container>
  )
}