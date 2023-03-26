import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Pets from './pages/Pets'
import Owners from "./pages/Owners";

import Dogs from './pages/Dogs'

import Birds from "./pages/Birds";
import Cats from "./pages/Cats";

function App() {
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  return (
    <Router>
      <Header fontColor={fontColor} backgroundColor={backgroundColor} />
      
      <Routes>
        <Route path="/"  element={<Home />}/>
        
        <Route
          path="/cats" element={<Cats />}
        />
        <Route
          path="/dogs" element={<Dogs />}
        />
        
        <Route
          path="/birds" element= {<Birds />}
        
        />
         <Route
          path="/otherpets" element={<Pets />}
        />
         <Route path="/owners" element={ <Owners /> }/>
      </Routes>

      <Footer
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        setFontColor={setFontColor}
        setBackgroundColor={setBackgroundColor}
      />
    </Router>
  );
}

export default App;
