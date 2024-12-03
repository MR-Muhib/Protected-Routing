import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Navbar from "../Layouts/Navbar";
import { useState } from "react";
import Dashboard from "../Pages/Dashboard";
import Errror from "../Pages/Errror";
import Protected from "./Protected";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Navbar />

      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log In</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
      )}

      <Routes>
        <Route element={<Protected isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
