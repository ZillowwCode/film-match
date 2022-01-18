import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const FilmItem = (props) => {
  return (
    <Card elevation={10}>
      <CardHeader
        sx={{
          backgroundColor: "#262730",
          color: "#F6F7EB",
          textAlign: "center",
        }}
        title="Titre du film"
      />
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.pocket-lint.com/r/s/970x/assets/images/140219-tv-news-feature-netflix-tips-and-tricks-how-to-master-your-binge-watching-experience-image4-rivlhfwq6o-jpg.webp?v1"
      />
      <CardContent sx={{ backgroundColor: "#F6F7EB", color: "#262730" }}>
        <Typography variant="body2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          non quod voluptate hic expedita repudiandae est quasi magni sunt
          asperiores. Adipisci alias sequi vel saepe quo eos reiciendis!
          Repellendus, molestiae.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilmItem;
