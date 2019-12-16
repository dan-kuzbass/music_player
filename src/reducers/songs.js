import {
  GET_SONGS,
  GET_SONGS_SUCCEED,
  GET_SONGS_FAILED,
  SET_CURRENT_SONG_ID
} from "../constants/actionTypes";

const initialState = {
  tracks: [
    "767240892"
  ],
  loading: false,
  error: false,
  currentSongID: -1,
  songs: []
}

export default function songs(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_SONGS_SUCCEED: {
      return {
        ...state,
        songs: action.songs,
        loading: false,
        error: false
      };
    }
    case GET_SONGS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    case SET_CURRENT_SONG_ID:
      return {
        ...state,
        currentSongID: action.currentSongID
      }
    default:
      return state
  }
}