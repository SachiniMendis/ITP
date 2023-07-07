import React,{useState,useEffect} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";



export default function AddSupplier(){
    const [supplier_id,setId]=useState("");
    const [supplier_name,setName]=useState("");
    const [supplier_companyName,setCompanyName]=useState("");
    const [supplier_address,setAddress]=useState("");
    const [supplier_contactNo,setContactNo]=useState("");
    const [supplier_companyContactNo,setCompanyContactNo]=useState("");
    const [supplier_email,setEmail]=useState("");
    const [supplier_type,setType]=useState("");

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
           
        setId("");
        setName("");
        setCompanyName("");
        setAddress("");
        setContactNo("");
        setCompanyContactNo("");
        setEmail("");
        setType("");
        
    
        const getSupplier=async()=>{
    
            const result=await axios.get(`${api}/supplier/get/${params.id}`);
    
            const item=result.data;

            console.log(result.data)
            
            setId(item.supplier_id);
            setName(item.supplier_name);
            setCompanyName(item.supplier_companyName);
            setAddress(item.supplier_address);
            setContactNo(item.supplier_contactNo);
            setCompanyContactNo(item.supplier_companyContactNo);
            setEmail(item.supplier_email);
            setType(item.supplier_type);

            console.log(supplier_name)
            
    
    console.log(item)
    
    
        }
    
        if(params.id){
            getSupplier();
        }
    
          
    
        
        
    
    
    }, [params.id])

  function sendData(e){
    e.preventDefault();
    
    const supplier=  {
        supplier_id,
        supplier_name,
        supplier_companyName,
        supplier_address,
        supplier_contactNo,
        supplier_companyContactNo,
        supplier_email,
        supplier_type
    }


    if(params.id){

        axios.put(`${api}/supplier/update/${params.id}`,supplier).then(()=>{
   
           toast.success("Supplier is successfully Updated..!!");
           setTimeout(() => {
   
             navigate("/supplier/s_list");
         }, 1000);
   
        }).catch((err)=>{
   
         toast.error("This Supplier cant be updated");
         console.log(err);
    
   
        })
   
     }
     else{


    axios.post("http://localhost:8070/supplier/add_supplier",supplier).then(()=>{
        toast.success('Successfully added!')
       
        setId("");
        setName("");
        setCompanyName("");
        setAddress("");
        setContactNo("");
        setCompanyContactNo("");
        setEmail("");
        setType("");

    }).catch((err)=>{
        toast.error("An error")
})}

}

const validateSupplierNameInput = (event) => {
    const regex = /^[a-zA-Z]+$/;
    const isValid = regex.test(event.target.value);
    if (!isValid) {
      event.target.setCustomValidity('Please enter alphabets only');
    } else {
      event.target.setCustomValidity('');
    }
  }



return(

    <div class="col main pt-5 mt-3">
    
        
             
           
                
    <div  className="head">
        <div>
    <h5 class="display-6 font-weight-bold text-black">{params.id ? "Update Details" : "Add New Supplier"}</h5></div>
    
    </div>
    
    
    
    <hr/>
    
    <div class="m-3" style={{backgroundColor:"#D9D9D9", borderRadius:"25px"}}>
    
    
    <form onSubmit={sendData}  enctype="multipart/form-data">
    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px",marginTop:"10px"}}>
                        <label for="Id" style={{marginTop:"20px"}}>Supplier ID</label>
                        <input type="text"  value={supplier_id} required className="form-control" id="Id" placeholder="Enter Supplier ID" 
                        
                        onChange={(e)=>
                        {
                            setId(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>

    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="name" >Supplier Name</label>
                        <input type="text" value={supplier_name} required className="form-control" id="name" placeholder="Enter Supplier Name" 
                         onInput={validateSupplierNameInput}
                        onChange={(e)=>
                        {
                            setName(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
                    <div className="form-group"   style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="name">Supplier Company Name</label>
                        <input type="text"  value={supplier_companyName} required className="form-control" id="CompanyName" placeholder="Enter Supplier Company Name" 
                        onInput={validateSupplierNameInput}
                        onChange={(e)=>
                        {
                            setCompanyName(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="address">Supplier address</label>
                        <input type="text"  value={supplier_address} required className="form-control" id="address" placeholder="Enter Supplier address"
                        
                        onChange={(e)=>
                        {
                            setAddress(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="name">Supplier Contact Number</label>
                        <input type="text"   value={supplier_contactNo} pattern='[0-9A-Z]{10}' maxLength={10} required className="form-control" id="contactNo" placeholder="Enter Supplier Contact Number" 
                        
                        onChange={(e)=>
                        {
                            setContactNo(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="CompanycontactNo">Supplier Company contactNo</label>
                        <input type="text"  value={supplier_companyContactNo} pattern='[0-9A-Z]{10}' maxLength={10} required className="form-control" id="CompanycontactNo" placeholder="Enter Supplier company contactNo" 
                        
                        onChange={(e)=>
                        {
                            setCompanyContactNo(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="Email">Supplier Email</label>
                        <input type="email"  value={supplier_email} required className="form-control" id="Email" placeholder="Enter Supplier Email" 
                        
                        onChange={(e)=>
                        {
                            setEmail(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="type">Supplier Type</label>
                        <input type="text"  value={supplier_type} required className="form-control" id="type" placeholder="Enter Supplier type" 
                        onInput={validateSupplierNameInput}
                        onChange={(e)=>
                        {
                            setType(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
                    
                    <div class="col-md-12 ">

                    <button type="submit" className="btn btn-primary"  style={{marginRight:"20px",marginLeft:"20px",marginBottom:"20px",marginTop:"20px",backgroundColor:"gold",color:"black"}}>{params.id ? "Update" : "Submit"}</button>
                </div>

                </form>
            </div>
    
    
    
    </div>
    
    
        )
        }
