import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, action)=>{
    switch (action.type)
    {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
}

const fetchTracks=  (dispatch)=> async ()=>{
    const result = await trackerApi.get('/tracks');
    console.log('results are' , result.data)
    dispatch({
        type:'fetch_tracks',
        payload:result.data
    });
}

const createTracks=  (dispatch)=> async(name, locations)=>{
    await trackerApi.post('/tracks' , {name, locations})
}

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTracks, createTracks},
    []
)