import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InBetweenPlace from "./InBetweenPlace";

type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const InBetweenPlaces = (props: Props) => {
  return (
    <Box my="2rem">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <InBetweenPlace />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <InBetweenPlace />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <InBetweenPlace />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <InBetweenPlace />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InBetweenPlaces;
