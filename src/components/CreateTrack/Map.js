import { StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import React , {useState , useEffect , useContext} from 'react'
import MapView , {Polyline , Circle} from 'react-native-maps'
import { Context as LocationContext } from '../../context/LocationContext'

const Map = () => {
  const {state :{currentLocation , locations}} = useContext(LocationContext)
  //console.log(state)
  if (!currentLocation)
  return(<ActivityIndicator style={{marginTop:200}} size="large"/>)
  return (
    <View>
      <MapView 
      style={styles.mapStyle}
      initialRegion= {{
        // latitude:currentLocation.coords.latitude,
        // longitude:currentLocation.coords.longitude,
        // or
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      // region={{
      //   // latitude:currentLocation.coords.latitude,
      //   // longitude:currentLocation.coords.longitude,
      //   // or
      //   ...currentLocation.coords,
      //   latitudeDelta:0.01,
      //   longitudeDelta:0.01
      // }}
      >
       <Circle
       center={currentLocation.coords}
       radius={30}
       strokeColor="rgba(158, 158 , 255, 1.0 )"
       fillColor="rgba(158, 158 , 255, 0.3 )"
       />
       <Polyline coordinates={locations.map((loc)=>loc.coords)}/>
      </MapView>
     
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    mapStyle:{
        height:300
    }
})