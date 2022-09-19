import './App.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import BreedCreate from './components/BreedCreate';
import BreedDetail from './components/BreedDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
         <Route exact path="/" element={<Home />}></Route>
         <Route path="/breed" element={<BreedCreate />}></Route>
         <Route path="/:id" element={<BreedDetail />}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  )
}

export default App