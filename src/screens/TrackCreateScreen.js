import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/CreateTrack/Map'
import { SafeAreaView } from 'react-native-safe-area-context'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style= {styles.style}>
      <Text style={styles.textStyle}>TrackCreateScreen</Text>
      <Map/>
    </SafeAreaView>
  )
}

export default TrackCreateScreen

const styles = StyleSheet.create({
  container:{
    marginTop:40
},
textStyle:{
    fontSize:22
}
})