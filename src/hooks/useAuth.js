/* eslint-disable react-hooks/exhaustive-deps */

import firebase from 'firebase/app'
import { AsyncStorage } from 'react-native'
import * as Google from 'expo-google-app-auth'

export default function useAuth() {
  const auth = firebase.auth()

  const firestore = firebase.firestore()
  const usersRef = firestore.collection('users')

  async function findIfUserExists() {
    const query = await usersRef
        .where('email', '==', auth.currentUser.email)
        .get()

    const user = query.docs[0]
    return user
  }

  async function registerUser() {
    await usersRef.doc(auth.currentUser.uid).set({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
      avatar: auth.currentUser.photoURL
    })
  }

  async function authenticateUser() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        iosClientId: process.env.EXPO_IOS_CLIENT_ID,
        androidClientId: process.env.EXPO_ANDROID_CLIENT_ID,
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        const credential = firebase
          .auth.GoogleAuthProvider.credential(result.idToken)

        await auth.signInWithCredential(credential)

        const searchedUser = await findIfUserExists()

        if (!searchedUser) {
          await registerUser()
        }
    
        return auth.currentUser.uid
      } 
    } catch (err) {
      return { error: err.message }
    }
  }
  
  async function handleSignIn() {
    const user_id = await authenticateUser()

    if (user_id) {
      await AsyncStorage.setItem('user_id', user_id)
    }
  }
  
  return { handleSignIn }
}

// 890472088963-cp6p82cn7a42br3b6nkk34rjh4v68c32.apps.googleusercontent.com
// 890472088963-5jatc3p3gvm9np1nvhti38hl5suhqblv.apps.googleusercontent.com