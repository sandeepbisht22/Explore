import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { MAP_JSON } from "../../assets/topojson/Uttarakhand";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const markers = [
  {
    markerOffset: 25,
    name: "Dehradun",
    coordinates: [78.0298370109748, 30.31682757140143],
  },
];

const MapWithGeoJson = () => {
  const navigate = useNavigate();

  const markerClicked = () => {
    navigate("/place/place-data");
  };
  return (
    <Box width="100%" marginY="2rem" height="35rem" border={"2px solid black"}>
      <ComposableMap
        projectionConfig={{
          scale: 6000, //[TODO] Handle this when doing for mobile version
          center: [78, 29.5], //[TODO] Handle this when doing for mobile version
        }}
        style={{
          height: "auto",
        }}
        viewBox={"50 55 800 350"}
      >
        <ZoomableGroup>
          <Geographies geography={MAP_JSON}>
            {/* <Geographies geography="/india-states.json"> */}
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker
              key={name}
              coordinates={[coordinates[0], coordinates[1]]}
              onClick={markerClicked}
            >
              <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "12px",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  );
};

export default MapWithGeoJson;
