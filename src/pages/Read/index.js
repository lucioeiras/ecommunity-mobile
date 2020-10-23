import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { 
  Container as Content, 
  Title, 
  Subtitle, 
  Hint,
  Gradient, 
} from '../../styles/global'

import { 
  Container,
  Header,
  Profile,
  Author,
  Avatar,
  User,
  PostText,
  LinkList,
  Link,
  Linkname,
  FilesList,
  File,
  Filename,
} from './styles'

export default function Read({ route }) {
  const { post, user } = route.params

  return (
    <Container>
      {post && (
        <>
        <Header source={{ uri: post.thumbURL }}>
          <Gradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)']}>
            <Profile>
              <Avatar source={{ uri: user.avatar }} />
              {user && (
                <Author>
                  <User>{user.name}</User>
                  <Hint textColor="#FFF">Autor do texto</Hint>
                </Author>
              )}
            </Profile>
          </Gradient>
        </Header>

        <Content>
          <Title>{post.title}</Title>
          <PostText>{post.text}</PostText>

          {!!post.links && !!post.links[0] && (
            <>
              <Subtitle>Links</Subtitle>
              <LinkList>
                {post.links.map(link => (
                  <Link key={link}>
                    <MaterialIcons name="public" color="#656565" size={20} />
                    <Linkname>{link}</Linkname>
                  </Link>
                ))}
              </LinkList>
            </>
          )}

          {!!post.filesURL && !!post.filesURL[0] && (
            <>
              <Subtitle>Arquivos</Subtitle>
              <FilesList>
                {post.filesURL.map((file, index) => (
                  <File key={index}>
                    <MaterialIcons 
                      name="insert-drive-file" 
                      color="#656565" 
                      size={48} 
                    />
                    <Filename>Arquivo {index + 1}</Filename>
                  </File>
                ))}
              </FilesList>
            </>
          )}
        </Content>
        </>
      )}
    </Container>
  )
}
