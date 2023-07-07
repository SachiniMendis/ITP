import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";
import {saveAs} from 'file-saver';

import {Button} from "@chakra-ui/react";
import AsyncSelect from 'react-select/async';
import {toast} from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";
import RequestList from "./RequestList";



 function PurchaseOrder_pm(){
   
   
   const [request,setRequest]=useState([]);
   const [supplierOptions, setsupplierOptions] = useState([]);
   const[inputValue,setValue]=useState('');
   const[selectedValue,setSelectedValue]=useState(null);
   const [selectedSuppliers, setselectedSuppliers] = useState({});
   const [assignedSupplier, setassignedSupplier] = useState({});
   const [unit_price,Setunitprice]=useState(0);
   const [sid,setSid]=useState("");
   const navigate = useNavigate();
   const [itemss, setItem] = useState([]);
   const [totalPurchase, setTotalPurchase] = useState(0);



   useEffect(()=>{
    
    const getTotal = async () => {
      const result = await axios.get(`${api}/request/`);
      setItem(result.data);
      console.log(result.data);

      let sum = 0; // calculate total value
      result.data.forEach((itemss) => {
         
          sum += itemss.product_price*itemss.qty
          
        });setTotalPurchase(sum);

    };
  
    getRequest();
    getTotal();

   }, []);

   

        const getRequest=async()=>{

            const result=await axios.get(`${api}/request/`);
            setRequest(result.data);
            console.log(result.data);
            
        }

     
        const fetchSupplierData = async () => {
            const result = await axios.get(`${api}/supProduct/`);
            const suppliers = result.data;
            const options = suppliers.map((supplier) => ({
              value: supplier._id,
              label: supplier.supplier_id,
            }));
            return options;
          };
          

        //handle selection
        const handleChange = (reqId, supplierId) => {
           

            setSid(supplierId);
          
            console.log(reqId)
            console.log(supplierId)

            axios.get(`${api}/supProduct/get/${supplierId}`).then((response) => {
                const data = response.data;
                
                console.log(data[0].product_price)
                Setunitprice(data[0].product_price)
                console.log(unit_price)

              
              });

             
              
              const sup = {
             
                supplier_id:supplierId,
               product_price:unit_price
            }

            axios.put(`${api}/request/update/${reqId}`,sup).then(()=>{

              
            })


           


           
           
             
           

          };

        //   const handleAssignSupplier = async (reqId) => {
        //     const supplierId = selectedSuppliers[reqId];
        //     if (supplierId) {
        //       const result = await axios.put(`${api}/order/${reqId}`, { supplierId });
        //       if (result.status === 200) {
        //         console.log(`Driver ${supplierId} assigned to order ${reqId}`);
        //       }
        //     }
        //   };
          

        const handleAssignSupplier = async (reqId) => {
            const supplierId = selectedSuppliers[reqId];
            if (supplierId) {
              const result = await axios.put(`${api}/request/${reqId}`, { supplierId });
              if (result.status === 200) {
                console.log(`Supplier ${supplierId} assigned to request ${reqId}`);
                const supplierResult = await axios.get(`${api}/supplier/${supplierId}`);
                if (supplierResult.status === 200) {
                  setassignedSupplier(supplierResult.data);
                }
              }
            }
          };

          const refresh=()=>window.location.reload(true);

          const genaratepdf=async()=>{

            await  axios.post(`${api}/requestreport/createPdf`,request).then((respnse)=>{
                 console.log(respnse)
                 axios.get(`${api}/requestreport/fetchPdf`,{responseType:'blob'}).then((res)=>{
      
                 const pdfBlob=new Blob([res.data],{type:'application/pdf'})
      
                 saveAs(pdfBlob,'purchaserequests.pdf')
      
                 })
            })
            }
      

      

          
          
          
        
    return (
        <div class="col main pt-5 mt-3" >
            <div style={{height:"150vh"}}>
            
            <div  className="head">
            <div>
              <h5 class="display-6 font-weight-bold text-black">Requests</h5></div><div><Button colorScheme="blue" variant='outline' onClick={genaratepdf}>Generate Report</Button></div>
             
            </div>
          <br></br>


            <div style={{width:"100%" ,marginTop:"10px"}}>
            <table class="table table-hover"  style={{backgroundColor:"#D9D9D9"}}>
              <thead>
                  <tr>
              
                        <th scope="col">Order ID</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier Id</th>
                        
                        <th scope="col">Total</th>
                        
              
                  </tr>
              </thead>
              {

                    request.length > 0 &&
                    request.map((per) => (
                    <tr>
                        <td>{per.requestId}</td>
                        <td>{per.date}</td>
                        <td>{per.des}</td>
                        <td>{per.qty}</td>
                        <td>
                        {per.supplier_id}
                        </td>
                        
              
                        {<td>{per.total_price=(per.product_price)*(per.qty)}</td> }
                       
                    </tr>
                    ))














            
            
                //     request.length >0 && request.map((per)=>(
           
                //    <tr>
                    
                //         <td>{per._id}</td>
                //         <td>{per.customerName}</td>
                //         <td>{per.address}</td>
                //         <td>{per.contactNumber}</td>
                //         <td>{per.orderDate}</td>
                //         <td>{}</td>
                //         <td>{per.orderDate}</td>
                //         <td>
                           
                //         <AsyncSelect
                //             cacheOptions
                //             defaultOptions
                //             value={supplierOptions.find((option) => option.value === selectedSuppliers[per._id])}
                //             getOptionLabel={(option) => option.label}
                //             getOptionValue={(option) => option.value}
                //             loadOptions={fetchSupplierData}
                //             onChange={(selectedOption) => handleChange(per._id, selectedOption.value)}
                //             />
                //         </td>


                //         <td><button type="button" class="btn btn-warning " style={{backgroundColor:"gold" ,padding:"1px",marginLeft:"8px"}}  onClick={() => handleAssignSupplier(per._id)} >Assign</button>
                //         <button type="button" class="btn btn-danger" style={{backgroundColor:"#FF0606" ,padding:"1px",marginLeft:"20px"}}>Delete</button></td>
                //   </tr>
               
                //    ))
                }
    
          </table>
          <p style={{ fontSize: "20px" ,textAlign:"right"}}><b>Total Purchase value: {totalPurchase}/=</b></p>


    
                                  

   </div>
 

    </div>

   </div>
    
    
   )
}
 
export default PurchaseOrder_pm;