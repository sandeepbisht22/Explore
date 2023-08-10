import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";
import ImageTest from "../../../../assets/img/ImageTest.jpg";
type Props = {
  handleClose: (open: boolean) => void;
  open: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  height: "35rem",
  borderRadius: "2rem",
};
const Top10Modal = ({ handleClose, open }: Props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            background:
              "linear-gradient(0deg, rgba(255,153,51,1) 27%, rgba(255,69,0,1) 100%)",
            padding: "1rem",
            borderRadius: "2rem 2rem 1rem 1rem",
            marginBottom: "1rem",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            fontWeight={"bold"}
          >
            Spritual
          </Typography>
        </Box>

        <Slider {...settings}>
          <Box>
            {" "}
            <Box
              sx={{
                borderRadius: "1rem 1rem 2rem 2rem ",
                border: "2px solid black",
                height: "28rem",
              }}
              justifyContent="center"
              alignItems={"center"}
              display="flex"
            >
              <Box
                margin="1rem"
                style={{
                  width: "300px",
                  borderRadius: "0.5rem",
                }}
              >
                <Box>
                  <Slider {...settings}>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                  </Slider>
                </Box>

                <Box marginTop="1rem">
                  <Typography variant="h3">Name</Typography>
                </Box>
              </Box>
              <Box height="95%" sx={{ overflowY: "scroll" }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula. Duis mollis, est non commodo luctus, nisi
                  eratportt itorigula. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula. l Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula.Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula. Duis mollis,
                  est non commodo luctus, nisi eratportt itorigula. Duis mollis,
                  est non commodo luctus, nisi erat porttitor ligula. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula. l Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula.Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi eratportt itorigula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula. Duis mollis, est non
                  commodo luctus, nisi porttitor ligula. l erat porttitor
                  ligula. lla. Duis mollis, est non commodo luctus, nisi
                  eratportt itorigula. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi porttitor ligula. l erat porttitor ligula. l
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box
              sx={{
                borderRadius: "1rem 1rem 2rem 2rem ",
                border: "2px solid black",
                height: "28rem",
              }}
              justifyContent="center"
              alignItems={"center"}
              display="flex"
            >
              <Box
                margin="1rem"
                style={{
                  width: "300px",
                  borderRadius: "0.5rem",
                }}
              >
                <Box>
                  <Slider {...settings}>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                    <Box>
                      <img
                        src={ImageTest}
                        alt="Logo"
                        style={{
                          objectFit: "fill",
                          width: "300px",
                          height: "300px",
                        }}
                      />
                    </Box>
                  </Slider>
                </Box>

                <Box marginTop="1rem">
                  <Typography variant="h3">Name</Typography>
                </Box>
              </Box>
              <Box height="95%" sx={{ overflowY: "scroll" }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula. Duis mollis, est non commodo luctus, nisi
                  eratportt itorigula. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula. l Duis mollis, est non
                  commodo luctus, nisi erat porttitor ligula.Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula. Duis mollis,
                  est non commodo luctus, nisi eratportt itorigula. Duis mollis,
                  est non commodo luctus, nisi erat porttitor ligula. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula. l Duis mollis, est non commodo luctus, nisi erat
                  porttitor ligula.Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi eratportt itorigula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula. Duis mollis, est non
                  commodo luctus, nisi porttitor ligula. l erat porttitor
                  ligula. lla. Duis mollis, est non commodo luctus, nisi
                  eratportt itorigula. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula. Duis mollis, est non commodo luctus,
                  nisi erat porttitor ligula. Duis mollis, est non commodo
                  luctus, nisi porttitor ligula. l erat porttitor ligula. l
                </Typography>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Modal>
  );
};

export default Top10Modal;
