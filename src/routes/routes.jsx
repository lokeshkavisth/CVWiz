import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/CreateResume";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-resume" element={<Resume />} />
    </Routes>
  );
};

export default routes;
