import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./styles/navbar.module.css";
import logo from "./img/logo4.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import quote from "./img/quote.png"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Topnav() {

  const [service,setService]=useState(false);
  const navigate=useNavigate();
  const location=useLocation();
  const username=location.state;
  const handleService=()=>{
    if(service)
    {
      setService(false);
    }
    else if(!service)
    {
      setService(true);
    }
  }
    const Services=()=>{
      return (
        
      <div style={{opacity:"1",width:"99%",height:"500px",marginLeft:"10px",position:"relative",backgroundColor:"white"}}>
          <span className={styles.dropHeading} style={{backgroundColor:"#FFF2D7"}}>IT-Information Technology</span><br/>
          <hr/>
          <span className={styles.dropList}>IT Consulting</span>
          <span className={styles.dropList}>Managed IT Services</span>
          <span className={styles.dropList}>Technical Support and Helpdesk</span>
          <span className={styles.dropList}>IT Infrastructure</span>
          <span className={styles.dropList}>Web Development</span>
          <span className={styles.dropList}>Database Management</span>
          <span className={styles.dropList}>Artificial Intelligence and Machine Learning</span>
          <span className={styles.dropList}>Training and Development</span>
          <br/>
          <br/>
          <span className={styles.dropHeading} style={{backgroundColor:"#FFF2D7"}}>SALES</span><br/>
          <hr/>
          <span className={styles.dropList}>Sales Strategy Development</span>
          <span className={styles.dropList}>Lead Generation</span>
          <span className={styles.dropList}>Sales Consulting</span>
          <span className={styles.dropList}>Market Research</span>
          <span className={styles.dropList}>Sales Outsourcing</span>
          <span className={styles.dropList}>Customer Feedback and Surveys</span>
          <span className={styles.dropList}>E-commerce Solutions</span>
          <span className={styles.dropList}>Sales Training</span>
          <br/>
          <br/>
          <span className={styles.dropHeading} style={{backgroundColor:"#FFF2D7"}}>JOB PREPRATION</span><br/>
          <hr/>
          <span className={styles.dropList}>Resume and CV Writing</span>
          <span className={styles.dropList}>Aptitude Assessment</span>
          <span className={styles.dropList}>Interview Coaching</span>
          <span className={styles.dropList}>Skills Assessment</span>
          <span className={styles.dropList}>Professional Development Workshops</span>
          <span className={styles.dropList}>Soft Skills Training</span>
  
        </div>
     
    )
    }

    function Crousel() {
      return (
       
         <>
        {/* <div style={{opacity:"0.9",width:"20%",margin:"10px",textAlign:"",height:"260px",position:"sticky",top:"0",float:"left"}}> */}
    
          {/* <img
             width="400px"
             
            style={{position:"relative",bottom:"45px"}}
              src={crousel}
              alt="First slide"
            /> */}
            {/* </div> */}
           
             {/* <Col>
            // </Col> */}
            
            {/* <div style={{width:"80%",backgroundColor:"white",height:"260px"}}> */}
            {/* <img
             width="20%"
             height="20%"
            style={{position:"sticky",marginLeft:"10px",top:"0",float:"left"}}
              src={crousel}
              alt="First slide"
            /> */}
             
            {/* </div> */}
            <div className={styles.quote} >
            {/* <img
             width="20%"
             height="40%"
            style={{position:"absolute",marginLeft:"10px",top:"0",float:"left"}}
              src={crousel}
              alt="First slide"
            /> */}
    <img src={quote} style={{width:"90%"}} /> 
    
  </div> 
  
            </>
          
         
      );
    }

  return (
    <div style={{width:"101%",padding:"0"}}>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary " bg="dark" data-bs-theme="dark" style={{opacity:"0.9",height:"120px"}}>
<img style={{marginLeft:"10px"}}
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            /> <Navbar.Brand className={styles.brand}>{' '}
            <span className={styles.logname}>NxtGen</span><br/>
            <span className={styles.slogan}>Our Opportunity,Your Hardwork</span></Navbar.Brand>
          <Container fluid>
       
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img style={{marginLeft:"10px"}}
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            /> <span className={styles.logname}>NxtGen</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                 
                  {/* <button style={{background:"none",border:"none"}} > <a className={styles.links}>Locations</a></button> */}

                 <button style={{background:"none",border:"none"}} onClick={()=>{navigate("/About",{state:username})}}> <a className={styles.links}>About Us</a></button>
                 
                  
      <button  style={{background:"none",border:"none"}}  className={styles.dropDown} onClick={handleService}>Services</button>
  
       
     
      
                </Nav>
                
                <Button variant="danger" style={{minWidth:"200px",padding:"10px",margin:"10px",fontSize:"25px"}} className={styles.log} onClick={()=>{navigate('/')}}>Log out</Button>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       ))}
       <Crousel/>
          {service && <Services/>}
    </div>
  );
}



export default Topnav;