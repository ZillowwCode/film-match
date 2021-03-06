import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";

import FilmField from "./FilmField";

const useStyles = makeStyles({});

const Form = (props) => {
  const classes = useStyles();
  const [film1, setFilm1] = useState("");
  const [film2, setFilm2] = useState("");

  const handleChange1 = (value) => {
    setFilm1(value);
  };

  const handleChange2 = (value) => {
    setFilm2(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.submit(film1, film2);

    setFilm1("");
    setFilm2("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography
        variant="body1"
        className={classes.formTitle}
        align="center"
        sx={{ color: "#262730", marginTop: "32px", fontSize: "36px" }}
      >
        Quels sont vos films favoris ?
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sx={{ marginTop: "40px" }}>
          <FilmField ph="Film n°1" value={film1} change={handleChange1} />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "40px" }}>
          <FilmField ph="Film n°2" value={film2} change={handleChange2} />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#3F88C5",
              height: "60px",
              color: "#262730",
            }}
          >
            Trouver LES films idéaux
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
