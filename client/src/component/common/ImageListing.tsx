import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
type Props = {
  imageData: tImageListing[];
  width: number;
  height: number;
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageListing = ({ imageData, width, height }: Props) => {
  return imageData && imageData.length > 0 ? (
    <ImageList
      sx={{ width: width, height: height }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {imageData.map((item: tImageListing) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ) : (
    <></>
  );
};

export default ImageListing;

interface tImageListing {
  img: string;
  title: string;
  cols: number;
  rows: number;
}
