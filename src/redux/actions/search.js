import {
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_BY_ID_COMPLETE,
  SEARCH_MOVIE_BY_ID_START,
  SEARCH_MOVIE_BY_ID_ERROR
} from "../../consts/type";

import axios from "axios";

const baseUrl = "https://www.omdbapi.com/?apiKey=ffd0c3a5&s=";
const baseUrlById = "https://www.omdbapi.com/?apiKey=ffd0c3a5&i=";
export const searchMovie = payload => async dispatch => {
  dispatch({ type: SEARCH_MOVIE_START });
  try {
    const response = await axios.get(baseUrl + payload);
    dispatch({ type: SEARCH_MOVIE_COMPLETE, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_MOVIE_ERROR });
  }
};

export const searchDetailMovie = payload => async dispatch => {
  dispatch({ type: SEARCH_MOVIE_BY_ID_START });
  try {
    const response = await axios.get(baseUrlById + payload);
    dispatch({ type: SEARCH_MOVIE_BY_ID_COMPLETE, payload: response.data });
  } catch (error) {
    dispatch({ type: SEARCH_MOVIE_BY_ID_ERROR });
  }
};
