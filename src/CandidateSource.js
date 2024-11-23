import { Button, Card,CardBody, CardHeader, CardText, CardTitle, Container} from "react-bootstrap";
import styles from "./Trafficsource.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Trafficsource from "./Trafficsource";

const CandidateSource=()=>{
const[source,setSource]=useState();
const[candidate,setCandidate]=useState();

 


const navigate=useNavigate();

if(candidate=='Bachelor')
{
    // navigate("/login",{state:{Traffic:"Bachelor"}})
    // console.log("hello");
    return (
    <Trafficsource candidate="Bachelor"/>
    )
}
else if(candidate=='Student')
{
    return (
    <Trafficsource candidate="Student" />
    )
}
else 
{

   

        return (
            <div style={{height:"100%",width:"101%"}}>

               
            {/* <Container> */}
                <Card style={{height:"100vh",textAlign:"center",padding:"4%",backgroundColor:"#e7eaf6"}}>
                <h1 style={{fontSize:"70px",color:"#991b1b",marginBottom:"40px"}}>Start Career with GenAI technology </h1>
                <h1 style={{fontSize:"65px",color:"#ca8a04"}}><u>The NxtGen-project </u></h1>
                <h2 style={{color:"#134e4a"}}>Contribute in open source projects</h2>
                    <Card style={{border:"2px #a2a8d3 solid",height:"500px",width:"60%",marginLeft:"18%",borderRadius:"20px",marginTop:"100px"}}>
                    <h1 style={{marginTop:"2%"}}>PLEASE SELECT</h1>
                    <CardBody style={{width:"50%",marginLeft:"25%",marginTop:"5%"}}>
                    <CardText style={{border:"",width:"100%"}}>
                        <Button className={styles.candidate} onMouseEnter={()=>{setSource("Bachelor")}} onMouseOut={()=>{setSource('')}} onClick={()=>{setCandidate('Bachelor')}}>Bachelor</Button><br/>
                        <Button className={styles.candidate}  onMouseEnter={()=>{setSource("Student")}} onMouseOut={()=>{setSource('')}} onClick={()=>{setCandidate('Student')}}>Student</Button><br/>
                       
                       {/* <br/> <span style={{color:"#f96d00",fontSize:"25px",borderBottom:"1px black solid",width:"200px"}}> {source}</span> */}
                    </CardText>
                
                    </CardBody>
                    </Card>
                </Card>
            {/* </Container> */}
            
            </div>
        )
    }

}

export default CandidateSource;