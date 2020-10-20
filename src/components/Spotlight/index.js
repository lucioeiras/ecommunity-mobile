import React from 'react'

import { 
  Container,
  Gradient,
  Title,
  User,
  Avatar,
  Username,
} from './styles'

export default function Spotlight({ thumb, title, avatar, user }) {
  return (
    // linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 71.5%);

    <Container source={thumb}>
      <Gradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}
      >
        <Title>{title}</Title>

        <User>
          <Avatar source={avatar} />
          <Username>{user}</Username>
        </User>
      </Gradient>
    </Container>
  )
}