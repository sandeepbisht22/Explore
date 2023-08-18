import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import React from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import FestivalIcon from "@mui/icons-material/Festival";
import HotelIcon from "@mui/icons-material/Hotel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {};

const HoverButton = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = (to: string) => {
    navigate(`${to}`);
  };
  const currentPath = location.pathname.split("/");
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        position: "fixed",
        left: "1rem",
        top: "10rem",
        opacity: "0.7",
        background: "orange",
        padding: "0.3rem",
        borderRadius: "2rem",
        paddingY: "1rem",
      }}
    >
      {currentPath[currentPath.length - 1] !== "how-to-reach" && (
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          sx={{ background: "white", border: "1px solid black" }}
          onClick={() => navigateTo("how-to-reach")}
        >
          <TimeToLeaveIcon sx={{ color: "orange" }} />
        </Avatar>
      )}
      {currentPath[currentPath.length - 1] !== "place-data" && (
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          sx={{ background: "white", border: "1px solid black" }}
          onClick={() => navigateTo("place-data")}
        >
          <FestivalIcon sx={{ color: "orange" }} />
        </Avatar>
      )}
      {currentPath[currentPath.length - 1] !== "travel-agent" && (
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          sx={{ background: "white", border: "1px solid black" }}
          onClick={() => navigateTo("travel-agent")}
        >
          <HotelIcon sx={{ color: "orange" }} />
        </Avatar>
      )}
      {currentPath[currentPath.length - 1] !== "local-help" && (
        <Avatar
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
          sx={{ background: "white", border: "1px solid black" }}
          onClick={() => navigateTo("local-help")}
        >
          <SupportAgentIcon sx={{ color: "orange" }} />
        </Avatar>
      )}
    </Stack>
  );
};

export default HoverButton;
