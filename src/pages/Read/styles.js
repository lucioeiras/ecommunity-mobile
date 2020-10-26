import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
  background: #FAFAFA;
`

export const Header = styled.ImageBackground`
  height: 327px;
  margin-bottom: 32px;
`

export const Profile = styled.View`
  flex-direction: row;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;

  overflow: hidden;
  border-radius: 5px;

  margin-right: 16px;
`

export const Author = styled.View`
  height: 64px;
  justify-content: center;
`

export const User = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-family: 'Roboto_500Medium';
`

export const PostText = styled.Text`
  color: #737380;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
  line-height: 25px;
  text-align: justify;

  margin-bottom: 32px;
`

export const LinkList = styled.View`
  margin-bottom: 24px;
`

export const Link = styled(RectButton)`
  height: 48px;

  flex-direction: row;
  align-items: center;

  border-radius: 5px;
  background: #EAEAEA;

  padding: 0 16px;
  margin-bottom: 12px;
`

export const Linkname = styled.Text`
  width: 1000px;

  color: #656565;
  font-size: 16px;
  font-family: 'Roboto_500Medium';

  margin-left: 8px;
`

export const FilesList = styled.View`
  flex-direction: row;
  margin-bottom: 32px;
`

export const File = styled(RectButton)`
  border-radius: 5px;
  background: #EAEAEA;

  align-items: center;
  justify-content: center;

  padding: 20px;
  margin-right: 12px;
`

export const Filename = styled.Text`
  color: #656565;
  font-size: 16px;
  font-family: 'Roboto_500Medium';

  margin-top: 8px;
`
