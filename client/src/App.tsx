import "./App.css";
import Navigation from "./component/layout/Navigation";
import Footer from "./component/layout/Footer";
import Landing from "./component/pages/Landing/Landing";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutStates from "./component/pages/Landing/AboutState/AboutStates";
import PlaceCommon from "./component/pages/Place/PlaceCommon";
import HowToReach from "./component/pages/Place/HowToReach/HowToReach";
import LocalHelp from "./component/pages/Place/LocalHelp/LocalHelp";
import PlaceData from "./component/pages/Place/PlaceData/PlaceData";
import TravelAgent from "./component/pages/Place/TravelAgent/TravelAgent";

function App() {
  return (
    <div>
      <Navigation />
      <Box marginX="10%">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="about-state" element={<AboutStates />} />
              <Route path="place" element={<PlaceCommon />}>
                <Route path="how-to-reach" element={<HowToReach />} />
                <Route path="local-help" element={<LocalHelp />} />
                <Route path="place-data" element={<PlaceData />} />
                <Route path="travel-agent" element={<TravelAgent />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
