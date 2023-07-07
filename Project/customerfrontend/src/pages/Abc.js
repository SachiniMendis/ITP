
import { useState,useEffect } from 'react';
import axios from "axios";

function Abc(){
   
    useEffect(()=>{

        const customerid=localStorage.getItem('customerid');
        const id=JSON.parse(customerid)
        console.log(id);

        const getcustomer = async () => {

            const result = await axios.get(`http://localhost:8070/customer/get/${id}`);
            console.log(result.data)
        
    
        }
       
    
    
        getcustomer()
       
    
    
    
      },[])
    

    return (<>
    
    
    </>);
}


export default Abc;