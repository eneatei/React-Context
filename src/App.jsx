import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PhotoProvider from "./context/PhotoContext";


const App = () => {
  return (
    <>
    <PhotoProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favoritos" element={<Favorites />}/>
      </Routes>
      </PhotoProvider>
    </>
  );
};
export default App;
