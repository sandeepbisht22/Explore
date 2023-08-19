import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InBetweenPlaces from "./InBetweenPlaces";
import TravelMean from "./TravelMean";

type Props = {};

const HowToReach = (props: Props) => {
  return (
    <Box>
      //Dropdown of intial placess amd change distance from that place And we
      //will show a fixed place from where we will show distance and place
      <Box>
        <Typography>Distance till common city</Typography>
        <Typography>400km</Typography>
      </Box>
      <Box>
        <Typography>Total Distance:</Typography>
        <Typography>554km</Typography>
      </Box>
      <InBetweenPlaces />
      <TravelMean />
      <TravelMean />
      <TravelMean />
    </Box>
  );
};

export default HowToReach;
