
import Topnav from './Navbar';
import HiringAlert from './HiringAlert';

import Footer from "./Footer";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Career()
{
  const navigate=useNavigate();
  const location=useLocation();
  
     
  const username=location.state;
  console.log(username);
  if(username==null)
  {
    
  
     return <Navigate to="/" replace={true}/>
        
      
    
  }
  else{
    return (
        <div >
 
        <Topnav />
      <HiringAlert />
      <Footer/>
      </div>
    )
  }
}
export default Career;