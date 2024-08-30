// import Button from '@mui/material/Button';
// import { IoIosMenu } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { useState } from 'react';


// const Navigation=()=>{

//   const [isOpenSidebarVal,setisopenSidebarVal]=useState(true);

// return(
//   <nav>
//     <div className='container'>
//     <div className='row'>
//       <div className='col-sm-2 navPart1'>
//         <div className='catWrapper'>
//         <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isOpenSidebarVal)}>
//         <span className='icon1'><IoIosMenu/></span>
//           <span className="text">ALL CATEGORIES</span>
//           <span className='icon2'><FaAngleDown /></span>
//         </Button>
//         <div className={`sidebarNav ${isOpenSidebarVal ? 'open' : ''}`}>
//         <ul>
//           <li><Link to='/'><Button>op1</Button></Link></li>
//           <li><Link to='/'><Button>op2</Button></Link></li>
//           <li><Link to='/'><Button>op3</Button></Link></li>
//           <li><Link to='/'><Button>op4</Button></Link></li>
//           <li><Link to='/'><Button>op5</Button></Link></li>
//         </ul>
//         </div>
//         </div>
//       </div>
      
    
//      <div className='col-sm-10 navPart2 d-flex align-items-center'>
//      <ul className='list list-inline ml-auto'>
//       <li className='list-inline-item'>
//         <Link to ="/">HOME</Link></li>
//         <li className='list-inline-item'>
//         <Link to ="/">PRODUCTS</Link></li>
//         <li className='list-inline-item'>
//         <Link to ="/">ABOUT US</Link></li>
//         <li className='list-inline-item'>
//         <Link to ="/">CONTACT US</Link></li>
     
//      </ul>
//     </div>
//     </div>
//     </div>
//     </nav>
// )
// }
// export default Navigation;

import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);
  

  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 navPart1'>
            <div className='catWrapper'>
              <Button 
                className='allCatTab align-items-center' 
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                
              >
                <span className='icon1'><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className='icon2'><FaAngleDown /></span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal ? 'open' : ''}`}>
                <ul>
                  <li><Link to='/'><Button>Glassware</Button></Link></li>
                  <li><Link to='/'><Button>Plasticware</Button></Link></li>
                  <li><Link to='/'><Button>Lab equipments</Button></Link></li>
                  <li><Link to='/'><Button>Medical equipments</Button></Link></li>
                  <li><Link to='/'><Button>Surgical equipments</Button></Link></li>
                  <li><Link to='/'><Button>Emergency equipments</Button></Link></li>
                  <li><Link to='/'><Button>Accessories and Parts</Button></Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className='col-sm-10 navPart2 d-flex align-items-center'>
            <ul className='list list-inline ml-auto'>
            <li className='list-inline-item'>
  <Link to="/">HOME</Link>
</li>
<li className='list-inline-item'>
  <Link to="/AboutUs">ABOUT US</Link> {/* Update to match the correct path */}
</li>
<li className='list-inline-item'>
  <Link to="/Products">PRODUCTS</Link> {/* Update to match the correct path */}
</li>
<li className='list-inline-item'>
  <Link to="/ContactUs">CONTACT US</Link> {/* Update to match the correct path */}
</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
