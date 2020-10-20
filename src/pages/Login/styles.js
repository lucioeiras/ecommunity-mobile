import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;

  background: #FAFAFA;
  padding: 24px;
`

export const Logo = styled.Image``

export const Title = styled.Text`
  color: #3A3A3A;
  font-size: 32px;
  font-family: 'Roboto_700Bold';

  margin-top: 64px;
`

export const Ecommunity = styled.Text`
  color: #00C14E;
`

export const Description = styled.Text`
  max-width: 70%;

  color: #737380;
  font-size: 16px;
  line-height: 20px;

  margin: 16px 0 64px 0;
`

export const LoginButton = styled(RectButton)`
  width: 100%;
  height: 60px;

  flex-direction: row;
  align-items: center;

  border-radius: 5px;
  background: ${props => props.login === 'google' ? '#EA4335' : '#00ACEE'};

  padding: 16px 32px;
  margin-top: 24px;
`

export const LoginIcon = styled.Image`
  margin-right: 16px;
`

export const LoginLabel = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-family: 'Roboto_700Bold';
`

