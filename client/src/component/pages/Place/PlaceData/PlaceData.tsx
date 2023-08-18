import Box from "@mui/material/Box";
import ImageListing from "../../../common/ImageListing";
import TitlePara from "../../../common/TitlePara";

type Props = {};

const PlaceData = (props: Props) => {
  return (
    <Box>
      <Box></Box>
      <ImageListing imageData={[]} />
      <TitlePara
        title={"Title"}
        content={
          "This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored. This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored. This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. The paragraph is indented, aligned, and the space between characters is specified. The underline is removed from this colored. "
        }
      />
    </Box>
  );
};

export default PlaceData;
