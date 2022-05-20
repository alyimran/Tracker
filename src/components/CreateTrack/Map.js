import { StyleSheet, Text, View } from 'react-native'
import React , {useState , useEffect} from 'react'
import MapView , {Polyline} from 'react-native-maps'
import { requestForegroundPermissionsAsync } from 'expo-location'

const Map = () => {
  const  [err, setErr] = useState(null)
  const points = []
  for(let i = 0; i<20;i++)
  {
    points.push({
      latitude:37.33233 + i*0.001,
      longitude:-122.03121 + i*0.001,
    });
  }

  const startWatching = async() =>{
    try{
      console.log("start watching called")
    const {granted} = await requestForegroundPermissionsAsync();
    console.log("Granted value" + granted)
    if (!granted)
    {
      throw new Error("Location permissions not granted");
    }
    }
    catch(err)
    {
      console.log("Error is" + err)
      setErr(err);
    }
  }

  useEffect(()=>{
    startWatching();
  },[]);

  return (
    <View>
      <MapView 
      style={styles.mapStyle}
      initialRegion= {{
        latitude:37.33233,
        longitude:-122.03121,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      >
        <Polyline
        coordinates={points}
        />
      </MapView>
      {err!==null?<Text>Please give permissions of location</Text>:null}
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    mapStyle:{
        height:300
    }
})