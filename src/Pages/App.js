import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'


import Home from './Home'
import NavBar from '../Components/BarNav'


function App() {

  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
