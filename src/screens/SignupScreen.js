import { StyleSheet , View , TouchableOpacity} from 'react-native'
import React , {useState , useContext} from 'react'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import Authform from '../components/Authform'



const SignupScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(state)
  return (
    <View style= {styles.container}>
    <Authform 
    headerText="Sing Up for tracker"
    buttonLabel="Sign Up"
    errorMessage={state.errorMessage}
    onSubmit={signUp}
    />
    <NavLink 
    text = "Alrady have and account? Sign In instead"
    route="SignIn"/>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:50
    },
   
})