import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageListing from "../../../common/ImageListing";

type Props = {};

const InBetweenPlace = (props: Props) => {
  return (
    <Box height="15rem" display={"flex"} m="1rem">
      <Box
        height={200}
        width={"40%"}
        sx={{ backgroundColor: "orange" }}
        mr="1rem"
      >
        <ImageListing imageData={[]} width={250} height={200} />
      </Box>
      <Box width={"60%"}>
        <Typography variant="h5"> Name of the place</Typography>
        <Typography variant="body1">
          It is 46km away from the common place.
        </Typography>
        <Typography variant="body2">
          It is Famous for.It is Famous for.It is Famous for.It is Famous for.It
          is Famous for. It is Famous for.It is Famous for.It is Famous for.It
          is Famous for.It is Famous for.
        </Typography>
      </Box>
    </Box>
  );
};

export default InBetweenPlace;
