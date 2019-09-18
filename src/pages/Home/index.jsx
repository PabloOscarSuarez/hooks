import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import styles from "./style";
import { MovieIcons } from "../../Icons/index";

export default ({ history }) => {
  const [searchText, setSearchtext] = useState("");
  const classes = styles();
  const handleChange = e => {
    setSearchtext(e.target.value);
  };
  const handleCleanTextClick = () => {
    setSearchtext("");
  };
  const handleTextSearchTextClick = () => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid className={classes.titleGridContainer}>
          <Typography className={classes.title}>Bienvenido</Typography>
          <Grid>
            <MovieIcons className={classes.MovieIcons} />
          </Grid>
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleChange}
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCleanTextClick}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTextSearchTextClick}
            className={classes.searchButton}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
