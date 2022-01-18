import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";

import FilmField from "./FilmField";

const useStyles = makeStyles({});

const Form = (props) => {
  const classes = useStyles();
  return (
    <form>
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
          <FilmField ph="Film n°1" />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "40px" }}>
          <FilmField ph="Film n°2" />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#3F88C5",
              height: "60px",
              color: "#262730",
            }}
          >
            Trouver LE film idéal
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
