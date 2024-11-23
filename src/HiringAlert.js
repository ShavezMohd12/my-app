
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
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./styles/navbar.module.css"
import roadmap from "./img/roadmap.png";
import roadmap2 from "./img/roadmap2.png";
import { CardBody, CardFooter } from 'react-bootstrap';
import compareImg from "./img/compare.png";


import quote from "./img/quote.png"

import Ratio from 'react-bootstrap/Ratio';


function HiringAlert() {

  const[ButtonContent,setButtonContent]=useState("Apply for Assesment");
  const[ClickState,setClickState]=useState(false);
  const [open, setOpen] = useState();
  const location=useLocation();
  const username=location.state;
  const navigate=useNavigate();

function Content()
{
  return (
   
    <Container>
     
      <Card style={{ width:"100%" }} >
      <Card.Body>

        <Row>
          <Col>
          <Card style={{ width: '16rem',height:"auto",textAlign:"center"}}>
          
              <Card.Header>
                Frontend Technology
              </Card.Header>
              <Card.Body>
              <ul style={{listStyleType:"none",textAlign:"left",margin:"0",padding:"0"}}>
          <li className={styles.tech}>HTML5</li>
          <li className={styles.tech}>CSS</li>
          <li className={styles.tech}>JAVASCRIPT</li>
        </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '16rem',height:"auto",textAlign:"center"}}>
          
              <Card.Header>
                Frontend Framework
              </Card.Header>
              <Card.Body>
              <ul style={{listStyle:"none",textAlign:"left",margin:"0",padding:"0"}}>
          <li className={styles.tech}>ReactJS</li>
        </ul>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '16rem',height:"auto",textAlign:"center"}}>
          
              <Card.Header>
                Backend Technology
              </Card.Header>
              <Card.Body>
              <ul style={{listStyle:"none",textAlign:"left",margin:"0",padding:"0"}}>
          <li className={styles.tech}>JAVA STANDARD</li>
          <li className={styles.tech}>J2EE</li>
          <li className={styles.tech}>ORM -Object Relationship Mapping</li>
        </ul>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '16rem',height:"auto",textAlign:"center"}}>
          
              <Card.Header>
                Backend Framework
              </Card.Header>
              <Card.Body>
              <ul style={{listStyle:"none",textAlign:"left",margin:"0",padding:"0"}}>
          <li className={styles.tech}>Spring</li>
          <li className={styles.tech}>Spring Core</li>
          <li className={styles.tech}>Hibernate</li>
        </ul>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  
    </Container>

  )
}



