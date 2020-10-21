import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  
  padding-top: 24px;
`

export const Profile = styled.View`
  align-items: flex-end;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  overflow: hidden;
  border-radius: 25px;

  margin-left: 16px;
`

export const User = styled.Text`
  color: #41414D;
  font-size: 16px;
  font-family: 'Roboto_500Medium';
`
