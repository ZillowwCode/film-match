import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <Container>
        <Typography variant="h4" sx={{ fontSize: "36px", marginTop: "20px" }}>
          Film Match &reg;
        </Typography>

        <Grid container sx={{ marginTop: "40px" }}>
          <Grid item xs={9}>
            <Typography variantr="body2">
              &copy; Raphaël Branco Vieira 2022 - Tous droits réservés.
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Link
              target="_blank"
              href="https://www.raphaelvieira.ch/"
              underline="hover"
              variant="body2"
              sx={{ color: "#D33F49" }}
            >
              www.raphaelvieira.ch
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
