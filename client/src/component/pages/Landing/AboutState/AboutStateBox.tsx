import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ImageListing from "../../../common/ImageListing";
import { useNavigate } from "react-router-dom";
type Props = {};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AboutStateBox = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box border={"2px solid black"} marginY="2rem">
      <Typography variant="h4" margin="1rem" fontWeight={"bold"}>
        About Uttarakhand
      </Typography>
      <Box margin="1rem">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Item>
              <Box display="flex" alignItems={"center"}>
                <Typography variant="h6" margin="1rem">
                  Language :
                </Typography>
                <Typography variant="h6" margin="1rem" fontWeight={"bold"}>
                  Kumaoni and Garwahli
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box display="flex" alignItems={"center"}>
                <Typography variant="h6" margin="1rem">
                  Population :
                </Typography>
                <Typography variant="h6" margin="1rem" fontWeight={"bold"}>
                  11,090,425
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box display="flex" alignItems={"center"}>
                <Typography variant="h6" margin="1rem">
                  Capital :
                </Typography>
                <Typography variant="h6" margin="1rem" fontWeight={"bold"}>
                  Dehradun
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Box display="flex" alignItems={"center"}>
                <Typography variant="h6" margin="1rem">
                  Capital :
                </Typography>
                <Typography variant="h6" margin="1rem" fontWeight={"bold"}>
                  Dehradun
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <ImageListing imageData={[]} />
      <Button
        variant="contained"
        sx={{
          margin: "1rem",
          display: "flex",
        }}
        onClick={() => navigate("/about-state")}
      >
        Know More
      </Button>
    </Box>
  );
};

export default AboutStateBox;
