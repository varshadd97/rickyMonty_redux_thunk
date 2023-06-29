/** @format */

import { FETH_EPISODE_SUCCESS, FETH_EPISODE_ERROR } from "../constant";

export const fectEpisodeAction: any =
  (currentPage: number) => async (dispatch: any) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${currentPage}`
      );
      const responseJson = await response.json();
      const arrayManager = Object.values(responseJson);
      dispatch({ type: FETH_EPISODE_SUCCESS, payload: arrayManager });
    } catch (error: any) {
      console.log("FETH_EPISODE_ERROR", error);
      dispatch({ type: FETH_EPISODE_ERROR, payload: error.message });
    }
  };
