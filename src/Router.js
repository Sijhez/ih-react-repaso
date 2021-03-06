//importaciones
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import CRUD from "./components/CRUD"
import ForFun from "./components/CRUD/forFun"
import Layout from "./components/Layout";
import Countries from './components/Countries'
import Country from "./components/Country"
//import data from json
import data from './countries.json'
//FUNCIONES
const Router =() =>{
  
    return (
        //ARQUITECTURA DE ROUTING EN REACT
        <>
        
         <BrowserRouter>
          
            <Routes>
                {/* GENERACION DE RUTA PADRE: NESTING ROUTE */}
                <Route path='/' element={<Layout/>}>
                    {/* uso de index pro: usa el path de la ruta padre */}
                    <Route index element={<Home />}/>
                    {/* localhost:3000/crud */}
                    <Route path='crud' element={<CRUD />}/>
                    <Route path='forFun' element={<ForFun/>}/>
                    <Route path='countries' element={<Countries allCountries={data}/>}>
                      <Route path=':id' element={<Country allCountries={data}/>}/>
                    </Route>

              </Route>
          </Routes>
           
        </BrowserRouter>

        </>
    )
}

//Exportacion

export default Router