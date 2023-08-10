import * as React from "react";
import Box from "@mui/material/Box";
import AboutStateSection from "./AboutStateSection";

type Props = {};

const AboutStates = (props: Props) => {
  return (
    <Box>
      <AboutStateSection isReverse={false} />
      <AboutStateSection isReverse={true} />
    </Box>
  );
};

export default AboutStates;
