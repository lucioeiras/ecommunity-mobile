import React from 'react'
import { useNavigation } from '@react-navigation/native'

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

  function loginWithGoogle() {
    navigate('Home')
  }

  function loginWithTwitter() {
    navigate('Home')
  }

  return (
    <Container>
      <Logo source={logoImg} />

      <Title>Bem vindo ao <Ecommunity>E-Community</Ecommunity></Title>
      <Description>A maior comunidade de eletrônica do Brasil</Description>

      <LoginButton login="google" onPress={loginWithGoogle}>
        <LoginIcon source={googleImg} />
        <LoginLabel>Entrar com o Google</LoginLabel>
      </LoginButton>

      <LoginButton login="twitter" onPress={loginWithTwitter}>
        <LoginIcon source={twitterImg} />
        <LoginLabel>Entrar com o Twitter</LoginLabel>
      </LoginButton>
    </Container>
  )
}
