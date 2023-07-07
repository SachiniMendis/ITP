import React,{useState,useEffect} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";






export default function Addexpense(){
  const[date,setDate]=useState("");
  const[ename,setName]=useState("");
  const[evalue,setValue]=useState("");

  const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
           
      setDate("");
      setName("");
      setValue("");
  
             
  
    
  
      const getexpense=async()=>{
  
          const result=await axios.get(`${api}/expense/getexpense/${params.id}`);
  
          const item=result.data;
          
          setDate(item.date);
          setName(item.ename);
          setValue(item.evalue);
  
  console.log(item)
  
  
      }
  
      if(params.id){
          getexpense();
      }
  
        
  
      
      
  
  
  }, [params.id])


  function sendData(e){
    e.preventDefault();
    
    const newExpense = {
        date,
        ename,
        evalue
    }

    if(params.id){

      axios.put(`${api}/expense/update/${params.id}`,newExpense).then(()=>{
 
         toast.success("Expense is successfully Updated..!!");
         setTimeout(() => {
 
           navigate("/finance/allexpense");
       }, 1000);
 
      }).catch((err)=>{
 
       toast.error("This expense cant be updated");
       console.log(err);
  
 
      })
 
   }
   else{
      
     axios.post(`${api}/expense/add`,newExpense).then(()=>{
 
          setDate("");
          setName("");
          setValue("");
         
 
          toast.success('Expense is successfully Added!!');
          setTimeout(() => {
 
          //  navigate("/finance/allexpense");
       }, 1000);
     }).catch((err)=>{
 
       toast.error("This Expense cant be Added");
       console.log(err);
 
     })
 
      
 
   }


  }


    return(
        <div class="col main pt-5 mt-3">
            
            <div style={{height:"78vh"}}>
            
      <div className="d" style={{marginLeft:"15%",marginRight:"15%",backgroundColor:"#D9D9D9",height: "390px",marginTop:"100px"}}>
        <form className= "container" onSubmit={sendData}>
  <div className="mb-3">
    <label for="date" className="form-label" style={{fontSize:"25px"}}>Date:</label>
    <input style={{padding:"25px"}} type="date" className="form-control" id="date"  placeholder="Enter date" value={date} onChange={(e)=>{setDate(e.target.value
        )}} required/>
  </div>
  <div className="mb-3">
    <label for="Ename" className="form-label" style={{fontSize:"25px"}}>Expense name:</label>
    <input style={{padding:"25px"}} type="text" className="form-control" id="name" placeholder="Enter expense name" value={ename} onChange={(e)=>{setName(e.target.value
        )}} required/>
  </div>
  <div className="mb-3">
    <label for="Evalue" className="form-label" style={{fontSize:"25px"}}>Expense value:</label>
    <input style={{padding:"25px"}} type="number" className="form-control" id="val" placeholder="Enter value" value={evalue} onChange={(e)=>{setValue(e.target.value
        )}} required />
  </div>
  <div className="mb-3" style={{textAlign:"right"}}> <button type="submit" className="btn btn-primary" style={{backgroundColor:"gold",color:"black"}}>ADD</button></div>
  
  </form>
</div>
</div>
</div>
    )
  }