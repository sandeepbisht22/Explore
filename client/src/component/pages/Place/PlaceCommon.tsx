import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import HoverButton from "../../common/HoverButton";
type Props = {};

const PlaceCommon = (props: Props) => {
  return (
    <Box>
      <Box height="40rem" bgcolor={"grey"}></Box>
      <HoverButton />
      <Outlet />
    </Box>
  );
};

export default PlaceCommon;
