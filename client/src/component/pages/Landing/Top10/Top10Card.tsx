import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ImageTest from "../../../../assets/img/ImageTest.jpg";
import Logo from "../../../../assets/img/Logo.png";
import Slider from "react-slick";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import Top10Modal from "./Top10Modal";
type Props = {};

const Top10Card = (props: Props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [exploreMoreModal, setExploreMoreModal] = useState(false);
  return (
    <Box
      width="30%"
      margin="1rem"
      border="2px solid black"
      borderRadius={"1rem"}
    >
      <Box margin="1rem" height="94%">
        <Box height="50%">
          <Slider {...settings}>
            <Box>
              <img
                src={ImageTest}
                alt="Logo"
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
            <Box>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
            <Box>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
          </Slider>
        </Box>
        <Box height={"20%"} margin="1rem">
          <Typography variant="h3" fontWeight={"bold"}>
            Sprituals
          </Typography>
          <Typography
            variant="body2"
            sx={{ height: "5rem", overflowY: "scroll" }}
          >
            The contracting authority will be the Contracting Committee of the
            company, EMPRESA PARA LA GESTIÓN DE RESIDUOS INDUSTRIALES, S.A.,
            unless otherwise specified in the relevant internal rules governing
            the establishment or operation of the company and subject to any
            delegation or devolution of powers that may be agreed.
          </Typography>
        </Box>
        <Box height={"10%"} margin="1rem">
          <Button variant="contained" onClick={() => setExploreMoreModal(true)}>
            Explore More <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Box>
      <Top10Modal
        handleClose={() => setExploreMoreModal(false)}
        open={exploreMoreModal}
      />
    </Box>
  );
};

export default Top10Card;
