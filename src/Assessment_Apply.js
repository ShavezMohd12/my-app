import { Card, CardBody, CardFooter, CardTitle, Container } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import gpay from "./img/Gpay.png";
import qr from "./img/QRCODE.png";
import { useState } from "react";
import axios from "axios";


const Assessment_Apply=()=>{
        const location=useLocation();
        const username=location.state;
        console.log(username);
        const navigate=useNavigate();
        const[QR,showQR]=useState(false);
        const[TransactionID,setTransactionID]=useState(0);
        const[message,setMessage]=useState(false);
        const[hide,setHide]=useState(false);


        if(username==null)
        {
          return <Navigate to="/" replace/>
        }
        else
        {

        const handleSubmit=()=>
        {
           
          console.log(TransactionID);
           
            if(TransactionID>9999 || TransactionID<1000)
            {
                alert("Enter Last 4 digits");
            }
            if(TransactionID<=9999 && TransactionID>=1000 && TransactionID>0)
            { 
               setHide(true);
                showQR(false);
                 setMessage(true);
                 console.log(username);

                 axios.post("https://670b4824ac6860a6c2cba14c.mockapi.io/login/apply",{
                  username:username,
                  transactionID:Number(TransactionID)
                 }).then((res)=>{

                 }).catch((er)=>{
                  console.log(er);
                 })
            }

        }


    return (
        <div style={{background:"black",height:"100vh"}}>
                <Container>
                    <Card style={{textAlign:"center",height:"auto"}}>
                        <CardTitle><h1>Congratulation!!</h1></CardTitle>
                        <CardTitle style={{fontSize:"25px"}}>You are close to get your dream job</CardTitle><hr/>
                        <CardBody style={{marginTop:"10px"}}>
                           {hide==false && <>   <table style={{width:"50%",textAlign:"center",marginTop:"",border:"2px black solid",marginLeft:"22%"}}>
                                <tr>
                                    <th style={{fontSize:"22px",color:"red",border:"1px black solid"}}>NO. OF ATTEMPTS</th>
                                    <th style={{fontSize:"25px",color:"red"}}>3</th>
                                </tr>
                            </table>
                            <br/>
                            <br/>
                            <div style={{marginTop:"3%"}}>
                        <span style={{fontSize:"20px",marginTop:"15px"}}>** We Charge Minimal Fee To <b>FILTER</b> Out <b>DEDICATED</b> Candidate.</span>
                         <br/>
                            {/* <span style={{color:"red",fontSize:"27px",marginTop:"100px"}}>@ 29 Unlock all 3 attempts free</span> */}
                            <br/>
                            <br/> 

                            {/* <div>
                                {/* PAYMENT GATE WAY */}
                                {/* <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}

  buttonType="subscribe"
  style={{}}
  
/> */}

                            {/* </div>  */}
                           
                            <button style={{width:"fit-content",fontSize:"22px",color:"white",height:"46px",padding:"5px",marginTop:"10px",background:"Black",border:"2px black solid"}} onClick={()=>{showQR(true);setHide(true)}}>Subscribe with <img src={gpay} style={{width:"50px"}} />Pay
                            </button> </div></>}
                            {QR && <div>
                                <span style={{fontSize:"20px"}}>Scan the QR code :</span><br/>
                                <img src={qr} style={{width:"100px"}} />
                                <br/><br/>
                                <h4>After Transaction :</h4>
                                <h3>Enter Correct Last 4 digit of your UPI Transaction ID </h3>
                                <input type="number" onChange={(event)=>{setTransactionID(event.target.value)}}/>
                                <button style={{fontSize:"20px",background:"black",color:"white"}} onClick={handleSubmit}>Submit</button>
                            </div>}
<br/>
                                {message && <> <span style={{color:"green",fontSize:"30px",position:"relative",bottom:"50px"}}>DATA SUBMITTED SUCCESSFULLY!</span>
                                <br/>
                                <h4>**Your Dashboard will be updated within 5 minutes if you had entered correct transaction ID</h4>
                                </>}
<br/>
                        </CardBody>
                        <CardFooter>
                        <button style={{color:"#713f12",border:"1px #713f12 solid",fontSize:"20px",width:"200px",background:"#fde047"}} onClick={()=>{navigate('/Bachelor/CareerPortal',{state:username})}}>BACK</button>

                        </CardFooter>
                    </Card>
                </Container>
        </div>
    )


  }

}

export default Assessment_Apply;