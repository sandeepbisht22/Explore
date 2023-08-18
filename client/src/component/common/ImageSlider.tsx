import Slider from "react-slick";
import Box from "@mui/material/Box";

type Props = {
  imageLinks: string[];
};

const ImageSlider = ({ imageLinks }: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Box my={"2rem"}>
      <Slider {...settings}>
        {imageLinks.map((link) => (
          <Box>
            <Box
              height={"30rem"}
              sx={{
                backgroundImage: `url("https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_1609122238.jpg&w=2100&h=1000")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
