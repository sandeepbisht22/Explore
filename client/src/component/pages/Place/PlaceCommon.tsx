import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import HoverButton from "../../common/HoverButton";
import ImageSlider from "../../common/ImageSlider";

type Props = {};

const PlaceCommon = (props: Props) => {
  return (
    <Box>
      <ImageSlider imageLinks={["", "", ""]} />
      <HoverButton />
      <Outlet />
    </Box>
  );
};

export default PlaceCommon;
