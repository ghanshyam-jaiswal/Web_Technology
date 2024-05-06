import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Contact from "./Contact";
import About from "./About";
import Landing from "./Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
                <Route path="/home/login" element={<Login/>}></Route>
                <Route path="/home/signup" element={<Signup/>} />
                <Route path="/home/contact" element={<Contact/>} />
                <Route path="/home/about" element={<About/>} />
          </Route>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
