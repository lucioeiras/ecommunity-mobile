import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-bottom: 24px;
`

export const Thumb = styled.Image`
  width: 72px;
  height: 72px;

  overflow: hidden;
  border-radius: 5px;

  margin-right: 16px;
`

export const Title = styled.Text`
  color: #737380;
  font-size: 20px;
  font-family: 'Roboto_500Medium';

  margin-bottom: 8px;
`

export const User = styled.Text`
  color: #A8A8B3;
  font-family: 'Roboto_300Light'
`
