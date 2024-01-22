import { Box, Grid } from "@mui/material";
import React from "react";

const Features = () => {
  return (
    <>
    <p className="pricing-main-heading" style={{marginTop:"64px"}}>Features</p>
      <Grid container gap={8} textAlign={"center"} justifyContent={"center"} marginBottom={8} paddingRight={8} paddingLeft={8}>
        <Grid item  xs={12} md={5.5} style={{backgroundColor:"#f2f7fc", borderRadius:"16px", padding:"16px"}}>
          <p className="features-heading">Unlimited Rooms</p>
          <p className="features-content">
            {" "}
            Since it's based on mathematics, it is 100% scalable,<br /> you can fit in
            as many rooms as you like,<br /> each with its own dimensions.
          </p>
        </Grid>
        <Grid item xs={12} md={5.5} style={{backgroundColor:"#f2f7fc", borderRadius:"16px", padding:"16px"}}>
          <p className="features-heading">Adjacencies</p>
          <p className="features-content">
            {" "}
            Tell us which rooms you’d like to have together <br /> and GPLAN will keep
            them connected <br /> in all the floor plans.
          </p>
        </Grid>
        <Grid item xs={12} md={5.5} style={{backgroundColor:"#f2f7fc", borderRadius:"16px", padding:"16px"}}>
          <p className="features-heading">Intelligent Circulation</p>
          <p className="features-content">
            {" "}
            Add passages and corridors and<br />  optimize the plot based on  building
            strength,<br /> air ventilation, and sunlight.
          </p>
        </Grid>
        <Grid item xs={12} md={5.5} style={{backgroundColor:"#f2f7fc", borderRadius:"16px", padding:"16px"}}>
          <p className="features-heading">Non-rectangular floor plans</p>
          <p className="features-content">
            {" "}
            Include C, F, L, and T <br /> shaped rooms so your clients get to <br />
            channelize their ideas fully.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Features;
