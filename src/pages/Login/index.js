import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useAuth from '../../hooks/useAuth'

import logoImg from '../../assets/logo.png'
import googleImg from '../../assets/google.png'
import twitterImg from '../../assets/twitter.png'

import { 
  Container, 
  Logo,
  Title,
  Ecommunity,
  Description,
  LoginButton,
  LoginIcon,
  LoginLabel,
} from './styles'

export default function Login() {
  const { navigate } = useNavigation()

  const { handleSignIn } = useAuth()

  async function handleSignInWithGoogle() {
    await handleSignIn()

    navigate('Home')
  }

  async function handleSignInWithTwitter() {
    await handleSignIn('twitter')

    navigate('Home')
  }

  useEffect(() => {
    (async () => {
      const user_id = await AsyncStorage.getItem('user_id')

      if (user_id) {
        navigate('Home')
      }
    })()
  }, [])

  return (
    <Container>
      <Logo source={logoImg} />

      <Title>Bem vindo ao <Ecommunity>E-Community</Ecommunity></Title>
      <Description>A maior comunidade de eletrônica do Brasil</Description>

      <LoginButton login="google" onPress={handleSignInWithGoogle}>
        <LoginIcon source={googleImg} />
        <LoginLabel>Entrar com o Google</LoginLabel>
      </LoginButton>

      <LoginButton login="twitter" onPress={handleSignInWithTwitter}>
        <LoginIcon source={twitterImg} />
        <LoginLabel>Entrar com o Twitter</LoginLabel>
      </LoginButton>
    </Container>
  )
}
