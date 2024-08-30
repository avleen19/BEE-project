import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/Aboutus";
import Products from "./Components/Products";



export const MyContext = createContext();
function App() {

 
    const [countryList,setCountryList]= useState([]);

    useEffect(()=>{
      getCountry("https://countriesnow.space/api/v0.1/countries/");
    },[]);

    const getCountry=async(url)=>{
      const responsive= await axios.get(url).then((res)=>{
        setCountryList(res.data.data)
        console.log(res.data.data)
      })
    }
    const values={
      countryList
  }



  return (
      <>
       <MyContext.Provider value={values}>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
      </MyContext.Provider>

   </>
  );
}

export default App;
