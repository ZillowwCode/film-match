import React, { useState } from "react";
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
  const [films, setFilms] = useState([
    {
      title: "Les Éternels",
      synopsis:
        "Depuis l’aube de l’humanité, les Éternels, un groupe de héros venus des confins de l’univers, protègent la Terre. Lorsque les Déviants, des créatures monstrueuses que l’on croyait disparues depuis longtemps, réapparaissent mystérieusement, les Éternels sont à nouveau obligés de se réunir pour défendre l’humanité…",
      note: 7.2,
      imgUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vV7TrS7PNRZJHCxNmiYN1SU7s1w.jpg",
      date: "3 nov. 2021",
    },

    {
      title: "Spider-Man: No Way Home",
      synopsis:
        "Après les évènements liés à l'affrontement avec Mystério, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de Mystério, et est traqué par les médias. Cet évènement a également des conséquences terribles sur la vie de sa petite-amie M. J. et de son meilleur ami Ned. Désemparé, Peter Parker demande alors de l'aide au Docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu et cette action altère la stabilité de l'espace-temps. Cela ouvre le « Multivers », un concept terrifiant dont ils ne savent quasiment rien.",
      note: 8.4,
      imgUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3SyG7dq2q0ollxJ4pSsrqcfRmVj.jpg",
      date: "15 déc. 2021",
    },

    {
      title: "S.O.S. Fantômes : L’Héritage",
      synopsis:
        "Une mère célibataire et ses deux enfants s'installent dans une petite ville et découvrent peu à peu leur relation avec les chasseurs de fantômes et l'héritage légué par leur grand-père.",
      note: 7.7,
      imgUrl:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w1cmavTc0IwISr9ypI1XkBtxhVK.jpg",
      date: "11 nov. 2021",
    },
  ]);

  const handleFormSubmit = (film1, film2) => {
    alert("Films recus !");
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
          <Form submit={handleFormSubmit} />
        </div>

        <div id="filmsList">
          <Grid container sx={{ marginTop: "50px", marginBottom: "220px" }}>
            {films.map((film) => {
              return (
                <Grid xs={12} sm={6} md={4}>
                  <FilmItem
                    title={film.title}
                    img={film.imgUrl}
                    synopsis={film.synopsis}
                    date={film.date}
                    note={film.note}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default App;
