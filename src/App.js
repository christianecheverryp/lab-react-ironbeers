import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import AddBeer from "./pages/AddBeer.jsx"
import Beers from "./pages/Beers"
import RandomBeer from './pages/RandomBeer.jsx'
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/beers' element={<Beers/> } />
          <Route path='/random-beer' element={ <RandomBeer /> } />
          <Route path='/new-beer' element={ <AddBeer/> }/>
          <Route path='/beers/:id' element={ <BeerDetails />} />

        </Routes>

    </div>
  );
}

export default App;
