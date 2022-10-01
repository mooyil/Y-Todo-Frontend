import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import App from "./App";
// import Sidebar from "./Components/Sidebar";
// import store from "./features/store";
import SignUp from "./Components/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
     <Routes> 
       <Route path="/" element={<App />}/>  
       <Route path="/signup" element={<SignUp />}/>
       {/* <Route path="/sidebar" element={<Sidebar/>}/> */}
       </Routes> 
    </BrowserRouter>

);

