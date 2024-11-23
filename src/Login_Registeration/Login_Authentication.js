import axios from "axios";
import React, { useEffect, useState } from "react";
function Login_Authentication(Username,Password)
{
        var status="";
        const[obj,setObj]=useState({});
        console.log("login authentication");
       
                // axios.post("http://localhost:8081/login",
                //         {
                //                 username:Number(Username),
                //                 password:Password

                //         }
                // ).then((response)=>{
                      
                //         if(response.data==true)
                //         {            
                //                 // console.log("true");  
                //                 return true;
                                
                //         }
                //         else if(response.data==false)
                //         {
                //                 // console.log("false");
                //                 return false;
                //         }
                // }).catch((err)=>{
                //         console.log(err);
                // })

        var url="https://670b4824ac6860a6c2cba14c.mockapi.io/login/users";
                axios.get(url).then((response)=>{
                        // setObj(response.data)
                        console.log(response);
                }).catch((err)=>{console.log(err)})

                console.log(obj);

                console.log(status);
                // return status;
        

       
}
export default Login_Authentication;