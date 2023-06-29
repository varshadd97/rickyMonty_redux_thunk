/** @format */
import { FETH_EPISODE_ERROR, FETH_EPISODE_SUCCESS } from "../constant";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const episodeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETH_EPISODE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETH_EPISODE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
