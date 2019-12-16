import {
  SET_PLAYING
} from "../constants/actionTypes";

const initialState = {
  playing: false
}

export default function songs(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYING:
      return {
        ...state,
        playing: action.playing
      }
    default:
      return state
  }
}