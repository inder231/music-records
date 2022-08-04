import axios from "axios";
import * as types from "./actionTypes";
export const getMusicRecords = (params) => (dispatch) => {
  dispatch({ type: types.GET_MUSIC_RECORDS_REQUEST });
  return axios("https://api-0231.herokuapp.com/albums", params)
    .then((res) => {
      // console.log(res.data);
      return dispatch({
        type: types.GET_MUSIC_RECORDS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_MUSIC_RECORDS_FAILURE });
    });
};
export const updateMusicRecord = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_MUSIC_RECORDS_REQUEST });
  return axios
    .patch(`https://api-0231.herokuapp.com/albums/${id}`, data)
    .then((res) => dispatch({ type: types.UPDATE_MUSIC_RECORDS_SUCCESS }))
    .catch((err) => dispatch({ type: types.UPDATE_MUSIC_RECORDS_FAILURE }));
};
