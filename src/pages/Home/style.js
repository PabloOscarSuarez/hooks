import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default makeStyles({
  container: {
    height: "100vh",
    ...centeredStyleObj,
    flexDirection: "column"
  },
  cardContainer: {
    width: 400,
    height: 400,
    padding: "2rem",
    ...centeredStyleObj,
    flexDirection: "column"
  },
  title: {
    fontSize: "4rem"
  },
  titleGridContainer: {
    ...centeredStyleObj
  },
  textFieldSearch: {
    width: "90%"
  },
  searchButton: {
    marginLeft: "0.5rem"
  },
  buttonContainer: {
    marginTop: "1.5rem"
  },
  MovieIcons: {
    fontSize: "4rem"
  }
});
