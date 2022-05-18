import { View, Text } from 'react-native'
import React , {useEffect, useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext'

export default function AuthResolveScreen() {
    const {tryLocalSignIn} = useContext(AuthContext)
    console.log("auth screen")
    useEffect(()=>{
        tryLocalSignIn();
    } , [])
  return (
    <View>
      <Text>AuthResolveScreen</Text>
    </View>
  )
}