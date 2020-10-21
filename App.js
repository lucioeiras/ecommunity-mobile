import React from 'react'
import { LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto'

import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import Routes from './src/Routes'

export default function App() {
  LogBox.ignoreLogs(['Setting a timer', 'Deprecated'])

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.EXPO_FIREBASE_API_KEY,
      authDomain: process.env.EXPO_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.EXPO_FIREBASE_DATABASE_URL,
      projectId: process.env.EXPO_FIREBASE_PROJECT_ID,
      storageBucket: process.env.EXPO_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_FIREBASE_APP_ID,
      measurementId: process.env.EXPO_FIREBASE_MEASUREMENT_ID,
    });
  }

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Routes />
      <StatusBar style="dark" backgroundColor="#FAFAFA" translucent={false} />
    </>
  )
}