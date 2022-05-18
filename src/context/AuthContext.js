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
        case "singIn":
          return {errorMessage:'' , token:action.payload}
          case "clear_error":
          return {...state, errorMessage:''}
          case "logOut":
            return {token:null , errorMessage:''}
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => {
  return async ()=>{
    const token = await AsyncStorage.getItem('token')
    if (token)
    navigate("mainFlow");
    else
    navigate("loginFlow")
  }
}

const clearErrorMessage = (dispatch)=>{
  console.log("clear error message called")
  return ()=>{
  dispatch({
    type:'clear_error',
  });
}
}

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
      // console.log("Sign in");
      // console.log(email, password);
      const resoponse = await trackerApi.post('/signIn' , {email, password});
      await AsyncStorage.setItem("token" , resoponse.data.token);
      dispatch({type:'singIn',payload:resoponse.data.token});
      navigate("TrackList");
      //
    }
    catch(err)
    {
      console.log(err)
      console.log(err.response.data)
      dispatch({
        type:'add_error',
        payload:"something went wrong with sign in screen"
      })
    }
    
  }
}

const signOut = (dispatch) =>{
  return async ()=>{
    await AsyncStorage.removeItem('token')
    dispatch({type:'signOut'});
    navigate('loginFlow')
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {signUp ,signIn, signOut , clearErrorMessage , tryLocalSignIn},
  { token: null,
  errorMessage:'' }
);
