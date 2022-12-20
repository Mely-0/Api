import { Weather } from './components/Weather'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { ApiDivisas } from './components/apiDivisas';

function App () {

  return (
    <div className="App">
      <Nav/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Weather' element={<Weather/>}/>
    <Route path='/apiDivisas' element={<ApiDivisas/>}/>
    </Routes>
    </div>
  )

}
export default App
