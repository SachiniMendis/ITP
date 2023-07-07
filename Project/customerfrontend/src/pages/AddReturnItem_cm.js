import "./AddReturnItem_cm.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { api } from "../config";
import { useNavigate, useParams } from "react-router-dom";


export default function AddReturnItem_cm(){

    const [customer_name,setCustomer_name]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [order_id,setOrder_id]=useState("");
    const [address,setAddress]=useState("");
    const [reason,setReason]=useState("");
    const navigate = useNavigate();
    const params = useParams();
    const [returnItem,setReturnItem]=useState([]);


    useEffect (() => {

      const customeremail=localStorage.getItem('customeremail');
      const email=JSON.parse(customeremail)
      


      const getReturnItem = async () => {
        const result = await axios.get(`${api}/returnitem/get/${email}`);
        setReturnItem(result.data)
    }
    
    getReturnItem();



    })


    



function sendReturnItemData(e){
  e.preventDefault();

  const returnItem={
     
    customer_name,
    email,
    phone,
    order_id,
    address,
    reason


  }


     
    axios.post(`${api}/returnitem/addReturnItem`,returnItem).then(()=>{

         setCustomer_name("");
         setEmail("");
         setPhone("");
         setOrder_id("");
         setAddress("");
         setReason("");


         toast.success('Return From Successful !!');
         setTimeout(() => {

          
      }, 1000);
    }).catch((err)=>{

      toast.error("Error");
      console.log(err);

    })

     

}





 


    return(
      
      <div className="container">
      <div class="col main pt-5 mt-3">

    
         
       
            


<div className="">
<center><h1>RETURN AN ITEM</h1></center>
<hr/>

<div class="m-3">

<form onSubmit={sendReturnItemData} enctype="multipart/form-data">
<div class="form-group">
  <label for="customer_name">Customer Name</label>
      <input required type="text" value={customer_name} onChange={(event)=>setCustomer_name(event.target.value)}  class="form-control" id="customer_name" />
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input required type="email" value={email} onChange={(event)=>setEmail(event.target.value)}  class="form-control" id="email" />
    </div>

    <div class="form-group col-md-6">
      <label for="phone">Mobile Number</label>
      <input required type="text" value={phone} onChange={(event)=>setPhone(event.target.value)}  class="form-control" id="phone" />
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="address">Address</label>
      <input required type="text" value={address} onChange={(event)=>setAddress(event.target.value)}  class="form-control" id="address" />
    </div>

    <div class="form-group col-md-6">
      <label for="order_id">Order Id</label>
      <input required type="text" value={order_id} onChange={(event)=>setOrder_id(event.target.value)}  class="form-control" id="order_id" />
    </div>
  </div>

  <div class="form-group">
  <label for="reason">Reason</label>
      <input required type="text" value={reason} onChange={(event)=>setReason(event.target.value)}  class="form-control" id="reason" />
  </div>
  



 

  <div>

    <div>

    </div>


  </div>

 

  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#FF0000",color:"white"}}>RESET</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> SUBMIT </button>

    </div>
  </div>

  

</form>

</div>



</div>
</div>


<div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Order Id</th>
                                <th>Reason</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {

returnItem.map((returnItem)=>{

  return( 
   <tr key={returnItem.id}>

       <td>{returnItem.customer_name}</td>
       <td>{returnItem.email}</td>
       <td>{returnItem.order_id}</td>
       <td>{returnItem.reason}</td>

           

   </tr>)

})

  }
                         
                        </tbody>
                    </table>
                </div>






</div>
    )
}
