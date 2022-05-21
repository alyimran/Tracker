import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {FontAwesome} from "@expo/vector-icons"

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";

import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as LocationProvider} from './src/context/LocationContext'
import { setNavigator } from './src/navigatorRef';
import AuthResolveScreen from './src/screens/AuthResolveScreen';
import { Provider as TrackProvider } from './src/context/TrackContext';


const stackforTrackList = createStackNavigator({
  TrackList:TrackListScreen,
  TrackDetail:TrackDetailScreen
})

stackforTrackList.navigationOptions = {
  title:"Tracks",
  tabBarIcon:<FontAwesome size={20} name='th-list'/>
}

const switchNavigator = createSwitchNavigator({
  AuthResolve:AuthResolveScreen,
  loginFlow : createStackNavigator({
    SignUp:SignupScreen,
    SignIn:SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    TrackListFlow:stackforTrackList,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
});

const App = createAppContainer(switchNavigator)
export default ()=> {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(nav)=>setNavigator(nav)}/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
}
