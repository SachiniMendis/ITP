
import "./SupplierDashboard.css";
import DashboardCard from "../components/common/DashboardCard";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import {Button} from '@chakra-ui/react';




const SupplierDashboard = () => {
   
  const [supProduct, setSupProduct] = useState([]);
   const [supplier,setsuppliers]=useState([]);
   const [product,setProduct]=useState([]);
   useEffect(() => {
          
          

       const getSupProduct = async () => {

           const result = await axios.get(`${api}/supProduct/`);
           setSupProduct(result.data);
           console.log(result.data);
           
       

       }

       const getSupplier =async()=>{

           const result=await axios.get(`${api}/supplier/`);
           setsuppliers(result.data);

       }


       getSupplier();
       getSupProduct();


   }, [])

 
    return (
       <div class="col main pt-5 mt-3">
        
       <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
       <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
          <h6 class="display-6 font-weight-bold text-white">Welcome  to Supplier Management Dashboard..!!</h6>
       </ol>
       </nav>
       <p class="lead d-none d-sm-block">Supplier Records</p>

       
       <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
           
         <DashboardCard bcolor="#0B1145" cardtext="Total Suppliers" value={supplier.length}/>
         <DashboardCard bcolor="#F2C800" cardtext="Total Products" value={supProduct.length}/>
         <DashboardCard bcolor="#0B1145"  cardtext="Total Purchases" value="6"/>
       
           
          
           
       </div>
      

       <hr/>
      
      
       <div class="row" style={{justifyContent:"center" }}>
       <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'>Monthly Transactions Chart</h4>
             </div>
           
           <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
               <h4 className='title mt-3 mb-3 text-center text-secondary'>Daily Transactions Chart</h4>
             </div>
       </div>
      
       <a id="more"></a>
       <hr/>

       <div class="row ">
           <div class="col-lg-6 col-md-6 col-sm-12">
           <div class="row" className="head" >
             <h5 class="mt-3 mb-3 text-secondary">
              Check More Records of Suppliers
             </h5>
            <Button colorScheme="blue" size="sm" >view all</Button>
             

             </div>
               <div class="table-responsive">
                   <table class="table table-striped">
                       <thead class="thead-light">
                           <tr>
                               <th>Supplier ID</th>
                               <th>Supplier Name</th>
                               <th>Supplier Contact No</th>
                               <th>Supplier Email</th>
                               <th>Supplier Type</th>
                             
                           </tr>
                       </thead>
                       <tbody>

                       {

supplier.map((sup)=>{

 return( 
  <tr key={sup.id}>

      <td>{sup.supplier_id}</td>
      <td>{sup.supplier_name}</td>
      <td>{sup.supplier_contactNo}</td>
      <td>{sup.supplier_email}</td>
      <td>{sup.supplier_type}</td>
      

  </tr>)

})

 }
                        
                       </tbody>
                   </table>
               </div>
           </div>
           <div class="col-lg-6 col-md-6 col-sm-12">
               <div class="row" className="head" >
             <h5 class="mt-3 mb-3 text-secondary">
              Check More Records of Products
             </h5>
            <Button colorScheme="blue" size="sm" >view all</Button>
             

             </div>
               <div class="table-responsive">
                   <table class="table table-striped">
                       <thead class="thead-light">
                           <tr>
                               <th>Supplier ID</th>
                               <th>Product Name</th>
                               <th>Price</th>
                              
                           </tr>
                       </thead>
                       <tbody>

                           {
                               supProduct.map((pro)=>{
                              
                                   return(
                                   <tr key={pro._id}>

                                       <td>{pro.supplier_id}</td>
                                       <td>{pro.product_name}</td>
                                       <td>{pro.product_price}</td>

                                    

                                   

                                   </tr>)

                               })
                           }
                     
                       </tbody>
                   </table>
               </div>
           </div>
          
       </div>
      
       <a id="more"></a>
       <hr/>
       
      
     
       

      
      
       

       
     

       
       
       

   </div>
    )
}
 
export default SupplierDashboard;
