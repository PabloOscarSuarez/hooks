import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import styles from "./style";
import { withRouter } from "react-router-dom";

export default withRouter(({ Title, Poster, Year, Type, imdbID, history }) => {
  const classes = styles();
  const handleClick = () => {
    history.push(`/detail/${imdbID}`);
  };
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleClick}>
            ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
});
