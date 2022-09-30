import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Fruits from "./Fruits";
import Vegetables from "./Vegetables";
import Products from  "./Kiosk";
import Form from "./Form";


function App() {
  return (
   <div>
  <Router>
  <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/fruits" element={<Fruits/>}/>
        <Route path="/vegetables" element={<Vegetables/>}/>
      </Routes>  

 </Router>
     
  </div>  
  );
}

export default App;
