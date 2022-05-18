import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View>
      <MapView style={styles.mapStyle}/>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    mapStyle:{
        height:300
    }
})