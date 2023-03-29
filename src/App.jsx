import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import StateWD from "./Component/StateWD"
import Pokemon from "./Component/Pokemon";

const App = () =>
{
    return(
        <>
        
        <BrowserRouter>
         <Routes>
         <Route path='/' element={<StateWD/>}/>
        <Route path='/home' element= {<Pokemon/>}   />
        
      </Routes>
      </BrowserRouter>
    </>
    );
}

export default App;