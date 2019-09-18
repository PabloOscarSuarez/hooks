import {
  SEARCH_MOVIE_COMPLETE,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_START
} from "../../consts/type";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true };
    case SEARCH_MOVIE_COMPLETE:
      return { ...state, isLoading: false, movieResults: payload };

    case SEARCH_MOVIE_ERROR:
      return { ...state, isLoading: false, movie: null };

    default:
      return state;
  }
};
