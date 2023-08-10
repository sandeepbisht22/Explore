import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";
type Props = {};

const PlaceCommon = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box height="40rem" bgcolor={"grey"}></Box>
      <Button onClick={() => navigate("local-help")}>asas</Button>
      <Outlet />
    </Box>
  );
};

export default PlaceCommon;
