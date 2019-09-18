import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";

export default ({ Title, Poster, imdbID, Year, Type }) => {
  return (
    <Card>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} />
        </Grid>
        <Grid item>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained">
            ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
