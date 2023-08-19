import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageListing from "../../../common/ImageListing";

type Props = {};

const TravelMean = (props: Props) => {
  return (
    <Box my="2rem" border={"2px solid black"} padding="2rem" height="15rem">
      <Typography variant="h5">Bus</Typography>

      <Box display={"flex"}>
        <Box>
          <Box display="flex">
            <Typography mr="0.5rem">Average Fare :</Typography>
            <Typography>420</Typography>
          </Box>
          <Box display="flex">
            <Typography mr="0.5rem">Average time taken :</Typography>
            <Typography>10hrs</Typography>
          </Box>
        </Box>
        <Box>
          <ImageListing height={200} width={300} imageData={[]} />
        </Box>
      </Box>
    </Box>
  );
};

export default TravelMean;
