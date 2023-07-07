 
 import "./InventoryDashboard.css";
 import DashboardCard from "../components/common/DashboardCard";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import { api } from "../../config";
import {Button} from '@chakra-ui/react';
import CustomerMonCard from "../components/common/CusotmerManCard";


export default function CustomerManagerDashboard  () {

    const [customer,setCustomer]=useState([]);
    const [returnItem,setReturnItem]=useState([]);
    

    useEffect(() => {
        const getCustomer = async () => {
            const result = await axios.get(`${api}/customer/`);
            setCustomer(result.data)
        }
        const getReturnItem = async () => {
            const result = await axios.get(`${api}/returnitem/`);
            setReturnItem(result.data)
        }
        getCustomer();
        getReturnItem();
    },[])

    return(

            <div class="col main pt-5 mt-3">

            <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
            <ol class="" style={{backgroundColor:"#0B1145",borderRadius:"2em",padding:"3px"}}>
           <center><h3 class="display-6 font-weight-bold text-white">Customer Manager Dashboard..!!</h3></center>
            </ol>
            </nav>
<br/>
            <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
          <CustomerMonCard bcolor="#D9D9D9"  cardtext="Active Customers" value="3"/>
          <CustomerMonCard bcolor="#D9D9D9" cardtext="Total Customers" value={customer.length}/>
          <CustomerMonCard bcolor="#D9D9D9" cardtext="Return Requests" value={returnItem.length}/>
        
            
           
            
        </div>
<br/>

        <div class="container">
            <div class="row" className="" >
              <h5 class="mt-3 mb-3 text-secondary">
               Return Requests Details
              </h5>
             
              

              </div>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Order Id</th>
                                <th>Reason</th>
                              
                            </tr>
                        </thead>
                        <tbody>

                        {

returnItem.map((returnItem)=>{

  return( 
   <tr key={returnItem.id}>

       <td>{returnItem.customer_name}</td>
       <td>{returnItem.email}</td>
       <td>{returnItem.order_id}</td>
       <td>{returnItem.reason}</td>

           

   </tr>)

})

  }
                         
                        </tbody>
                    </table>
                </div>
            </div>

            </div>

        

    )
}