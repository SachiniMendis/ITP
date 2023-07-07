
import { Button } from "@chakra-ui/react";

import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AdminLogin.css";
import { api } from "../../config";
import toast from "react-hot-toast";


function AdminLogin() {
 
     const [user_name,setUsername]=useState("")
     const [password,setPassword]=useState("")
     const navigate = useNavigate();

     useEffect(()=>{

      const auth=localStorage.getItem('admin');
     
     })

     
     const handleLogin=async()=>{
      let result=await fetch(`${api}/admin/adminlogin`,{

        method:'post',
        body:JSON.stringify({user_name,password}),
        headers:{
          'Content-Type':'application/json'
        }

      });

      result=await result.json();
      console.warn(result)
       
      if(result.user_name){

        localStorage.setItem("admin",JSON.stringify(result))

           if(result.position==="Customer Manager"){

            navigate("/customer_man");

           }
           else if(result.position==="Delivery Manager"){

            navigate("/delivery");

           }
           else if(result.position==="Financial Manager"){

            navigate("/finance");

           }
           else if(result.position==="Inventory Manager"){

            navigate("/inventory");

           }
           else if(result.position==="Supplier Manager"){

            navigate("/supplier");

           }
           else if(result.position==="Purchase Manager"){
            
            navigate("/request");

           }
           else if(result.position==="Hr Manager"){
            
            navigate("/employee");

           }
           else if(result.position==="Sales Manager"){

            navigate("/sales");


           }
      }
      else{

        toast.error(result.result)


      }


     }


 

  return (
    <div className="center-div" >
    
      
      <form className="login-container">
        <h2>Admin Login</h2>


        {/* <FormInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}

     <FormControl>
      <FormLabel>User Name</FormLabel>
      <Input type="text"  value={user_name} onChange={(e)=>{setUsername(e.target.value)}} width="100%" />
    </FormControl>
        {/* <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}

   <FormControl>
      <FormLabel>Password</FormLabel>
      <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  width="100%" />
    </FormControl>

    <Button colorScheme="blue" onClick={handleLogin}>
      Submit
    </Button>
        {/* <SubmitButton text="Submit" onClick={handleSubmit} /> */}
      </form>
    </div>
  );
}

export default AdminLogin;
