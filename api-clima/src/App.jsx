import { Weather } from './components/Weather'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { Home } from './components/Home';

function App () {

  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Weather' element={<Weather/>}/>
    </Routes>
    </div>
  )

}
export default App
