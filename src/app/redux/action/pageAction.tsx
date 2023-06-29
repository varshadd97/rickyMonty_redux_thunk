/** @format */

import { FETH_PAGINATION_SUCCESS, FETH_PAGINATION_ERROR } from "../constant";

export const fetchPaginationAction: any =
  (currentPage: number) => async (dispatch: any) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      const responseJson = await response.json();
      const arrayManager = Object.values(responseJson);
      dispatch({ type: FETH_PAGINATION_SUCCESS, payload: arrayManager });
    } catch (error: any) {
      console.log("FETH_CHARACTER_ERROR", error);
      dispatch({ type: FETH_PAGINATION_ERROR, payload: error.message });
    }
  };
