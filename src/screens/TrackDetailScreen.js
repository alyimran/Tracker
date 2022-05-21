import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { Context as TrackContext } from '../context/TrackContext';
import MapView from 'react-native-maps';
import { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {
  const id = navigation.getParam("_id");
  const {state} = useContext(TrackContext)
  const track = state.find((x)=>x._id === id)
  const initialCoords = track.locations[0].coords


  return (
    <View>
      <Text>{track.name}</Text>
      <MapView style = {styles.map} initialRegion={{
        longitudeDelta:0.01,
        latitudeDelta:0.01,
        ...initialCoords
      }}>
        <Polyline coordinates={track.locations.map((x)=>x.coords)}/>
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map:{
    height:200,
  }
})