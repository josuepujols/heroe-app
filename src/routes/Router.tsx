import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Form from "../components/Form/Form";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/add" element={<Form />}></Route>
        <Route path="/update/:id" element={<Form />}></Route>
      </Routes>
    </>
  );
};

export default Router;
