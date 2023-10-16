import Navbar from "./Navbar";
import TextSlider from "./TextSlider";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <TextSlider />
      <Outlet />
    </>
  );
}

export default App;
