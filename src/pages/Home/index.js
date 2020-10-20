import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import Header from '../../components/Header'
import Spotlight from '../../components/Spotlight'
import Post from '../../components/Post'

import avatar from '../../assets/eu.jpeg'
import firebaseImg from '../../assets/firebase.png'

import { 
  Container,
  SearchContainer,
  SearchBar,
  Input,

  Title,
  Subtitle,

  SpotlightContainer,

  LastContainer,
  LastPostsList,
} from './styles'

export default function Home() {
  return (
    <Container>
      <Header 
        user="Diego Eiras"
        avatar={avatar}
      />

      <SearchContainer>
        <Title>Encontre um novo conhecimento</Title>
        <SearchBar>
          <MaterialIcons name="search" color="#A8A8B3" size={24} />
          <Input placeholder="Pesquise algo interessante" />
        </SearchBar>
      </SearchContainer>

      <SpotlightContainer>
        <Subtitle>Destaque</Subtitle>

        <Spotlight 
          thumb={firebaseImg}
          title="O que é Firebase?"
          avatar={avatar}
          user="Diego Eiras"
        />
      </SpotlightContainer>

      <LastContainer>
        <Subtitle>Últimas adicionadas</Subtitle>

        <LastPostsList>
          <Post 
            thumb={firebaseImg}
            title="O que é firebase?"
            user="Diego Eiras"
          />

          <Post 
            thumb={firebaseImg}
            title="O que é firebase?"
            user="Diego Eiras"
          />

          <Post 
            thumb={firebaseImg}
            title="O que é firebase?"
            user="Diego Eiras"
          />

          <Post 
            thumb={firebaseImg}
            title="O que é firebase?"
            user="Diego Eiras"
          />
        </LastPostsList>
      </LastContainer>
    </Container>
  )
}
