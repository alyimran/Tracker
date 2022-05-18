import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";

import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigatorRef';
import AuthResolveScreen from './src/screens/AuthResolveScreen';

const switchNavigator = createSwitchNavigator({
  AuthResolve:AuthResolveScreen,
  loginFlow : createStackNavigator({
    SignUp:SignupScreen,
    SignIn:SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    trackListFlow:createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
});

const App = createAppContainer(switchNavigator)
export default ()=> {
  return (
    <AuthProvider>
      <App ref={(nav)=>setNavigator(nav)}/>
    </AuthProvider>
  );
}
