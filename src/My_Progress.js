import ProgressBar from 'react-bootstrap/ProgressBar';
import {Container ,Card} from 'react-bootstrap';
import { useLocation,useNavigate  } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
const My_Progress=()=>
{

    const location=useLocation();
    const username=location.state;
    const navigate=useNavigate();
    const[status,setStatus]=useState("NOT APPLIED");
    const[interview,setInterview]=useState("NOT CONDUCTED");
    const[onboarding,setOnboarding]=useState("NOT DONE");

    const[progress,setProgress]=useState(20);
    const url="https://670b4824ac6860a6c2cba14c.mockapi.io/login/users/"+username;
    console.log(username);
    useEffect(()=>{


            axios.get(url).then((response)=>{
                console.log(response.data.status)

                if(response.data.assessment=="APPLIED")
                    {   setStatus("APPLIED");
                        setProgress(60);
                        if(response.data.interview=="CONDUCTED")
                        {
                            setInterview("CONDUCTED")
                            setProgress(80);
                        }
                        if(response.data.onboarding=="DONE")
                        {
                            setOnboarding("DONE");
                            setProgress(100);
                        }
                    }
                    else if(response.data.assessment=="NOT APPLIED")
                    {
                        setProgress(20);
                    }

            }).catch((er)=>{
                console.log(er);
            })
  
       
    },[])
    return ( 
        <div>

            <button style={{color:"#713f12",border:"1px #713f12 solid",marginTop:"20px",fontSize:"25px",marginBottom:"20px",marginLeft:"48%",width:"200px",background:"#fde047"}} onClick={()=>{navigate('/Bachelor/CareerPortal',{state:username})}}>BACK</button>

            <ProgressBar variant="info" now={progress}  label={progress+"%"} max={100} style={{width:"101%",height:"50px",fontSize:"30px"}} />
            <Card style={{width:"101%",textAlign:"center",height:"89vh",backgroundColor:"black"}}>
               
                <table style={{marginTop:"10%",width:"80%",marginLeft:"10%"}}>
                    <tr >
                            <th colspan="2" ><h1 style={{color:"#ca8a04",borderTop:"1px #d97706 solid",marginRight:"10px",paddingTop:"20px"}}>RESUME SELECTION</h1></th>
                            <th colspan="2" ><h1 style={{color:"#ca8a04",borderTop:"1px #d97706 solid",paddingTop:"20px"}}>APTITUDE ASSESSMENT</h1></th>
                    </tr>
                    
                    <tr >
                    <th style={{padding:"10px",height:"100px",fontSize:"30px",color:"white"}}>STATUS</th>
                        <td ><span style={{width:"200px",border:"2px #1a2e05 solid",padding:"10px",color:"green",fontSize:"25px",borderRadius:"15px"}}>SELECTED</span></td>
                        
                        <th style={{padding:"10px",height:"100px",fontSize:"30px",color:"white"}}>STATUS</th>
                        {status=="APPLIED" && <td><span style={{width:"200px",border:"2px #1a2e05 solid",padding:"10px",color:"green",fontSize:"25px",borderRadius:"15px"}}>APPLIED</span></td>}
                        {status=="NOT APPLIED" && <td><span style={{width:"200px",border:"2px red solid",padding:"15px",color:"red",fontSize:"25px",borderRadius:"15px"}}>NOT APPLIED<button style={{color:"red",border:"2px #1a2e05 solid" ,background:"#4ade80",marginLeft:"10px",borderRadius:"20px",fontSize:"25px",width:"150px"}} onClick={()=>{navigate("/Bachelor/Career/apply",{state:username})}}>Apply</button></span></td>}

                    </tr>
                    <tr>

                    </tr>
                </table>


                <table  style={{marginTop:"10%",width:"80%",marginLeft:"10%"}}>
                    <tr>
                        <th colspan="2"><h1 style={{color:"#ca8a04",borderTop:"1px #d97706 solid",marginRight:"10px",paddingTop:"20px"}}>INTERVIEW DETAIL</h1></th>
                        <th colspan="2"><h1 style={{color:"#ca8a04",borderTop:"1px #d97706 solid",marginRight:"10px",paddingTop:"20px"}}>ONBOARDING DETAIL</h1></th>

                    </tr>
                    <tr>
                    <th style={{padding:"10px",height:"100px",fontSize:"30px",color:"white"}}>STATUS</th>
                    {interview=="CONDUCTED" && <td ><span style={{width:"200px",border:"2px #1a2e05 solid",padding:"10px",color:"green",fontSize:"25px",borderRadius:"15px"}}>CONDUCTED</span></td>}
                    {interview=="NOT CONDUCTED" && <td ><span style={{width:"200px",border:"2px red solid",padding:"10px",color:"red",fontSize:"25px",borderRadius:"15px"}}>NOT CONDUCTED</span></td>}

                        
                    <th style={{padding:"10px",height:"100px",fontSize:"30px",color:"white"}}>STATUS</th>
                    {onboarding=="DONE" && <td ><span style={{width:"200px",border:"2px #1a2e05 solid",padding:"10px",color:"green",fontSize:"25px",borderRadius:"15px"}}>COMPLETED</span></td>}
                    {onboarding=="NOT DONE" && <td ><span style={{width:"200px",border:"2px red solid",padding:"10px",color:"red",fontSize:"25px",borderRadius:"15px"}}>NOT YET</span></td>}

                        
                    </tr>
                </table>
               
            </Card>
        </div>
    )
}

export default My_Progress;