import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Trafficsource from "../Trafficsource";
import axios from "axios";
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "react-bootstrap";
import usernameimg from "../img/username2.png";
import passwordimg from "../img/password.png";
import styles from "./log_reg.module.css";
import { useState } from "react";
import CandidateSource from "../CandidateSource";
// import Login_Authentication from "./Login_Authentication";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login=()=>
{
        const location=useLocation();
        const navigate=useNavigate();
        const TrafficSource=location.state;
       
        const[obj,setObj]=useState([{}]);

        const[UsernameError,setUsernameError]=useState('');
        const[PasswordError,setPasswordError]=useState('');
        const[CredentialError,setCredentialError]=useState('');
        

        const[username,setUsername]=useState('');
        const[password,setPassword]=useState('');
        const[status,setStatus]=useState();

        


        //modals
        const [result, setResult] = useState(false);

        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
 
        function handleSubmit()
        {
            const regix=/^[a-z]+$/;
            const regix2=/^\d+$/;
            if(username.length==0)
           {
               setUsernameError("Enter the Username");
            //    setStatus(false);
              
           }
            else if(regix.test(username))
            {
                setUsernameError("Invalid ! enter the phone number");
                // setStatus(false);
            }
            else if(!regix2.test(username))
            {
                setUsernameError("Invalid ! enter the phone number");
            }
            else if(username.length<10)
            {
                setUsernameError("It must be 10 digit");
                // setStatus(false);
            }
            else
            {
                setUsernameError('')
               
            }
            if(password.length==0)
                {
                    setPasswordError("Enter the Password");
                // setStatus(false);
            }
            else{
                setPasswordError('');
            
            }
               
             if(username.length==10 && regix.test(username)==false && regix2.test(username)==true && password.length>0){
              //  console.log("error");

        //        axios.post("http://localhost:8081/login",
        //         {
        //                 username:Number(username),
        //                 password:password

        //         }
        // ).then((response)=>{
              
        //         if(response.data==true)
        //         {            
        //                setResult(true);
        //          navigate('/Bachelor/Career',{state:username});
                        
        //         }
        //         else if(response.data==false)
        //         {
        //            setResult(false)
        //         handleShow();
                        
        //         }
        // }).catch((err)=>{
        //         console.log(err);
        // })


        var url="https://670b4824ac6860a6c2cba14c.mockapi.io/login/users/"+username;
        axios.get(url).then((response)=>{
                setObj(response.data)
               if(response.data.password==password)
               {
                setResult(true);
                navigate('/Bachelor/CareerPortal',{state:username});
               }
               else
               {
                setResult(false);
                setShow(true)
               }



        }).catch((err)=>{
            console.log(err)
            setResult(false);
            setShow(true)
        })
       
        console.log(obj);

            
              

                }
           
        }
        
            if(TrafficSource==null)
            {
                return (
                    <Navigate to="/" replace />
                )
            }
            else{
                const tr=TrafficSource.Traffic;
                console.log(TrafficSource);
                console.log(tr);
        return (
            <div className={styles.login}>
                
            <Card style={{height:"100vh",textAlign:"center",padding:"10%"}} className={styles.card}>
                <Card style={{border:"2px #a2a8d3 solid",height:"800px",width:"60%",marginLeft:"20%",backgroundColor:"black",opacity:"1"}}>
                <CardHeader style={{letterSpacing:"3px",fontSize:"35px",height:"130px",fontFamily:"",backgroundColor:"#ecb728",paddingTop:"3%",paddingBottom:"3%"}}><span>GRADUATE LOGIN</span></CardHeader>
                <CardBody style={{marginTop:"50px"}}>
                  <label for="username" className={styles.label}><img src={usernameimg} style={{width:"70px",padding:"10px"}}/></label>
                  <input type="text" id="username"  placeholder="Enter Phone Number" maxLength="10" minLength="10"  className={styles.input} onChange={(event)=>{setUsername(event.target.value)}} required/>
                    <br/>
                    {UsernameError.length>0 && <span style={{color:"red",fontSize:"20px"}}>{UsernameError}</span>}
                    <br/>
                    <label for="password" className={styles.label}><img src={passwordimg} style={{width:"70px",padding:"10px"}}/></label> 
                    <input type="password" id="password"  minLength="8" placeholder="Enter Given Password" className={styles.input}  onChange={(event)=>{setPassword(event.target.value)}} required/>
                    <br/>
                    {PasswordError.length>0 && <span style={{color:"red",fontSize:"20px"}}>{PasswordError}</span>}
                    <br/>
                    {CredentialError.length>0 && <><span style={{color:"red",fontSize:"20px"}}>{CredentialError}</span><br/></>}
                    <CardFooter><button type="submit" className={styles.submit} onClick={handleSubmit}>LOGIN</button></CardFooter>
                  
                 
                </CardBody>
               
                </Card>

          
            </Card>  
            
             {result==false &&   
             <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Alert!!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:"25px"}}>
          Invalid Credentials
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        } 

            </div> 
        )
    }
}

export default Login;