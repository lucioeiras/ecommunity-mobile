import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Input } from './styles'

export default function SearchBar({ value }) {
  const { navigate } = useNavigation()

  const [searched, setSearched] = useState(value)

  function handleSearch() {
    navigate('Search', { searched })
  }

  return (
    <Container>
      <MaterialIcons name="search" color="#A8A8B3" size={24} />
      <Input
        value={searched} 
        onChangeText={text => setSearched(text)}
        placeholder="Pesquise algo interessante" 
        onEndEditing={handleSearch} 
      />
    </Container>
  )
}