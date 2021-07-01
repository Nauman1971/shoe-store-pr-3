import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AirZoom from "./airzoom/AirZoom";
import Home from "./Home";
import MetCon from "./metcon/MetCon";
import NotFound from "./NotFound";
import MetConShoesDescription from "./metcon/MetConShoeDescription";
import MetConShoes from "./metcon/MetConShoes";
import AirZoomShoes from "./airzoom/AirZoomShoes";
import AirZoomShoesDescription from "./airzoom/AirZoomShoesDescription";

const Main = () => {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/men' element={ <MetConShoes /> }/>
          <Route path='/women' element={ <AirZoomShoes /> }/>

          <Route path='/metcon' element={<MetCon />}>
            <Route path="/" element={<MetConShoes />} />
            <Route path=":shoe" element={<MetConShoesDescription />} />
          </Route>
          <Route path='/airzoom' element={<AirZoom />}>
            <Route path="/" element={<AirZoomShoes />} />
            <Route path=":shoe" element={<AirZoomShoesDescription />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    )
}
export default Main;