import { View, StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import {Text} from 'react-native-elements'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink =({text , route , navigation})=> {
  return (
    <>
    <Spacer>
    <TouchableOpacity 
      onPress={()=>navigation.navigate(route)}>
    <Text style = {styles.textStyle}>
        {text}
    </Text>
    </TouchableOpacity>
    </Spacer>
    </>
  )
}

export default withNavigation(NavLink)

const styles = StyleSheet.create({
    textStyle:{
        color:'blue'
    }
});