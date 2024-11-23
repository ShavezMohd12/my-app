import { Button, Card,CardBody, CardFooter, CardHeader, CardText, CardTitle, Container} from "react-bootstrap";
import styles from "./Trafficsource.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trafficsource=({candidate})=>{
const[source,setSource]=useState();
const CandidateSource=candidate;
const url="/"+CandidateSource+"/login";
const navigate=useNavigate();
        return (
            <div style={{height:"100%",width:"101%"}}>
            {/* <Container> */}
                <Card style={{height:"100vh",textAlign:"center",padding:"10%",backgroundColor:"#e7eaf6"}}>
                    <Card style={{border:"2px #a2a8d3 solid",height:"800px",width:"60%",marginLeft:"15%",borderRadius:"20px"}}>
                    <h1 style={{marginTop:"2%"}}>How you got to know ? <span style={{color:"#f96d00",fontSize:"25px",width:"200px"}}> {source}</span></h1> 
                    <CardBody style={{width:"50%",marginLeft:"25%"}}>
                    <CardText style={{border:"",width:"100%"}}>
                        <Button className={styles.source} onMouseEnter={()=>{setSource("Naukri.com")}} onMouseOut={()=>{setSource('')}} onClick={()=>{navigate(url,{state:{Traffic:"Naukri.com"}})}}>Naukri.com</Button><br/>
                        <Button className={styles.source}  onMouseEnter={()=>{setSource("Blog")}} onMouseOut={()=>{setSource('')}} onClick={()=>{navigate(url,{state:{Traffic:"Blog"}})}}>Blog</Button><br/>
                        <Button className={styles.source}  onMouseEnter={()=>{setSource("Camplus Placement")}} onMouseOut={()=>{setSource('')}} onClick={()=>{navigate(url,{state:{Traffic:"Campus Placement"}})}}>Campus Placement</Button><br/>
                        <Button className={styles.source} onMouseEnter={()=>{setSource("Other")}} onMouseOut={()=>{setSource('')}} onClick={()=>{navigate(url,{state:{Traffic:"Other"}})}}>Other</Button>
                       
                    </CardText>
                
                    </CardBody>
                    <CardFooter><Button onClick={()=>{navigate(url,{state:{Traffic:"skiped"}})}}><a style={{fontSize:"25px"}}>Skip</a></Button></CardFooter>
                    </Card>
                </Card>
            {/* </Container> */}
            
            </div>
        )


}

export default Trafficsource;