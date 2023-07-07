import React, {useState} from "react";
import axios from "axios";// library used for making HTTP requests to a backend server

export default function UpdateSupplier()
{
    const [supplier_name,setName]=useState("");
    const [supplier_companyName,setCompanyName]=useState("");
    const [supplier_address,setAddress]=useState("");
    const [supplier_contactNo,setContactNo]=useState("");
    const [supplier_companyContactNo,setCompanyContactNo]=useState("");
    const [supplier_email,setEmail]=useState("");
    const [supplier_type,setType]=useState("");
 


    function sendData(e)// called when the user submits the form
    {
        e.preventDefault();//to prevent the normal behaviour of transfering data into another file
        //alert("Insert");

        const updateSupplier=
        {
            supplier_name,
            supplier_companyName,
            supplier_address,
            supplier_contactNo,
            supplier_companyContactNo,
            supplier_email,
            supplier_type
        }

        //console.log(newSupplier);

        //1st para-backend url,2nd created js obj
        axios.post("http://localhost:8070/supplier/update",updateSupplier).then(()=>
        {
            alert("Supplier Updated");
           // setName("");
           // setAddress("");
            //setContactNo("");

        }).catch((err)=>
        {
            alert(err)
        })
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name">Supplier Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Supplier Name" 
                    
                    onChange={(e)=>
                    {
                        setName(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>

                <div className="form-group">
                    <label for="name">Supplier Company Name</label>
                    <input type="text" className="form-control" id="CompanyName" placeholder="Enter Supplier Company Name" 
                    
                    onChange={(e)=>
                    {
                        setCompanyName(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>


                <div className="form-group">
                    <label for="address">Supplier address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Supplier address"
                    
                    onChange={(e)=>
                    {
                        setAddress(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>

                <div className="form-group">
                    <label for="name">Supplier Contact Number</label>
                    <input type="text" className="form-control" id="contactNo" placeholder="Enter Supplier Contact Number" 
                    
                    onChange={(e)=>
                    {
                        setContactNo(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>

                <div className="form-group">
                    <label for="CompanycontactNo">Supplier Company contactNo</label>
                    <input type="text" className="form-control" id="CompanycontactNo" placeholder="Enter Supplier company contactNo" 
                    
                    onChange={(e)=>
                    {
                        setCompanyContactNo(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>

                <div className="form-group">
                    <label for="Email">Supplier Company contactNo</label>
                    <input type="text" className="form-control" id="Email" placeholder="Enter Supplier Email" 
                    
                    onChange={(e)=>
                    {
                        setEmail(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>

                <div className="form-group">
                    <label for="type">Supplier Type</label>
                    <input type="text" className="form-control" id="type" placeholder="Enter Supplier type" 
                    
                    onChange={(e)=>
                    {
                        setType(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                    }}>

                    </input>
                   
                </div>
                
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}