import Box from "@mui/material/Box";
import DividerGen from "../../common/DividerGen";
import RootMap from "../../Map/RootMap";
import AboutStateBox from "./AboutState/AboutStateBox";
import Top10 from "./Top10/Top10";
type Props = {};

const Landing = (props: Props) => {
  return (
    <Box>
      <RootMap />
      <DividerGen />
      <AboutStateBox />
      <DividerGen />
      <Top10 />
      <DividerGen />
    </Box>
  );
};

export default Landing;
