import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config";
import {toast} from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";


export default function DeleteAccount_cm() {

    const [id,setId]=useState("");
    
    const navigate = useNavigate();

    useEffect (() => {

        
        const customerid=localStorage.getItem('customerid');
        const id=JSON.parse(customerid)
        setId(id)
  
        console.log(id)

    })


    const DeleteCustomer=async()=>{

        
         localStorage.clear();
         navigate("/customer/login")
         

        await axios.delete(`${api}/customer/deleteCustomer/${id}`).then((res)=>{
            console.log(res);
         
        })
 
 
     }
    

    return(
        
            <div className="container">
        <div class="col main pt-5 mt-3">

        <center><h1>DELETE ACCOUNT</h1></center>
            <hr/>
        <br/>
        <h4><center>Confirm Account Deletion</center></h4>
        <br/>
        <div className="container">
       <center> <p>
We're sorry to see you go. Once your account is deleted, all of your content <br/> will be permanently gone, including your profile, purchase history and Order history. <br/> 
If you're not sure about that, we suggest you deactivate or <br/> contact toolhub2343@gmail.com instead. </p></center>
        </div>
            <form enctype="multipart/form-data">

            

                <br/>

        <center><h3>To confirm deletion, type "DELETE" above ! </h3></center>

                <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#FF0000",color:"white"}}>CANCLE</button>

    </div>
    <div class="form-group col-md-6">
    
    <button onClick={DeleteCustomer} type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> CONFIRM DELETE </button>

    </div>
  </div>





            </form>


            </div>
        </div>
        
    )
}