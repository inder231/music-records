import * as types from "./actionTypes";
const initState = {
  musicRecords: [],
  isLoading: false,
  isError: false,
  isUpdating: false,
};
export const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_MUSIC_RECORDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MUSIC_RECORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musicRecords: payload,
      };
    case types.GET_MUSIC_RECORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_MUSIC_RECORDS_REQUEST:
      return {
        ...state,
        isUpdating: true,
      };
    case types.UPDATE_MUSIC_RECORDS_SUCCESS:
      return {
        ...state,
        isUpdating: false,
      };
    case types.UPDATE_MUSIC_RECORDS_FAILURE:
      return {
        ...state,
        isUpdating: false,
        isError: true,
      };
    default:
      return state;
  }
};
