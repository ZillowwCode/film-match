import React from "react";
import { Typography, Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Form from "./Components/Form";
import Footer from "./Components/Footer";
import FilmItem from "./Components/FilmItem";

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
    <React.Fragment>
      <Container>
        <div id="header">
          <Typography
            sx={{ fontSize: 144, marginTop: "50px" }}
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

        <div id="form">
          <Form />
        </div>

        <div id="filmsList">
          <Grid
            container
            spacing={3}
            sx={{ marginTop: "50px", marginBottom: "220px" }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FilmItem />
            </Grid>
          </Grid>
        </div>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default App;
