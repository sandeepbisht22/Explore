import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Props = {
  title: string;
  content: string;
  type: "bullet" | "para";
};

const TitlePara = ({ title, content, type }: Props) => {
  return (
    <Box m="2rem" padding="1rem" boxShadow={"5"} borderRadius="1rem">
      <Box mb="0.5rem">
        <Typography variant="h3" fontWeight={"bold"}>
          {title}
        </Typography>
      </Box>
      <Divider />
      <Box mt="1rem">
        {type === "para" ? (
          <Typography variant="body1">{content}</Typography>
        ) : (
          <ul>
            {content.split(".").map((con, i) => {
              return i < content.split(".").length - 1 ? <li>{con}</li> : <></>;
            })}
          </ul>
        )}
      </Box>
    </Box>
  );
};

export default TitlePara;
