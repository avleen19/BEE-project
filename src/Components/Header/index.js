import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FaUser } from "react-icons/fa";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import React, { useContext } from 'react'; 
import AddToCartButton from '../AddToCartButton'; 

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
          <Link to="/signUp">
          <Button className='circle mr-3'><FaUser /></Button>
          </Link>
                  <div className='ml-auto cartTab'>
                    <AddToCartButton />
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