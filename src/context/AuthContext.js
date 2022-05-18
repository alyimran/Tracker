import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigatorRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {...state, errorMessage:action.payload}
      case "signUp":
        return {errorMessage:'' , token:action.payload}
    default:
      return state;
  }
};

const signUp = (dispatch)=>{
  return async ({email, password})=>{
    try{
      console.log(email, password)
    const resoponse = await trackerApi.post('/signUp' , {email, password});
    await AsyncStorage.setItem("token" , resoponse.data.token);
    dispatch({type:'signUp',payload:resoponse.data.token});
    navigate("TrackList");
    }
    catch(err)
    {
      console.log(err.response.data)
      dispatch({
        type:"add_error",
        payload:'Something went wrong with sign up'
      });
    }
  }
}

const signIn = (dispatch)=>{
  return async ({email, password})=>{
    try{
      console.log("Sign in");
      console.log(email, password);
      //
    }
    catch(err)
    {

    }
    
  }
}

const signOut = (dispatch) =>{
  return ()=>{

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signUp ,signIn, signOut},
  { token: null,
  errorMessage:'' }
);
