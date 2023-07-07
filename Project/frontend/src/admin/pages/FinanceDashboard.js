import "./InventoryDashboard.css";
import DashboardCard from "../components/common/DashboardCard_fm";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";

import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
 
  TableContainer,
 
} from '@chakra-ui/react'






 
 const FinanceDashboard = () => {


   const [evalue, setValue] = useState([]);
   const [expenses,setExpenses]=useState([]);
   const [totalValue, setTotalValue] = useState(0);
   const [totalIncome, setTotalIncome] = useState(0);
   const [items, setItems] = useState([]);
   const [totalProfit, setTotalProfit] = useState(0);

   const [itemss, setItem] = useState([]);                        
   const [totalPurchase, setTotalPurchase] = useState(0);
   
   
  
   
   
   
   useEffect(() => {
          
  
       const getValue = async () => {

           const result = await axios.get(`${api}/expense/`);
           setValue(result.data);
           console.log(result.data);
           
       

       }

       const getExpense=async()=>{


        const result=await axios.get("http://localhost:8070/expense/");
        setExpenses(result.data);
        console.log(result.data);
        
       
        console.log(expenses);
        
      let sum = 0; // calculate total value
      result.data.forEach((item) => {
        sum += item.evalue;
      });
      setTotalValue(sum);

     
    }
    const getproduct = async () => {
      const result = await axios.get(`${api}/order/getOrders`);
      setItems(result.data);
      console.log(result.data);

      let sum2 = 0; // calculate total value
      result.data.forEach((item) => {
        if (item.status === "Approved") {
          sum2 += item.unitPrice*item.quantity;
        }});setTotalIncome(sum2);

    };

    const getTotal = async () => {                                       
      const result = await axios.get(`${api}/request/`);
      setItem(result.data);
      console.log(result.data);

      let sum = 0; // calculate total value
      result.data.forEach((itemss) => {
         
          sum += itemss.product_price*itemss.qty
          
        });setTotalPurchase(sum);

    };

   // getRequest();
    getTotal();

    

    getExpense();

    getproduct();

       getValue();
       


   }, [])
   useEffect(() => {
    const calculateTotalProfit = () => {
      setTotalProfit(totalIncome - totalValue);
    };

    calculateTotalProfit();
  }, [totalIncome, totalValue]);

  

 
  
     return (
     <div class="col main pt-5 mt-3">
          
          <nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
        <ol class="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"2em"}}>
           <h6 class="display-6 font-weight-bold text-white">-Welcome  to Finance Dashboard-</h6>
        </ol>
        </nav>
        
        <br></br>
        
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>
            
          <DashboardCard bcolor="#289FF4" cardtext="Total Added Expenses"  value={evalue.length}/>
          { <DashboardCard bcolor="#289FF4" cardtext="Total Purchases"  value={`RS: ${totalPurchase}`}/> }
          <DashboardCard bcolor="#289FF4"  cardtext="Total Income" value={`RS: ${totalIncome}`}/>
        
            
           
            
        </div>
        <div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center",gap:"70px" }}>
            
           
            <DashboardCard bcolor="#289FF4" cardtext="Total expenses" value={`RS: ${totalValue}`}/>
            <DashboardCard bcolor="#289FF4" cardtext="Profit / Loss(-)" value={`RS: ${totalIncome - totalValue}`}/>



            
            
          
 
         <div className="admin-layout">
 
 <hr></hr>
 <div style={{height:"150vh"}}>
    <div className="container"  >
    
    
  
   <div style={{width:"100%",marginTop:"100px"}}>

   



    <Table className="table table-hover" style={{ backgroundColor: "" }} variant='striped' colorScheme='gray'>
    <Thead backgroundColor="white" position="sticky" top={0} zIndex="docked">
            <Tr>
                
              <Th scope="col" style={{fontSize:"25px"}}>Date</Th>
              <Th scope="col" style={{fontSize:"25px"}}>Expense name</Th>
              <Th scope="col" style={{fontSize:"25px"}}>Expense value(RS:)</Th>
             
              
            </Tr>
          </Thead>
          <Tbody>
        {
            
            
           expenses.map((item)=>(
           
               
               <Tr>
                    <Td style={{fontSize:"20px"}}>{item.date}</Td>
                    <Td style={{fontSize:"20px"}}>{item.ename}</Td>
                    <Td style={{fontSize:"20px"}}>{item.evalue}</Td>
                   
                </Tr>
               
            ))
        }
        </Tbody>
    </Table>


    


   
 

    </div>
</div>
   </div>
 
         </div>
         
         
         
       
         
         
        
        
        </div>
         
         
  
     </div>



     )
 }
  
 export default FinanceDashboard;