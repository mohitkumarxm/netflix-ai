import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Browse from "./Browse";

// const Grocery = lazy(() => import("./components/Grocery"));
const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
