import comp1 from "./img/wipro.jpg";
import comp2 from "./img/Byjus.png";
import comp3 from "./img/deolite.png";
import comp4 from "./img/infosys.png";
import comp5 from "./img/concentrix.png";
import comp6 from "./img/gramerly.png";
import comp7 from "./img/citi.png";
import comp8 from "./img/hdfc.png";



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rahul from "./img/rahul.jpg"
import manager from "./img/manager.jpg";
import img3 from "./img/CustomerSupport.jpg";
import img4 from "./img/img4.png";
import { useState } from 'react';
import styles from "./styles/navbar.module.css"
import crousel from "./img/crouselImg.png"
import hamza from "./img/hamza.png";
import vid from "./video/crousel2.mp4";
import ReactPlayer from 'react-player'

function Footer()
{
        return (
            <footer style={{marginTop:"40px",backgroundColor:"black",textAlign:"center",opacity:"1",paddingTop:"50px",width:"100%"}}>
              <div style={{display:"flex",justifyContent:"center",width:"100%",position:"relative",paddingBottom:"30px"}}> 
 <ReactPlayer  url={vid}   style={{backgroundColor:"white"}} playing={true} muted={true} loop={true} />
 </div> 
<div>
 <h2 style={{color:"white",textDecoration:""}}>Business Partners</h2>
               <img src={comp1} width="120px" style={{margin:"10px",padding:"10px"}}/>
                <img src={comp2} width="120px" style={{margin:"10px",padding:"10px"}} /> 
                <img src={comp3} width="120px"  style={{margin:"10px",padding:"10px"}}/> 
                <img src={comp4} width="120px" style={{margin:"10px",padding:"10px"}} />
               <img src={comp5} width="120px" style={{margin:"10px",padding:"10px"}} /> 
               <img src={comp6} width="120px" style={{margin:"10px",padding:"10px"}} />
                <img src={comp7} width="120px" style={{margin:"10px",padding:"10px"}} />
                <img src={comp8} width="120px" style={{margin:"10px",padding:"10px"}} />
                <br/>
 </div>

            <img
             width="20%"
             height="20%"
          
              src={crousel}
              alt="First slide"
            /> 
                <h3 style={{color:"white"}}>Members</h3>
                <Container>

<Row style={{marginLeft:"60px",marginTop:"10px"}}>
<Col style={{marginTop:"25px"}}>
<Card style={{ width: '16rem',height:"105%",textAlign:"center",height:"105%",marginTop:"10px" }}>
  <img  src={manager} style={{borderRadius:"50%"}}  />
  <Card.Body style={{position:"relative",top:"15%"}}>
    <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>Mr. Rakesh</b></Card.Title>
    <Card.Title style={{}}><b>Founder</b></Card.Title>

    
  </Card.Body>
</Card>
</Col>
<Col style={{marginTop:"25px"}}>
<Card style={{ width: '16rem',textAlign:"center",height:"105%",marginTop:"10px" }}>
  <img  src={img4} style={{borderRadius:"50%",height:"250px",width:"250px"}} />
  <Card.Body>
  <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>MR. Shavez</b></Card.Title>
    <Card.Title><b>Investor</b></Card.Title>
  
   
  </Card.Body>
</Card>
</Col>
<Col style={{marginTop:"25px"}}>
<Card style={{ width: '16rem',height:"105%",textAlign:"center" ,height:"105%",marginTop:"10px" }}>
  <img  src={hamza} style={{borderRadius:"50%",height:"220px",width:"250px"}} />
  <Card.Body style={{position:"relative",top:"8.5%"}}>
  <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>Mr. Hamza</b></Card.Title>
    <Card.Title><b>Partner</b></Card.Title>
   
  </Card.Body>
</Card>
</Col>


</Row>
</Container>
<br/>
<div style={{margin:"25px"}}>
<p style={{color:"white",marginTop:"25px"}}>&#169; NxtGen - open source project</p>
                <p style={{color:"white"}}>Copyright Reserved</p>
               </div>
            </footer>
        )
}

export default Footer;