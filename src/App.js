import "./App.css";
import Home from "./Components/Home.js";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup.js";
import Login from "./Components/Login.js";
import Expand from "./Components/Expand.js";
import Images from "./Components/Images.js";
import NoPath from "./Components/NoPath.js";
import Nav from "./Components/Nav.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/images" element={<Images />} />
        <Route path="/expand" element={<Expand />} />
        <Route path="*" element={<NoPath />} />
      </Routes>
    </div>
  );
}
export default App;
