import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';

import CountryDropdown from '../CountryDropdown';
import { IoBagOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
// import { useContext } from 'react';
import React, { useContext } from 'react'; // Ensure useContext is imported
// import { MyContext } from '../../App';

const Header =()=>{
  const context = useContext(MyContext);

  return(
    <>
    <div className="headerWrapper">
    <div className="top-strip bg-blue">
    <div className="container">
      <p className="mb-0 mt-0 text-center">"Here <b>SCIENCE</b> Meets <b>QUALITY"</b></p>
    </div>

    </div>
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoWrapper d-flex align-items-center col-sm-1">
          <Link to={'/'}><img src={Logo} alt='Logo'/></Link>
        
          </div>
          <div className='col-sm-10 d-flex align-items-center part2'>{
          context.countryList.length!==0 &&  
          <CountryDropdown/>
}

          <SearchBox/>


          
          <div className='part3 d-flex align-items-center '>
          <Button className='circle mr-3'><FaUser/></Button>
          <div className='ml-auto cartTab '>
            {/* <span className='price'>$3.22</span> */}
            <Button className='circle ml-2'>< IoBagOutline/></Button>
          </div>

          </div>
        

          </div>
          </div>
        </div>
    </header>



    <Navigation/>

    </div>
    </>
  )
}

export default Header;