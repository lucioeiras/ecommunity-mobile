import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import firebase from 'firebase/app'

import { Hint } from '../../styles/global'

import { 
  Container, 
  Profile,
  Avatar,
  User,
} from './styles'

export default function Header() {
  const navigation = useNavigation()

  const firestore = firebase.firestore()
  const usersRef = firestore.collection('users')

  const [user, setUser] = useState()

  useEffect(() => {
    (async () => {
      const user_id = await AsyncStorage.getItem('user_id')
      user_id && usersRef.doc(user_id).get().then(doc => setUser(doc.data()))
    })()
  }, [])

  function handleProfile() {
    navigation.navigate('Profile')
  }

  function handleNavigateBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateBack}>
        <MaterialIcons 
          name="arrow-back" 
          color="#3A3A3A" 
          size={24} 
          style={{ marginRight: 16 }}
        />
      </TouchableOpacity>
      
      {user && (
        <View style={{ flexDirection: 'row' }}>
          <Profile>
            <User>{user.name}</User>
            <Hint textColor="#A8A8B3">Clique para ver o seu perfil</Hint>
          </Profile>

          <TouchableOpacity onPress={handleProfile}>
            <Avatar source={{ uri: user.avatar }} />
          </TouchableOpacity>
        </View>
      )}
    </Container>
  )
}