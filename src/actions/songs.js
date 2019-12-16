import * as types from "../constants/actionTypes";
import axios from "axios";

export const getSongsOfPlaylist = (playlistID) => async (dispatch) => {
  dispatch({
    type: types.GET_SONGS
  });
  try {
    const response = await axios(
      `https://api.deezer.com/playlist/${playlistID}`,
    );
    dispatch({
      type: types.GET_SONGS_SUCCEED,
      songs: response.data.tracks.data
    });
  } catch (error) {
    dispatch({
      type: types.GET_SONGS_FAILED
    });
  }
};

export const setCurrentSongID = (currentSongID) => async (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_SONG_ID,
    currentSongID
  });
}