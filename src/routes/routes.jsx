import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateResume from "../pages/CreateResume";
import Resume from "../pages/Resume";


const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-resume" element={<CreateResume />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default routes;
