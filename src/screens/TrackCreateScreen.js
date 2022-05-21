import '../_mockLocation'
import { StyleSheet, Text, View } from 'react-native'
import React , {useContext , useCallback} from 'react'
import Map from '../components/CreateTrack/Map'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import { requestForegroundPermissionsAsync , watchPositionAsync, Accuracy } from 'expo-location'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/CreateTrack/TrackForm'
import {FontAwesome} from "@expo/vector-icons"

const TrackCreateScreen = ({isFocused}) => {
  const { state, addLocation } = useContext(LocationContext)
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback)
  return (
    <SafeAreaView style= {styles.style}>
      <Text style={styles.textStyle}>TrackCreateScreen</Text>
      <Map/>
      {err!==null?<Text>Please give permissions of location</Text>:null}
      <TrackForm/>
    </SafeAreaView>
  )
}
TrackCreateScreen.navigationOptions = {
  title:"Add Track",
  tabBarIcon:<FontAwesome size={20} name='plus'/>
}

export default withNavigationFocus(TrackCreateScreen) 

const styles = StyleSheet.create({
  container:{
    marginTop:40
},
textStyle:{
    fontSize:22
}
})