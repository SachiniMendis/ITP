import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import { Button } from "@chakra-ui/react";
import {saveAs} from 'file-saver';



export default function ReturnItemList_cm(){

    const [returnItem,setReturnItem]=useState([]);
    

    useEffect(() => {
    
        const getReturnItem = async () => {
            const result = await axios.get(`${api}/returnitem/`);
            setReturnItem(result.data)
        }
       
        getReturnItem();
    },[])


    const genaratepdf=async()=>{

        await  axios.post(`${api}/returnItemReport/createPdf`,returnItem).then((respnse)=>{
             console.log(respnse)
             axios.get(`${api}/returnItemReport/fetchPdf`,{responseType:'blob'}).then((res)=>{
  
             const pdfBlob=new Blob([res.data],{type:'application/pdf'})
  
             saveAs(pdfBlob,'return_item_list.pdf')
  
             })
        })
      }


    return(

        
        <div class="container">
            <div class="col main pt-5 mt-3">
                <br/>
            <div><Button onClick={genaratepdf} colorScheme="blue" variant='outline'>Genarate Report</Button></div>
            <br/>
            <div class="row" className="" >
              <h5 class="mt-3 mb-3 text-secondary">
               Return Requests Details
              </h5>
              <br/>
             
              

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