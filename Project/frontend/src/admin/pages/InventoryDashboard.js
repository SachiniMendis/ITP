 
 import "./InventoryDashboard.css";
 import Dashboardcard_im from "../components/common/Dashboardcard_im";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import { api } from "../../config";
import {Button} from '@chakra-ui/react';



 
 const InventoryDashboard = () => {
    
    const [maincategory, setMaincategory] = useState([]);
    const [product,setProduct]=useState([]);
    const [count,setCount]=useState("");
    const [count1,setCount1]=useState("");
    const [totalIncome, setTotalIncome] = useState(0);

    
    useEffect(() => {
           
           

        const getCategory = async () => {

            const result = await axios.get(`${api}/maincategory/get_main_category`);
            setMaincategory(result.data);
            console.log(result.data);
            
            

        }

        const getproduct =async()=>{

            const result=await axios.get(`${api}/product/get_product`);
            setProduct(result.data);
             
            let sum = 0; // calculate total value
            result.data.forEach((item) => {
              sum += (item.unit_price)*(item.stock);
            });
            setTotalIncome(sum);

        }

        const getoutofstock=()=>{

            const countZeroStock = product.filter(item => item.stock === 0).length;
            
            setCount(countZeroStock)

        }
        const getlowstock=()=>{

            const countLowStock = product.filter(item => item.stock <10).length;
        
            setCount1(countLowStock)

        }


        getproduct();
        getCategory();
        getoutofstock();
        getlowstock();
      
       

       
        



    }, [])

  
     return (
        <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
        <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
           <h6 class="display-6 font-weight-bold text-white">Welcome  to Inventory Dashboard..!!</h6>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Inventory Records</p>

       
 
        
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
          <Dashboardcard_im bcolor="#00BA3F" cardtext="Total Products" value={product.length}/>
          <Dashboardcard_im bcolor="#7800D6" cardtext="Total Store Value(Rs)" value={totalIncome}/>
          <Dashboardcard_im bcolor="#289FF4"  cardtext="All Categories" value={maincategory.length}/>
        
            
           
            
        </div>
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center",gap:"70px" }}>
            
            <Dashboardcard_im bcolor="#AD0000" cardtext="Out of Stock" value={product.filter(item => item.stock === 0).length}/>
            <Dashboardcard_im bcolor="#F21D1D" cardtext="Low Stock" value={product.filter(item => item.stock <10).length}/>
            <Dashboardcard_im bcolor="#F21D1D" cardtext="Expired Stock" value="5"/>
          
              
             
              
          </div>
 
        <hr/>
       
       
        <div class="row" style={{justifyContent:"center" }}>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Inventory Chart</h4>
              </div>
            
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Inventory Chart</h4>
              </div>
        </div>
       
        <a id="more"></a>
        <hr/>

        <div class="row ">
            <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="row" className="head" >
              <h5 class="mt-3 mb-3 text-secondary">
               Recent added product List
              </h5>
             <Button colorScheme="blue" size="sm" >view all</Button>
              

              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Product Code</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Status</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {

product.map((pro)=>{

  return( 
   <tr key={pro.id}>

       <td>{pro.product_code}</td>
       <td>{pro.product_name}</td>
       <td>Rs.{pro.unit_price}</td>
       { pro.status==true && ( <><td><Button size="xs" colorScheme="green">Active</Button></td></>)
              
                
           }

           { pro.status==false && ( <><td><Button size="xs" colorScheme="red">Inactive</Button></td></>)
              
                
           }

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
               Recent Added Category List
              </h5>
             <Button colorScheme="blue" size="sm" >view all</Button>
              

              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Category Code</th>
                                <th>Category Name</th>
                                <th>Status</th>
                               
                            </tr>
                        </thead>
                        <tbody>

                            {
                                maincategory.map((cat)=>{
                               
                                    return(
                                    <tr key={cat._id}>

                                        <td>{cat.main_category_code}</td>
                                        <td>{cat.main_category_name}</td>

                                     

                                    { cat.status==true && ( <><td><Button size="xs" colorScheme="green">Active</Button></td></>)
                                       
                                         
                                    }

                                    { cat.status==false && ( <><td><Button size="xs" colorScheme="red">Inactive</Button></td></>)
                                       
                                         
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
  
 export default InventoryDashboard;