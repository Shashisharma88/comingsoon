import React from "react"
import  ReactDOM  from "react-dom/client"
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Launch from "./components/Launch";
  const AppLayout = ()=>{
    return(
 
        <>
        <Router>
        <Launch/>
          </Router>
        </>
        
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)