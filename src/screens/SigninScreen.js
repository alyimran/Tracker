import { StyleSheet, Text, View } from 'react-native'
import { Context as Authcontext } from '../context/AuthContext'
import React , {useState , useContext} from 'react'
import NavLink from '../components/NavLink'
import Authform from '../components/Authform'
import SignupScreen from './SignupScreen'
import {NavigationEvents} from 'react-navigation'

const SigninScreen = ({navigation}) => {
const {state, signIn , clearErrorMessage} = useContext(Authcontext)
  return (
    <View style = {styles.container}>
        <NavigationEvents
        onDidBlur={clearErrorMessage}
        />
      <Authform 
      headerText="Sign In in tracker" 
      buttonLabel="Sign In"
      onSubmit={signIn}
      errorMessage={state.errorMessage}
      />
      <NavLink
      text="Don't have an account? Go to Sign Up"
      route="SignUp"/>
    </View>
  )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
export default SigninScreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:50
    },
})