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
    <Card elevation={3} sx={{ margin: "10px" }}>
      <CardHeader
        sx={{
          backgroundColor: "#262730",
          color: "#F6F7EB",
          textAlign: "center",
        }}
        title={props.title}
        subheader={
          <Typography variant="body2">
            [{props.date}] - {props.note}/10
          </Typography>
        }
      />
      <CardMedia component="img" height="600rem" image={props.img} />
      <CardContent sx={{ backgroundColor: "#F6F7EB", color: "#262730" }}>
        <Typography variant="body2">{props.synopsis}</Typography>
      </CardContent>
    </Card>
  );
};

export default FilmItem;