function JobPosts()
{
  if(open==1)
  {
    console.log(open);
    return (
      <>
      <div>
      <Card.Text>
        <hr style={{color:"white"}}/>
        <br/>
          <span style={{textDecoration:"underline",fontSize:"30px", fontWeight:"bold",margin:"10px",color:"gold"}}>**Job Title: Junior Java Developer**</span>
         <br/><br/>
         
         
  <span style={{color:"white",textAlign:"left",position:"relative",left:"30px"}}>
    <h4 style={{color:"#c5aa6a"}}><b>Description:</b></h4>
  
    <p style={{color:"#ddd6fe"}}><h5 >We are seeking a motivated Junior Java Developer to join our dynamic team. <br/>
    The ideal candidate will have basic knowledge of Java and a strong enthusiasm for learning and growing in the field. <br/>
    You will work on developing and maintaining software solutions, collaborating with senior developers, and participating in code reviews.</h5></p>
  <br/>
  <h4 ><b>Package:</b></h4>
  <h5 style={{color:"#ddd6fe"}}>4.5 Lpa - 6 Lpa (based on overall performance)</h5>
  <br/>
  <h4 ><b>Responsibilities:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>
  - Assist in the design and development of Java-based applications<br/>
  - Write clean, efficient, and well-documented code<br/>
  - Troubleshoot and debug issues<br/>
  - Collaborate with team members to meet project goals<br/>
  - Stay updated with industry trends and best practices<br/></h5></pre>
  <br/>
  <h4><b>Eligibility:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>- Bachelor’s degree or Undergraduate in Computer Science, Software Engineering, or a Computer related field<br/>
  - Minimum 60% aggregate marks or equivalent GPA<br/>
  - Basic understanding of Java programming<br/>
  - Strong problem-solving skills and a willingness to learn<br/>
  - Good communication and teamwork abilities<br/></h5></pre>
  <br/>
  <h4 ><b>Process:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>1. Resume Selection<br/>
  2. Aptitude Assessment (3 attempts)<br/>
  3. Codility Assessment<br/>
  4. Business Discussion<br/></h5></pre>
  
  <h4 ><b>Roadmap :</b></h4><br/>
  <Container>
  <img src={roadmap} alt="roadmap" style={{height:"700px",width:"90%"}}/>

      </Container>
  <br/>
  If you are passionate about Java and eager to develop your skills, we’d love to hear from you!<br/>

         </span><br/>
      <Button variant="primary" style={{width:"250px",fontSize:"20px",marginBottom:"20px"} } onClick={()=>{navigate("/Bachelor/CareerPortal/apply",{state:username})}}>Apply for Assessment</Button>
      <Button onClick={()=>{setOpen(3)}} variant="danger" style={{width:"150px",fontSize:"20px",marginBottom:"20px",marginLeft:"10px"}}>Hide</Button> 
          </Card.Text>

      </div>
      </>
    )
  }
  else if(open==2)
  {
    console.log(open);
    return (
      <>
      <div>
      <Card.Text>
        <hr style={{color:"white"}}/>
        <br/>
          <span style={{textDecoration:"underline",fontSize:"30px", fontWeight:"bold",margin:"10px",color:"gold"}}>**Job Title: Application Support Engineer**</span>
         <br/><br/>
         
         
  <span style={{color:"white",textAlign:"left",position:"relative",left:"30px"}}>
    <h4 style={{color:"#c5aa6a"}}><b>Description:</b></h4>
  
    <p style={{color:"#ddd6fe"}}><h5 >We are looking for a detail-oriented Application Support Engineer to join our team.<br/>In this role, you will be responsible for ensuring the smooth operation of our applications, providing technical support, and resolving issues as they arise.
       <br/>The ideal candidate will have a strong understanding of application support processes, excellent problem-solving skills, and a customer-focused mindset.</h5></p>
  <br/>
  <h4 ><b>Package:</b></h4>
  <h5 style={{color:"#ddd6fe"}}>3.5Lpa - 4Lpa (based on overall performance)</h5>
  <br/>
  <h4 ><b>Responsibilities:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>
  - Monitor and maintain the performance of applications to ensure optimal functionality<br/>
  - Provide technical support and troubleshoot application issues reported by users<br/>
  - Diagnose and resolve application-related problems, including bugs and performance issues<br/>
  - Collaborate with development teams to identify and implement fixes or enhancements<br/>
  - Create and maintain technical documentation and knowledge base articles<br/>
  - Participate in on-call support rotations and respond to urgent application issues outside of regular hours<br/>
  - Assist in the deployment and configuration of new application releases and updates<br/></h5></pre>
  <br/>
  <h4><b>Eligibility:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>- Bachelor’s degree or Undergraduate<br/>
  - Minimum 60% aggregate marks or equivalent GPA<br/>
  - Basic understanding of Java or other programming languages<br/>
  - Strong problem-solving skills and a willingness to learn<br/>
  - Good communication<br/>
  - Teamwork abilities<br/></h5></pre>
  <br/>
  <h4 ><b>Process:</b></h4>
  <pre style={{color:"#ddd6fe"}}><h5>1. Resume Selection<br/>
  2. Aptitude Assessment (3 attempts)<br/>
  4. Business Discussion<br/></h5></pre>
  
  <h4 ><b>Roadmap :</b></h4><br/>
  <Container>
  <img src={roadmap2} alt="roadmap" style={{height:"700px",width:"90%"}}/>

      </Container>
  <br/>
  If you are passionate about Java and eager to develop your skills, we’d love to hear from you!<br/>

         </span><br/>
         <Button variant="primary" style={{width:"250px",fontSize:"20px",marginBottom:"20px"}} onClick={()=>{navigate("/Bachelor/CareerPortal/apply",{state:username})}}>Apply for Assessment</Button>
       <Button onClick={()=>{setOpen(3)}} variant="danger" style={{width:"150px",fontSize:"20px",marginBottom:"20px",marginLeft:"10px"}}>Hide</Button>        
         
         </Card.Text>

      </div>
      </>
    )
  }
  
//   return (
//     <>
//     <div>
//     <Card.Text>
//         <span style={{textDecoration:"underline",fontSize:"20px", fontWeight:"bold",margin:"10px",color:"white"}}>**Job Title: Junior Java Developer**</span>
//        <br/><br/>
       
       
// <span style={{color:"white",textAlign:"left"}}>
//   <h4 ><b>Description:</b></h4>

//   <pre><h6 >We are seeking a motivated Junior Java Developer to join our dynamic team. The ideal candidate will have basic knowledge of Java and a strong enthusiasm for learning and growing in the field. <br/>You will work on developing and maintaining software solutions, collaborating with senior developers, and participating in code reviews.</h6></pre>
// <br/>
// <h4 ><b>Package:</b></h4>
// <pre>4Lpa to 5Lpa (based on overall performance)</pre>
// <br/>
// <h4 ><b>Responsibilities:</b></h4>
// <pre><h6>
// - Assist in the design and development of Java-based applications<br/>
// - Write clean, efficient, and well-documented code<br/>
// - Troubleshoot and debug issues<br/>
// - Collaborate with team members to meet project goals<br/>
// - Stay updated with industry trends and best practices<br/></h6></pre>
// <br/>
// <h4><b>Eligibility:</b></h4>
// <pre><h6>- Bachelor’s degree in Computer Science, Software Engineering, or a Computer related field<br/>
// - Basic understanding of Java programming<br/>
// - Strong problem-solving skills and a willingness to learn<br/>
// - Good communication and teamwork abilities<br/></h6></pre>
// <br/>
// <h4 ><b>Process:</b></h4>
// <pre><h6>1. Resume Selection<br/>
// 2. Aptitude Assessment<br/>
// 3. Codility Assessment<br/>
// 4. Business Discussion<br/></h6></pre>



// If you are passionate about Java and eager to develop your skills, we’d love to hear from you!
//        </span>
//         </Card.Text>
//     </div>
//     </>
//   )
}

  return (
<div id="top" style={{}}>
    {/* <Container> */}
    {/* <Container>
 <div style={{width:"100%",marginTop:"30px",opacity:"0.9"}}>

 <Card border="dark" style={{ width:"99%",backgroundColor:"black",textAlign:"center",fontSize:"20px" }}
          className="mb-2"
        >
          <Card.Header style={{color:"#94a3b8",backgroundColor:"black",fontSize:"25px",fontFamily:"monospace",border:"1px #94a3b8 solid"}}>Learn Project Technology - Required for Project</Card.Header>
          <Card.Body>
            <Card.Title style={{color:"#94a3b8"}}> <b>JAVA FULL STACK</b> </Card.Title>
            <Card.Text>
        
            </Card.Text>
             <Content/>
          </Card.Body>
        </Card>
 </div>

 </Container> */}
 {/* <div style={{backgroundColor:"white"}}>
  <video  url={vid} width="320" height="240" playing={true} muted={true} >
    <source src={vid} type="video/mp4" />
  </video>
  </div> */}
  {/* <div>
    <img src={quote} />
  </div> */}
  {/* <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
 <ReactPlayer  url={vid}   style={{backgroundColor:"white"}} playing={true} muted={true} loop={true} />
 </div> */}

    <div style={{backgroundColor:"#f0f9ff",height:"250px",width:"101%",textAlign:"center"}}>
      {/* <h1 style={{color:"#a16207",padding:"20px"}}><u>Hiring Progress</u></h1> */}
      <button style={{fontSize:"35px",width:"250px",color:"#075985",backgroundColor:"#f0f9ff",borderRadius:"10px",borderBottom:"3px solid black",marginBottom:"20px",marginTop:"30px"}} onClick={()=>{navigate('/Bachelor/CareerPortal/Progress',{state:username})}}>My Dashboard</button>
     <br/> <button style={{widht:"300px",backgroundColor:"#d9f99d",fontSize:"35px",borderRadius:"10px",padding:"10px"}}>Book Interview Slot</button>
   {/* <br/> <span style={{fontSize:"25px",marginBottom:"20p%",color:"red"}}>Note : You can apply again if failed in all 3 attempts</span> */}
    </div>
      <Row style={{position:"",bottom:"15px"}}>
      <Col >
    <Card className="text-center"   style={{backgroundColor:"black",width:"100%",opacity:"1",padding:"0",margin:"0",paddingBottom:"100px",paddingTop:"0"}}>
      <Card.Header style={{fontSize:"25px",color:"white"}}> <p style={{fontFamily:"HouschkaRoundedAlt-Medium",fontWeight:"800",fontSize:"50px",color:"#f5c856",marginTop:"6%",width:"100%",height:"fit-content",letterSpacing:"5px"}}>NXTGen - Next Generation Project<p style={{color:"rgb(206,274,273)"}}>Contribute in Our open source project</p></p>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
          
            
           
        <Container>
          <Row>
            <Col>
            <Card style={{textAlign:"left",backgroundColor:"#ddd6fe"}} >
            <CardBody>
           <h4 style={{fontSize:"25px"}}><b> Junior Java Developer</b></h4>
            <h3></h3>
            <p>Click Below to know the details and Roadmap</p>
            <Button onClick={()=>{setOpen(1)}} variant="warning" style={{width:"250px",fontSize:"20px",marginBottom:"20px"}}>Know More & Apply</Button>
             </CardBody>
            </Card>
            </Col>
           
            <Col> 
            <Card style={{textAlign:"left",backgroundColor:"#ddd6fe"}} >
            <CardBody>
           <h4 style={{fontSize:"23px"}}><b>Application Support Engineer</b></h4>
           <p>Click Below to know the details and Roadmap</p>
          
            <Button onClick={()=>{setOpen(2)}} variant="warning" style={{width:"250px",fontSize:"20px",marginBottom:"20px"}}>Know More  & Apply</Button>
             </CardBody>
            </Card>
            </Col>
          </Row>
          
       </Container>
      {(open==1 || open==2)?<JobPosts/>:<></>}
      
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </Col>
   
    </Row>

 {/* </Container> */}
 
  {/* Comparing Company */}
 <div style={{width:"100%",backgroundColor:"black",border:"5px black solid",padding:"20px"}}>
  <Card style={{width:"80%",textAlign:"center",border:"none",marginLeft:"17%",backgroundColor:"black"}}>
    <img src={compareImg} style={{width:"80%",height:"100%"}}/>
    
    </Card>
    <Button variant='success' style={{position:"relative",left:"43%",width:"fit-content",fontSize:"25px",marginTop:"50px"}} className={styles.apply}  onMouseOut={()=>{setButtonContent("Apply For Assessment")}} onClick={()=>{navigate("/Bachelor/CareerPortal/apply",{state:username})}}>{ButtonContent}</Button>
 </div>
 {/* <Container>
 <div style={{width:"100%",marginTop:"30px",opacity:"0.9"}}>

 <Card border="dark" style={{ width:"99%",backgroundColor:"black",textAlign:"center",fontSize:"20px" }}
          className="mb-2"
        >
          <Card.Header style={{color:"#94a3b8",backgroundColor:"black",fontSize:"25px",fontFamily:"monospace",border:"1px #94a3b8 solid"}}>Learn Project Technology - Required for Project</Card.Header>
          <Card.Body>
            <Card.Title style={{color:"#94a3b8"}}> <b>JAVA FULL STACK</b> </Card.Title>
            <Card.Text>
        
            </Card.Text>
             <Content/>
          </Card.Body>
        </Card>
 </div>

 </Container> */}



    {/* <Container>

    <Row style={{marginLeft:"60px",marginTop:"10px"}}>
    <Col style={{marginTop:"10px"}}>
    <Card style={{ width: '16rem',height:"100%",textAlign:"center"}}>
      <img  src={manager} style={{borderRadius:"50%",marginTop:"30px"}}  />
      <Card.Body style={{position:"relative",top:"10%"}}>
        <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>Mr. Rakesh</b></Card.Title>
        <Card.Title style={{}}><b>Founder</b></Card.Title>
    
        
      </Card.Body>
    </Card>
    </Col>
    <Col style={{marginTop:"10px"}}>
    <Card style={{ width: '16rem',textAlign:"center",height:"100%" }}>
      <img  src={img4} style={{borderRadius:"50%",height:"260px",width:"250px"}} />
      <Card.Body>
      <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>MR. Shavez</b></Card.Title>
        <Card.Title><b>Investor</b></Card.Title>
      
       
      </Card.Body>
    </Card>
    </Col>
    <Col style={{marginTop:"10px"}}>
    <Card style={{ width: '16rem',height:"100%",textAlign:"center" }}>
      <img  src={rahul} style={{borderRadius:"50%",height:"260px",width:"250px"}} />
      <Card.Body>
      <Card.Title style={{textDecoration:"underline",backgroundColor:"#fef08a",position:"relative",top:""}}><b>Mr. Rohan</b></Card.Title>
        <Card.Title><b>Partner</b></Card.Title>
       
      </Card.Body>
    </Card>
    </Col>
    

    </Row>
    </Container> */}

    </div>
  );
}

export default HiringAlert;