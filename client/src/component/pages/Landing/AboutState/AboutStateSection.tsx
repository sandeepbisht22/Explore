import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageListing from "../../../common/ImageListing";
type Props = {
  isReverse: boolean;
};

const AboutStateSection = ({ isReverse = false }: Props) => {
  return (
    <Box padding={"1rem"}>
      <Box
        sx={{
          float: isReverse ? "right" : "left",
        }}
      >
        <Typography variant="h1">Culture</Typography>
      </Box>

      <Box
        display={"flex"}
        flexDirection={isReverse ? "row-reverse" : "row"}
        sx={{ clear: "both" }}
      >
        <Box width="35%">
          <ImageListing imageData={[]} width={500} height={450} />
        </Box>
        <Divider orientation="vertical" sx={{ height: "20rem" }} />
        <Box width="55%"></Box>
      </Box>
    </Box>
  );
};

export default AboutStateSection;
