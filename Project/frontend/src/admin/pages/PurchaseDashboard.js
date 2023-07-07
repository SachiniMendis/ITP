 
 import "./PurchaseDashboard.css";
 import DashboardCard from "../components/common/DashboardCard";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import { api } from "../../config";
 import {Button} from '@chakra-ui/react';



 
 const PurchaseDashboard = () => {
    
   // const [maincategory, setMaincategory] = useState([]);
    const [request,setRequest]=useState([]);
    useEffect(() => {
           
           

       /* const getCategory = async () => {

            const result = await axios.get(`${api}/maincategory/get_main_category`);
            setMaincategory(result.data);
            console.log(result.data);
            
        

        }*/

        const getRequest =async()=>{

            const result=await axios.get(`${api}/request/`);
            setRequest(result.data);

        }


        getRequest();
        //getCategory();


    }, [])

  
     return (
        <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
        <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
           <h6 class="display-6 font-weight-bold text-white">Welcome  to Purchase Dashboard..!!</h6>
        </ol>
        </nav>
        <p class="lead d-none d-sm-block">Purchase Records</p>
 
        
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
         
            <DashboardCard bcolor="#0B1145" cardtext="Requests" value={request.length}/>
            <DashboardCard bcolor="#F2C800" cardtext="Low stock" value="150"/>
            <DashboardCard bcolor="#0B1145" cardtext="Purchases" value="75"/>
        
        </div>
        
 
        <hr/>
       
       
        <div class="row" style={{justifyContent:"center" }}>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Transaction Chart</h4>
                <img></img>
              </div>
            
            <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                <h4 className='title mt-3 mb-3 text-center text-secondary'>Out of stock Chart</h4>
              </div>
        </div>
       
        <a id="more"></a>
        <hr/>

        
            
            <div class="row" className="head" >
              <h5 class="mt-3 mb-3 text-secondary">
               Check More Records of Purchase Requests
              </h5>
             <Button colorScheme="blue" size="sm" >view all</Button>
              

              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Request ID</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Status</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {

request.map((req)=>{

  return( 
   <tr key={req.id}>

       <td>{req.requestId}</td>
       <td>{req.date}</td>
       <td>{req.des}</td>
       <td>{req.stat}</td>


   </tr>)

})

}
                         
                        </tbody>
                    </table>
                </div>
           
            
           
       
       
        <a id="more"></a>
        <hr/>
        
       
      
        
 
       
       
        
 
        
      
 
        
        
        
 
    </div>
     )
 }
  
 export default PurchaseDashboard;