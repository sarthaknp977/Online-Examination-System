import { Routes, Route } from "react-router-dom";
import HomeStudent from "./Components/HomeStudent";
import NavBar from "./Components/NavBar";
import ViewNotices from "../../CommonComponents/src/Components/ViewNotices";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeStudent />} />
        <Route path="/notices" element={<ViewNotices />} />
        <Route path="/pastPapers" element={<HomeStudent />} />
        <Route path="/schedules" element={<HomeStudent />} />
        <Route path="/student" element={<HomeStudent />} />
        <Route path="/student" element={<HomeStudent />} />
      </Routes>
    </div>
  );
};

export default App;
