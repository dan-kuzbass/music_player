import * as types from "../constants/actionTypes";

export const setPlayerState = (playing) => (dispatch) => {
  dispatch({
    type: types.SET_PLAYING,
    playing
  });
}