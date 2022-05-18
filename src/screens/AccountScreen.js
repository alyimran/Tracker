import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import React , {useContext} from 'react'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textStyle}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signOut}/>
    </SafeAreaView>
  
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        marginTop:40
    },
    textStyle:{
        fontSize:22
    }
})