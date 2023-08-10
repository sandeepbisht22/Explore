import Box from "@mui/material/Box";
import Top10Card from "./Top10Card";
import Typography from "@mui/material/Typography";

type Props = {};

const Top10 = (props: Props) => {
  return (
    <Box border={"2px solid black"} marginY="2rem">
      <Typography variant="h2" margin="1rem" fontWeight={"bold"}>
        Top 10
      </Typography>
      <Top10Card />
    </Box>
  );
};

export default Top10;
