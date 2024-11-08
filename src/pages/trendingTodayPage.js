import React from "react";
import Grid from "@mui/material/Grid2";

const TrendingTodayPage = (props) => {
  const movies = props.movies;
    
  return (
  <Grid container>
      <Grid size={12}>
          <h1> Trending Today </h1>
      </Grid>
    </Grid>
  );
};
export default TrendingTodayPage;