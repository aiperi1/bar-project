import React from "react";
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import IngrDetail from "./components/Ingredient/IngrDetail";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/detail/:id'} element={<Detail/>}/>
      <Route path={'/ingredient/:name'} element={<IngrDetail/>}/>
    </Routes>
  );
}

export default App;
