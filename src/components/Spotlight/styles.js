import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.ImageBackground`
  width: 100%;
  height: 327px;

  overflow: hidden;
  border-radius: 5px;
  
  margin-top: 16px;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 327px;

  justify-content: flex-end;
  padding: 16px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-family: 'Roboto_700Bold';
`

export const User = styled.View`
  width: 100%;
  height: 32px;

  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`

export const Avatar = styled.Image`
  width: 28px;
  height: 28px;

  overflow: hidden;
  border-radius: 5px;

  margin-right: 12px;
`

export const Username = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Roboto_300Light';
`