import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'


import Home from './Home'
import Tierra from '../Pages/Tierra'
import NavBar from '../Components/BarNav'


function App() {

  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tierra" element={<Tierra />} />

        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
