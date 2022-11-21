import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BreweryDetails from './components/BreweryDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/brewery-details/:id' element={<BreweryDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
