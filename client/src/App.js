import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import BreedCreate from './components/BreedCreate';
import BreedDetail from './components/BreedDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
         <Route exact path="/" element={<LandingPage />}></Route>
         <Route exact path="/home" element={<Home />}></Route>
         <Route path="/breed" element={<BreedCreate />}></Route>
         <Route path="/home/:id" element={<BreedDetail />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App