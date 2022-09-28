import { Route, Routes } from "react-router-dom";
import SearchModal from "./components/SearchModal/SearchModal";
import "./index.scss";
import Home from "./pages/Home/Home";
import ProfileSelection from "./pages/ProfileSelection/ProfileSelection";
import { selectSearchModalState } from "./store/slices/globalSlice";
import { useSelector } from "react-redux";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import Changelog from "./pages/Changelog/Changelog";
import Donation from "./pages/Donation/Donation";
import Plugins from "./pages/Plugins/Plugins";
import Settings from "./pages/Settings/Settings";
import Updates from "./pages/Updates/Updates";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  const searchModalState = useSelector(selectSearchModalState);
  return (
    <>
      {searchModalState && <SearchModal />}
      <Routes>
        <Route path="/" exact element={<ProfileSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" exact element={<Library />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/changelog" exact element={<Changelog />} />
        <Route path="/donation" exact element={<Donation />} />
        <Route path="/plugins" exact element={<Plugins />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/updates" exact element={<Updates />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
