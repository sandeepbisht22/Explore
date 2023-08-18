import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Props = {
  title: string;
  content: string;
};

const TitlePara = ({ title, content }: Props) => {
  return (
    <Box m="2rem" padding="1rem" boxShadow={"5"} borderRadius="1rem">
      <Box mb="0.5rem">
        <Typography variant="h3" fontWeight={"bold"}>
          {title}
        </Typography>
      </Box>
      <Divider />
      <Box mt="1rem">
        <Typography variant="body1">{content}</Typography>
      </Box>
    </Box>
  );
};

export default TitlePara;
