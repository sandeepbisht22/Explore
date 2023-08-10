import Box from "@mui/material/Box";
import FooterBackgroundImg from "../../assets/img/footerBackgroundImg.png";
import Logo from "../../assets/img/Logo.png";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30rem",
        marginTop: "2rem",
        border: "2px solid black",
        backgroundImage: `url(${FooterBackgroundImg})`,
      }}
    >
      <Box
        display={"flex"}
        margin="1rem"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Box>
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "10%",
              width: "50%",
              borderRadius: "0.5rem",
            }}
          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={4}>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" sx={{ color: "#E1306C" }} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
            </a>{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon color="primary" fontSize="large" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" color="primary" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" sx={{ color: "black" }} />
            </a>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
