import React,{useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';



export default function AddProduct(){
    const [supplier_id,setSupplierId]=useState("");
    const [product_name,setName]=useState("");
    const [product_description,setDesc]=useState("");
    const [product_price,setPrice]=useState("");
   

  function sendData(e){
    e.preventDefault();
    
    const product=  {
        supplier_id,
        product_name,
        product_description,
        product_price
    }

    axios.post("http://localhost:8070/supProduct/add",product).then(()=>{
        toast.success('Successfully added!')
       
        setSupplierId("");
        setName("");
        setDesc("");
        setPrice("");

        

    }).catch((err)=>{
        toast.error("An error")
})}

const validateProductNameInput = (event) => {
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
    <h5 class="display-6 font-weight-bold text-black">Add New Product</h5></div>
    
    </div>
    
    
    
    <hr/>
    
    <div class="m-3" style={{backgroundColor:"#D9D9D9", borderRadius:"25px"}}>
    
    
    <form onSubmit={sendData}  enctype="multipart/form-data">
    <br></br>

    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="supplierName" style={{marginTop:"20px"}}>Supplier ID</label>
                        <input type="text" value={supplier_id} className="form-control" id="supplierName" placeholder="Enter Supplier Name" 
                        
                        onChange={(e)=>
                        {
                            setSupplierId(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
                    <br></br>
    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="name" >Product Name</label>
                        <input type="text" value={product_name} className="form-control" id="name" placeholder="Enter product Name" 
                         onInput={validateProductNameInput}
                        onChange={(e)=>
                        {
                            setName(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
                    <br></br>
    
                    <div className="form-group"   style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="desc">Product Description</label>
                        <input type="text"  value={product_description} className="form-control" id="desc" placeholder="Enter Product Description" 
                         onInput={validateProductNameInput}
                        onChange={(e)=>
                        {
                            setDesc(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
                    <br></br>
    
    
                    <div className="form-group"  style={{marginRight:"20px",marginLeft:"20px"}}>
                        <label for="Price">Product Price</label>
                        <input type="text"  value={product_price} className="form-control" id="Price" placeholder="Enter Product Price"
                        
                        onChange={(e)=>
                        {
                            setPrice(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                        }}>
    
                        </input>
                       
                    </div>
                    <br></br>
    
                    
                    <div class="col-md-12">

                    <button type="submit" className="btn btn-primary"  style={{marginRight:"20px",marginLeft:"20px",marginBottom:"20px",marginTop:"20px",backgroundColor:"gold",color:"black"}}>Submit</button>
               </div>
                </form>
            </div>
    
    
    
    </div>
    
    
        )
        }
