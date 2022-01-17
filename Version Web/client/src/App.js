import React from "react";
import { Typography, Container, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    color: "#fff",
    textShadow: "0 0 5px #000",
  },

  subTitle: {
    color: "rgba(0, 0, 0, 0.5)",
  },

  divider: {},
});

const App = () => {
  const classes = useStyles();

  return (
    <Container>
      <div id="header">
        <Typography
          sx={{ fontSize: 144, marginTop: "100px" }}
          className={classes.title}
          variant="h1"
          align="center"
        >
          FilmMatch
        </Typography>

        <Typography
          className={classes.subTitle}
          sx={{ fontSize: 64 }}
          variant="h2"
          align="center"
        >
          Compliqué de trouver un film à deux ? <br />
          Nous avons la solution.
        </Typography>

        <Divider
          sx={{ marginTop: "40px", width: "950px" }}
          className={classes.divider}
        />
      </div>
    </Container>
  );
};

export default App;
