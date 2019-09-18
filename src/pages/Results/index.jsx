import React, { useEffect } from "react";
import queryString from "query-string";
import { Container, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { searchMovie } from "../../redux/actions/search";
import { isSearchingLoading, movieResults } from "../../redux/selectors/index";
import MovieResult from "../../components/MovieResults";

export default ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchingLoading(state));
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);

    if (movieName && !movies) {
      dispatch(searchMovie(movieName));
    }
  });

  const movieResult = () => {
    if (movies) {
      return movies.map((movie, index) => (
        <MovieResult key={index} {...movie} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else {
      return <div></div>;
    }
  };
  return <Container>{movieResult()}</Container>;
};
