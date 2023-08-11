import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
type Props = {};

const PlaceCommon = (props: Props) => {
  return (
    <Box>
      <Box height="40rem" bgcolor={"grey"}></Box>
      <Outlet />
    </Box>
  );
};

export default PlaceCommon;
