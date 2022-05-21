import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import React , {useContext} from 'react'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import {FontAwesome} from "@expo/vector-icons"

const AccountScreen = () => {
    const {signOut} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textStyle}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signOut}/>
    </SafeAreaView>
  
  )
}
AccountScreen.navigationOptions = {
  title:"Account",
  tabBarIcon:<FontAwesome size={20} name='gear'/>
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