import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './layout/Navbar';
import Home from './page/Home';
import Adduser from './user/Adduser';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Edituser from './user/Edituser';
import Readuser from './user/Readuser';


function App() {
  return (
    <Router>
       <div className="App">
       <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/adduser' element={<Adduser/>} />
         <Route path='/update/:id' element={<Edituser/>} />
         <Route path='/readuser/:id' element={<Readuser/>} />
      </Routes>
      </div>
    </Router>

    
      
      
    
  );
}

export default App;
