import React from 'react';
import Topnav from './Navbar';
import HiringAlert from './HiringAlert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { Route, Routes } from 'react-router-dom';
// import Career from "./Career";
// import About from './About';
import Trafficsource from './Trafficsource';
// import Login from './Login_Registeration/Login';
// import CandidateSource from "./CandidateSource";
import banner from "./img/BANNER.png";
// import My_Progress from './My_Progress';
// import Assessment_Apply from './Assessment_Apply';
//Here we are using LAZY LOADING - IT IS A TECHNIQUE IN WHICH COMPONENT ARE LOADED ONLY WHEN THEY ARE REQUIRED ,MEANS THE COMPONENT WHICH IS NOT REQUIRED ON THE HOME PAGE ARE SEPARATED,THEY ARE ONLY IMPORTED WHEN REQUIRED IT REDUCE THE INITAL TIME REQURED FOR APPLICATION KOAD.
const Assessment_Apply=React.lazy(()=>import('./Assessment_Apply'));
const About=React.lazy(()=>import("./About"))
const Lazy=React.lazy(()=>import('./My_Progress'));
const Career=React.lazy(()=>import("./Career"));
const Login=React.lazy(()=>import("./Login_Registeration/Login"));
const CandidateSource=React.lazy(()=>import("./CandidateSource"))
// const banner=React.lazy(()=>import("./img/BANNER.png"));
function App() {

  var width=window.screen.width;
  console.log(width);

  if(width<=1120)
  {
      return (
        <>
        {/* <h1>helo</h1> */}
        <img src={banner} style={{width:"100%",height:"100vh"}}></img>
        </>
      )
  }
  else{
 
  return (
        <>
 
        

      <Routes>
        <Route path="/" element={<React.Suspense><CandidateSource/></React.Suspense>}/>
        {/* <Route path /> */}
        <Route path="/Bachelor/login" element={<React.Suspense><Login/></React.Suspense>} />
        <Route path="/Bachelor/CareerPortal" element={<React.Suspense><Career/></React.Suspense>}/>
        <Route path="/About" element={<React.Suspense><About/></React.Suspense>}/>
        <Route path="/Bachelor/CareerPortal/Progress" element={<React.Suspense><Lazy/></React.Suspense>} />
        <Route path="/Bachelor/CareerPortal/apply" element={<React.Suspense><Assessment_Apply/></React.Suspense>}/>
        {/* <Route path="/Registration" element={<Registration/>}/> */}
      </Routes>
        
        </>
  )

}
}

export default App;