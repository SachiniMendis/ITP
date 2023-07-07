
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { api } from "../../config";
// import "./ProductList_im.css";
// import {Link} from 'react-router-dom';


// const FinanceReport = () => {
//   const [expenses, setExpenses] = useState([]);
//   const [totalValue, setTotalValue] = useState(0);
//   const [items, setItems] = useState([]);
   
//   const [show,setShow]=useState(false);

//   useEffect(() => {
//     getproduct();
    
//     const getExpense = async () => {
      
//       const result = await axios.get(`${api}/expense/`);
//       setExpenses(result.data);

      
      
//       let sum = 0;                                               calculate total value
//       result.data.forEach((item) => {                            
//         sum += item.evalue;
//       });
//       setTotalValue(sum);
//     };

//     getExpense();

//     const getproduct =async()=>{

//       const result=await axios.get(`${api}/order/getOrders`);
//       setItems(result.data);
//       console.log(result.data);

//   }
//   }, []);

//   return (
    
//       <div class="col main pt-5 mt-3">
//       <div className="admin-layout">
      
//       <table className="table table-hover" style={{ backgroundColor: "" }}>
//         <thead>
//           <tr>
//             <th scope="col" style={{ fontSize: "25px" }}>Date</th>
//             <th scope="col" style={{ fontSize: "25px" }}>Expense name</th>
//             <th scope="col" style={{ fontSize: "25px" }}>Expense value(RS:)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.map((item) => (
//             <tr key={item.id}>
//               <td style={{ fontSize: "19px" }}>{item.date}</td>
//               <td style={{ fontSize: "19px" }}>{item.ename}</td>
//               <td style={{ fontSize: "19px" }}>{item.evalue}</td>
//             </tr>
//           ))}
//           <tr>
//             <td></td>
//             <td></td>
//             <td style={{ fontSize: "20px" }}>Total expense value: {totalValue}</td>
//           </tr>
//         </tbody>
//       </table>


//       <div className="ptable">
  
//     <Table variant='striped' colorScheme='gray'>
//       <Thead backgroundColor="white" position="sticky" top={0} zIndex="docked">
//         <Tr textAlign="center">
//           <Th fontSize="medium" textAlign="center"><b>Customer ID</b></Th>
//           <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
//           <Th fontSize="medium" textAlign="center"><b>quantity</b></Th>
//           <Th fontSize="medium" textAlign="center"><b>Unit Price(Rs)</b></Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {items.length > 0 && items.map((item) => (
//           <Tr>
//             <Td textAlign="center">{item.customerId}</Td>
//             <Td textAlign="center">{item.productName}</Td>
//             <Td textAlign="center">{item.quantity}</Td>
//             <Td textAlign="center">{item.unitPrice}</Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
  
// </div>




//     </div></div>
   
  




//   );
// };

// export default FinanceReport;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from "../../config";
import "./ProductList_im.css";
import { Link } from 'react-router-dom';
import {saveAs} from 'file-saver';
import { Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
 
  TableContainer,
 
} from '@chakra-ui/react'

const FinanceReport = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [items, setItems] = useState([]);
  //const [show, setShow] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0); 

  useEffect(() => {
    const getExpense = async () => {
      const result = await axios.get(`${api}/expense/`);
      setExpenses(result.data);

      let sum = 0; // calculate total value
      result.data.forEach((item) => {
        sum += item.evalue;
      });
      setTotalValue(sum);
    };

    const getproduct = async () => {
      const result = await axios.get(`${api}/order/getOrders`);
      setItems(result.data);
      console.log(result.data);
                                                               //1
      let sum2 = 0; // calculate total value
      result.data.forEach((item) => {
        if (item.status === "Approved") {
          sum2 += item.unitPrice*item.quantity;
        }});setTotalIncome(sum2);

    };
    getExpense();
    getproduct();                                                 //2

    // const interval = setInterval(() => {
      
    //   getExpense();                                 // Refresh data every 30 days
    //   getproduct();
    // }, 30 * 24 * 60 * 60 * 1000);

    
    // return () => clearInterval(interval)             // Clean up the interval on component unmount
   
  }, [])

                                                  //profit
  useEffect(() => {
    const calculateTotalProfit = () => {
      setTotalProfit(totalIncome - totalValue);
    };

    calculateTotalProfit();
  }, [totalIncome, totalValue]);

  return (
    <div className="col main pt-5 mt-3">
      <div className="admin-layout">
        <Table className="table table-hover" style={{ backgroundColor: "" }} variant='striped' colorScheme='gray'>
          <Thead backgroundColor="white" position="sticky" top={0} zIndex="docked">
            <Tr >
              <Th scope="col" style={{ fontSize: "20px" }} textAlign="center">Date</Th>
              <Th scope="col" style={{ fontSize: "20px" }} textAlign="center">Expense name</Th>
              <Th scope="col" style={{ fontSize: "20px" }} textAlign="center">Expense value(RS:)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses.map((item) => (
              <Tr key={item.id}>
                <Td textAlign="center" style={{ fontSize: "19px" }}>{item.date}</Td>
                <Td textAlign="center" style={{ fontSize: "19px" }}>{item.ename}</Td>
                <Td textAlign="center" style={{ fontSize: "19px" }}>{item.evalue}</Td>
              </Tr>
            ))}
            
          </Tbody>
        </Table>
        <hr></hr>
        <hr></hr>
        <hr></hr>

        <div className="ptable">
          <Table variant='striped' colorScheme='gray'>
            <Thead backgroundColor="white" position="sticky" top={0} zIndex="docked">
              <Tr textAlign="center">
                <Th fontSize="medium" textAlign="center"  style={{ fontSize: "20px" }}>Customer ID</Th>
                <Th fontSize="medium" textAlign="center" style={{ fontSize: "20px" }}>Product Name</Th>
                <Th fontSize="medium" textAlign="center" style={{ fontSize: "20px" }}>quantity</Th>
                <Th fontSize="medium" textAlign="center" style={{ fontSize: "20px" }}>Unit Price(Rs)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.length > 0 && items.map((item) => (
                <Tr key={item.id}>
                  { item.status==="Approved" && (<>
                  <Td textAlign="center" style={{ fontSize: "19px" }}>{item.customerId}</Td>
                  <Td textAlign="center" style={{ fontSize: "19px" }}>{item.productName}</Td>
                  <Td textAlign="center" style={{ fontSize: "19px" }}>{item.quantity}</Td>
                  <Td textAlign="center" style={{ fontSize: "19px" }}>{item.unitPrice}</Td></>)}
                  
 
  

                </Tr>
              ))}
             
            </Tbody>
          </Table>
         <br></br><br></br><br></br>
                                                            
         <p style={{ fontSize: "20px" ,textAlign:"right"}}><b>Total income value: {totalIncome}/=</b></p>            
         <p style={{ fontSize: "20px" ,textAlign:"right"}}><b>Total expense value:<span style={{ textDecoration: "underline" }}> {totalValue}</span>/=</b></p>
          <p style={{ fontSize: "20px",textAlign:"right",color:"red"}}><b>Profit/Loss: <span style={{ textDecoration: "underline double" }}>{totalIncome-totalValue}</span>/=</b></p>
          
        </div>
      </div>
    </div>
  );
};

export default FinanceReport;




              



