 
 import "./InventoryDashboard.css";
 import DashboardCard from "../components/common/DashboardCard";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import { api } from "../../config";
import {Button} from '@chakra-ui/react';



 
 const SalesDashboard = () => {
    
    const [maincategory, setMaincategory] = useState([]);
    const [product,setProduct]=useState([]);
    const [order,setOrder]=useState([]);
    useEffect(() => {
           
           

        const getCategory = async () => {

            const result = await axios.get(`${api}/maincategory/get_main_category`);
            setMaincategory(result.data);
            console.log(result.data);
            
        

        }

        const getproduct =async()=>{

            const result=await axios.get(`${api}/product/get_product`);
            setProduct(result.data);

        }

        const getorders =async()=>{

            const result=await axios.get(`${api}/order/getorders`);
            setOrder(result.data);

        }
        getorders();
        getproduct();
        getCategory();


    }, [])

  
     return (
        <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
        <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
           <h6 class="display-6 font-weight-bold text-white">Welcome  to Sales Dashboard..!!</h6>
        </ol>
        </nav>
        
 
        
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
          <DashboardCard bcolor="#00BA3F" cardtext=" Total Products" value={product.length}/>
          <DashboardCard bcolor="#7800D6" cardtext="Pending Orders" value={order.filter(item => item.status === "pending").length}/>
          <DashboardCard bcolor="#289FF4"  cardtext="Net Orders" value={order.length}/>
        
            
           
            
        </div>
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center",gap:"70px" }}>
            
            <DashboardCard bcolor="#AD0000" cardtext="Approved Orders" value={order.filter(item => item.status === "Approved").length}/>
        
          
              
             
              
          </div>
 
        <hr/>
       
       
        <div class="row" style={{justifyContent:"center" }}>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'> Orders</h4>
              </div>
           
        </div>
       
        <a id="more"></a>
        <hr/>

        <div class="row" style={{justifyContent:"center" }}>
            <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="row" className="head" >
              <h5 class="mt-3 mb-3 text-secondary">
               Orders
              </h5>
             <Button colorScheme="blue" size="sm" >view all</Button>
              

              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Total Price</th>
                                <th>Status</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {

order.map((pro)=>{

  return( 
   <tr key={pro.id}>

       <td>{pro.productName}</td>
       <td>{pro.Quantity}</td>
       <td>Rs.{pro.unitPrice}</td>
       { pro.status=="Approved" && ( <><td><Button size="xs" colorScheme="green">Approved</Button></td></>)
              
                
           }

           { pro.status=="pending" && ( <><td><Button size="xs" colorScheme="red">Pending</Button></td></>)
              
                
           }

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
  
 export default SalesDashboard;