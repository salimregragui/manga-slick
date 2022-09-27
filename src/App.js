import { Route, Routes } from "react-router-dom";
import SearchModal from "./components/SearchModal/SearchModal";
import "./index.scss";
import Home from "./pages/Home/Home";
import ProfileSelection from "./pages/ProfileSelection/ProfileSelection";
import { selectSearchModalState } from "./store/slices/globalSlice";
import { useSelector } from "react-redux";
import Library from "./pages/Library/Library";

function App() {
  const searchModalState = useSelector(selectSearchModalState);
  return (
    <>
      {searchModalState && <SearchModal />}
      <Routes>
        <Route path="/" exact element={<ProfileSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" exact element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
