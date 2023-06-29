/** @format */
import { FETH_PAGINATION_SUCCESS, FETH_PAGINATION_ERROR } from "../constant";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const paginationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETH_PAGINATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETH_PAGINATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paginationReducer;
