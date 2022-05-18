import { StyleSheet, View } from 'react-native'
import React , {useState} from 'react'
import Spacer from './Spacer'
import {Text, Button, Input} from 'react-native-elements'

const Authform = ({headerText , onSubmit , errorMessage , buttonLabel}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
      <>
    <Spacer>
    <Text h3>{headerText}</Text>
    </Spacer>
    <Input 
    label='Email' 
    value={email} 
    //onChangeText = {(newEmail)=>setEmail(newEmail)} this can be writtern as below as well
    onChangeText= {setEmail}
    autoCapitalize="none"
    autoCorrect={false}
    />
    <Spacer/>
    <Input 
    secureTextEntry
    label= "Password" 
    value={password}
    autoCapitalize='none'
    autoCorrect={false} 
    //onChangeText= {(newPassword)=>setPassword(newPassword)} this can be written as below as well
    onChangeText= {setPassword}
    />
    <Spacer>
        {errorMessage!=="" ? (<Text style = {styles.errorMessageStyle}>{errorMessage}</Text>) : null}
    <Button title={buttonLabel} onPress={()=>{
        console.log(email, password)
        onSubmit({email, password})
        }}/>
    </Spacer>
    </>
  )
}

export default Authform

const styles = StyleSheet.create({
    errorMessageStyle:{
        color:'red',
        fontSize:15,
        marginBottom:15
    },
})