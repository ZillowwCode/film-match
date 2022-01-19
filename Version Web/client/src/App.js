import React, { useState } from "react";
import { Typography, Container, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import env from "react-dotenv";
import axios from "axios";
import Masonry from "react-masonry-css";

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
  const [recs1, setRecs1] = useState([]);
  const [recs2, setRecs2] = useState([]);

  const handleSubmit = async (film1, film2) => {
    const res1 = await axios.get(`${env.API_URL}${env.API_KEY}&query=${film1}`);
    const filmId1 = res1.data.results[0].id;

    const res2 = await axios.get(`${env.API_URL}${env.API_KEY}&query=${film2}`);
    const filmId2 = res2.data.results[0].id;

    const resRec1 = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId1}/recommendations?api_key=${env.API_KEY}&language=fr`
    );
    const recFilm1 = resRec1.data.results;

    const resRec2 = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId2}/recommendations?api_key=${env.API_KEY}&language=fr`
    );
    const recFilm2 = resRec2.data.results;

    setRecs1(recFilm1);
    setRecs2(recFilm2);
  };

  const layoutBreakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

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
          <Form submit={handleSubmit} />
        </div>

        <div id="filmsList">
          <Masonry
            breakpointCols={layoutBreakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {recs1.map((rec) => {
              return (
                <div key={rec.id}>
                  <FilmItem
                    title={rec.title}
                    synopsis={rec.overview}
                    img={`https://image.tmdb.org/t/p/w500/${rec.poster_path}`}
                    date={rec.release_date}
                    note={rec.vote_average.toFixed(2)}
                  />
                </div>
              );
            })}

            {recs2.map((rec) => {
              return (
                <div key={rec.id}>
                  <FilmItem
                    title={rec.title}
                    synopsis={rec.overview}
                    img={`https://image.tmdb.org/t/p/w500/${rec.poster_path}`}
                    date={rec.release_date}
                    note={rec.vote_average.toFixed(2)}
                  />
                </div>
              );
            })}
          </Masonry>
        </div>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default App;
