import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  
  padding-top: ${Constants.statusBarHeight + 24};
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  overflow: hidden;
  border-radius: 25px;

  margin-right: 16px;
`

export const User = styled.Text`
  color: #41414D;
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`

export const Hint = styled.Text`
  color: #A8A8B3;
  font-size: 12px;
  font-family: 'Roboto_300Light';

  margin-top: 4px;
`
