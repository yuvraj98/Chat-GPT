
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Navbar from './components/common/Navbar'
import {Routes, Route} from "react-router-dom"

function App() {
  return (
   <div className=" flex min-h-screen w-screen flex-col bg-richblack-900 font-inter check">
    
    <Routes>
      <Route path="/" element = {<Home></Home>}></Route>
    </Routes>
    
   </div>
  );
}

export default App;
