import axios from 'axios'
import * as actionType from '../actionTypes'

export const getAllTracks = async () => {
    console.log("llego en parte mi rey")
    
    try {
        const {data} = await axios.get("http://192.168.0.107:3001/user")

        dispatch({
                type: actionType.GET_ALL_TRACKS,
                payload: data
        })
        
    } catch (error) {
        console.log("no estaria entrando mi rey",error)
    }
}