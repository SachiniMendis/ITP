import "./ProductAdd_im.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";




function EmployeeAdd_em(){

    const [employee_name,setEmployeeName]=useState("");
    const [employee_id,setEmployeeId]=useState("");
    const [nic_number,setNicNumber]=useState("");
    const [position,setPosition]=useState("");
    const [registered_date,setRegisteredDate]=useState(null);
    const [address,setAddress]=useState("");
    const [mobile_number,setMobileNumber]=useState("");
    const [user_name,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const params = useParams();
    const navigate = useNavigate();



    






   useEffect(() => {
           
    setEmployeeName("");
    setEmployeeId("");
    setNicNumber("");
    setPosition("");
    setRegisteredDate("");
    setAddress("");
    setMobileNumber("");
    setUserName("");
    setPassword("");

           


    const getEmployee=async()=>{

        const result=await axios.get(`${api}/employee/getOneEmployee/${params.id}`);

        const item=result.data;
        
        setEmployeeName(item.employee_name);
        setEmployeeId(item.employee_id);
        setNicNumber(item.nic_number);
        setPosition(item.position);
        setRegisteredDate(item.registered_date);
        setAddress(item.Address);
        setMobileNumber(item.mobile_number);
        setUserName(item.user_name);
        setPassword(item.password);

        console.log(item);
        



    }

    if(params.id){
        getEmployee();
    }

      

    
    


}, [params.id])


  
 
  




function sendEmployeeData(e){
  e.preventDefault();

  const employee={
     
    employee_name,
    employee_id,
    nic_number,
    position,
    registered_date,
    address,
    mobile_number,
    user_name,
    password


  }

  if(params.id){

     axios.put(`${api}/employee/updateEmployee/${params.id}`,employee).then(()=>{

        toast.success("employee is successfully Updated..!!");
        setTimeout(() => {
     
      }, 1000);

     }).catch((err)=>{

      toast.error("This employee cant be updated");
      console.log(err);
 

     })

  }
  else{
     
    axios.post(`${api}/employee/addEmployee`,employee).then(()=>{

        setEmployeeName("");
        setEmployeeId("");
        setNicNumber("");
        setPosition("");
        setRegisteredDate("");
        setAddress("");
        setMobileNumber("");
        setUserName("");
        setPassword("");

         toast.success('employee is successfully Added!!');
         setTimeout(() => {

      }, 1000);
    }).catch((err)=>{

      toast.error("This employee cant be Added");
      console.log(err);

    })

     

  }

}


    return(<>

<div class="col main pt-5 mt-3">

    
         
       
            
<div  className="head">
    <div>
<h5 class="display-6 font-weight-bold text-black">{params.id ? "employee Details Edit" : "employee Details Adding"}</h5></div>

</div>



<hr/>

<div class="m-3">

<form onSubmit={sendEmployeeData} enctype="multipart/form-data">
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputProductCode">Employee Name</label>
      <input type="text" value={employee_name} onChange={(event)=>setEmployeeName(event.target.value)}  class="form-control" id="employee_name" />

      
    </div>
    <div class="form-group col-md-6">
      <label for="inputProductName">Employee ID</label>
      <input type="text" value={employee_id} onChange={(event)=>setEmployeeId(event.target.value)}  class="form-control" id="employee_id" />
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputProductCode">Employee NIC</label>
      <input type="text" value={nic_number} onChange={(event)=>setNicNumber(event.target.value)}  class="form-control" id="nic_number" />

      
    </div>
    <div class="form-group col-md-6">
      <label for="inputProductName">Position</label>
      <input type="text" value={position} onChange={(event)=>setPosition(event.target.value)}  class="form-control" id="position" />
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputProductCode">Registered date</label>
      <input type="date" value={registered_date} onChange={(event)=>setRegisteredDate(event.target.value)}  class="form-control" id="registered_date" />

      
    </div>
    <div class="form-group col-md-6">
      <label for="inputProductName">Mobile Number</label>
      <input type="text" value={mobile_number} onChange={(event)=>setMobileNumber(event.target.value)}  class="form-control" id="mobile_number" />
    </div>
  </div>

  <div class="form-group">
    <label for="productdescription">Address</label>
    <textarea value={address} onChange={(event)=>setAddress(event.target.value)}  class="form-control" id="address" rows="3"></textarea>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputProductCode">User Name</label>
      <input type="text" value={user_name} onChange={(event)=>setUserName(event.target.value)}  class="form-control" id="user_name" />

      
    </div>
    <div class="form-group col-md-6">
      <label for="inputProductName">Password</label>
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}  class="form-control" id="password" />
    </div>
  </div>
  
 
  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#0B1145",color:"white"}}>Reset Details</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#0B1145",color:"white"}}> {params.id ? "Save Change" : "Submit Details"}</button>

    </div>
  </div>

  

</form>

</div>



</div>


    </>)
}

export default EmployeeAdd_em;