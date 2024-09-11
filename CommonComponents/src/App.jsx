import Login from "./Components/Login";
import Register from "./Components/Register";
import HomeTeacher from "../../Teacher/src/Components/HomeTeacher";
import HomeStudent from "../../Student/src/Components/HomeStudent";
import HomeAdmin from "../../Admin/src/Components/HomeAdmin";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/student" element={<HomeStudent />} />
        <Route path="/teacher" element={<HomeTeacher />} />
      </Routes>
    </div>
  );
};

export default App;
