

import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";
import {DeleteIcon, EditIcon,ViewIcon} from '@chakra-ui/icons';
import {Modal} from 'react-bootstrap';
import {toast} from 'react-hot-toast'
import {Link} from 'react-router-dom';

import { Button } from "@chakra-ui/react";
import {saveAs} from 'file-saver';
import "./SupplierList_sm.css";


 function SupplierList(){
   
   
   //const [expenses,setExpenses]=useState([]);
   const [suppliers, setsuppliers] = useState([]);
   const [e_deleteId,seteDeleteId]=useState("");
   const [show,setShow]=useState(false);


   useEffect(()=>{
    
    const getSupplier=async()=>{


        const result=await axios.get("http://localhost:8070/supplier/");
        setsuppliers(result.data);
        console.log(result.data)
        
       
        console.log(suppliers);
    }

    getSupplier();

   }, []);

   const getSupplier=async()=>{

    const result=await axios.get(`${api}/supplier/`);
    setsuppliers(result.data);
    console.log(result.data);

}



const handleDeleteSupplier=async()=>{

  await axios.delete(`${api}/supplier/delete/${e_deleteId}`).then((res)=>{

   console.log(res);
   
   setShow(false)
   getSupplier();
   toast.success('Successfully Deleted!')
  })


}

const handleClose=()=>{
  setShow(false)
}

const handledelete=(_id)=>{
  seteDeleteId(_id)
  setShow(true)
  console.log(_id);

}

   const controlsearch=async(event)=>{

    let s_key=event.target.value;
    if(s_key){
       const result=await axios.get(`${api}/supplier/search_supplier/${s_key}`);
       setsuppliers(result.data);
    }
    else{
        getSupplier();
    }



  


    


}

const genaratepdf=async()=>{

  await  axios.post(`${api}/supplierReport/createPdf`,suppliers).then((respnse)=>{
       console.log(respnse)
       axios.get(`${api}/supplierReport/fetchPdf`,{responseType:'blob'}).then((res)=>{

       const pdfBlob=new Blob([res.data],{type:'application/pdf'})

       saveAs(pdfBlob,'supplierlist.pdf')

       })
      })
      }

    return(
        <div class="col main pt-5 mt-3" >
            <div style={{height:"150vh"}}>
    <div className="container" >
    <div  className="head" >
    <div>
    <h5 class="display-6 font-weight-bold text-black">Supplier List</h5></div> <div><Button colorScheme="blue" variant='outline' onClick={genaratepdf}>Generate Report</Button></div>
    
    </div>  
    <br></br>
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search for Suppliers" aria-label="Search" aria-describedby="search-addon" onChange={controlsearch} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>



<div className="ptable">

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
 <Modal.Title>Confirm deletion</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure delete this data?</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleDeleteSupplier}> OK</Button>
 <Button colorScheme="red" onClick={handleClose}>Cancel</Button>
</Modal.Footer>
</Modal>



   <div style={{width:"100%",marginTop:"10px",}}>
    <table class="table table-hover"  style={{backgroundColor:"#D9D9D9",width:"100%"}}>
    <thead>
            <tr>
                
              <th scope="col">Supplier <br></br>ID</th>
              <th scope="col">Supplier <br></br>Name</th>
              <th scope="col">Supplier <br></br>Company Name</th>
              <th scope="col">Supplier <br></br>Address</th>
              <th scope="col">Supplier <br></br>Contact Number</th>
              <th scope="col">Company<br></br> Contact Number</th>
              <th scope="col">Supplier <br></br>Email</th>
              <th scope="col"> Supplier <br></br>Type</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
        {
            
            
            suppliers.map((item)=>(
           
               
               <tr>
                    <td  >{item.supplier_id}</td>
                    <td  >{item.supplier_name}</td>
                    <td >{item.supplier_companyName}</td>
                    <td>{item.supplier_address}</td>
                    <td >{item.supplier_contactNo}</td>
                    <td >{item.supplier_companyContactNo}</td>
                    <td >{item.supplier_email}</td>
                    <td >{item.supplier_type}</td>
                    <td textAlign="center"><div className="actionitem"><ViewIcon boxSize={5}/><Link to={`/supplier/add_supplier/${item._id}`}><EditIcon color="blue.500" boxSize={5}/></Link ><DeleteIcon onClick={()=>handledelete(item._id)}   color="red.500" boxSize={5}/></div></td>

                </tr>
               
            ))
        }
    </table>


    


   </div>
 

    </div>

   </div>
    </div>
    </div>
   )
      }
export default SupplierList;
