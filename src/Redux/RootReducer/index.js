import * as actionTypes from "../actionTypes";

const initialState = {
  user:null,
  tracks:[],
  allTracks:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ALL_TRACKS :
      return {
        ...state,
        tracks: action.payload,
        allTracks: action.payload
      }

    default:
      return state

  }
};

export default rootReducer;

