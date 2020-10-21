import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.ScrollView`
  flex: 1;
  background: #FAFAFA;
  padding: 0 24px;
`

export const Title = styled.Text`
  color: #3A3A3A;
  font-size: 32px;
  font-family: 'Roboto_900Black';

  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  color: #41414D;
  font-size: 24px;
  font-family: 'Roboto_700Bold';

  margin-bottom: 16px;
`

export const Hint = styled.Text`
  color: ${props => props.textColor};
  font-size: 14px;
  font-family: 'Roboto_300Light';

  margin-top: 4px;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 327px;

  justify-content: flex-end;
  padding: 16px;
`