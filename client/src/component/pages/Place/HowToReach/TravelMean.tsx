import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InBetweenPlaces from "./InBetweenPlaces";

type Props = {};

const TravelMean = (props: Props) => {
  return (
    <Box my="2rem">
      <Typography>Bus</Typography>
      <Box display="flex">
        <Typography mr="0.5rem">Fare :</Typography>
        <Typography>420</Typography>
      </Box>
      <Box display="flex">
        <Typography mr="0.5rem">Average time taken :</Typography>
        <Typography>10hrs</Typography>
      </Box>
      <InBetweenPlaces />
    </Box>
  );
};

export default TravelMean;
