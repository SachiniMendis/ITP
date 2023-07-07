
import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";

import {Button} from "@chakra-ui/react";
import AsyncSelect from 'react-select/async';
import {toast} from 'react-hot-toast';


 function OrderList(){
   
   let[driverId,setDriverId]=useState([])
   const [orders,setOrder]=useState([]);
   const [driverOptions, setDriverOptions] = useState([]);
   const [selectedDrivers, setSelectedDrivers] = useState({});



   useEffect(()=>{
    
    
  
    getOrder();

   }, []);

        const getOrder=async()=>{

            const result=await axios.get(`${api}/order/getOrders`);
            setOrder(result.data);
            console.log(result.data);
            
        }

     
        const fetchDriverData = async () => {
            const result = await axios.get(`${api}/driver/`);
            const drivers = result.data;
            const options = drivers.map((driver) => ({
              value: driver._id,
              label: driver.Drivername,
            }));
            return options;
          };
          

        //handle selection
        const handleChange = (orderId, driverId) => {
        
          console.log(orderId)
            setSelectedDrivers((prevState) => ({
              ...prevState,
              [orderId]: driverId,
            }));
          };

       
        
        const UpdateStatus=(id,Drivername)=>{
          console.log(id);
          console.log(Drivername);
          const ok={
              driverName:Drivername
          }
         
          axios.put(`${api}/order/UpdateStatus/${id}`,ok).then((response)=>{
      
              const { Drivername } = response.data;
              toast.success(`Status Updated. Driver name: ${Drivername}`);
              getOrder();
              setTimeout(() => {
            }, 1000);
      
           }).catch((err)=>{
      
            toast.error("cant be updated");
            console.log(err);
           })
      }

      const handleDelete=(id)=>{

        const ok={
          driverName:"Not assign yet"
      }
     
      axios.put(`${api}/order/UpdateStatus/${id}`,ok).then((response)=>{
  
          const { Drivername } = response.data;
          toast.success(`Status Updated. Driver name: ${Drivername}`);
          getOrder();
          setTimeout(() => {
        }, 1000);
  
       }).catch((err)=>{
  
        toast.error("cant be updated");
        console.log(err);
       })

      }
      
          
        
    return (
        <div class="col main pt-5 mt-3" >
            <div style={{height:"150vh"}}>
            <div  className="head">
            <div>
              <h5 class="display-6 font-weight-bold text-black">Deliveries</h5></div>
            </div>
          
          <br></br>

            <div style={{width:"100%" ,marginTop:"100px"}}>
            <table class="table table-hover"  style={{backgroundColor:"#D9D9D9"}}>
              <thead>
                  <tr>
              
                        
                        <th scope="col">Customer Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Placed date</th>
                        <th scope="col">Driver Info</th>
                        <th scope="col">Assign Driver</th>
                        <th scope="col">Action</th>
              
                  </tr>
              </thead>
              {
                    orders.length > 0 &&
                    orders.map((per) => (
                    <tr>
                        
                        <td>{per.customerName}</td>
                        <td>{per.address}</td>
                        <td>{per.contactNumber}</td>
                        <td>{per.orderDate}</td>
                        <td>{per.driverName}</td>
                        <td> 
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            value={driverOptions.find(
                                   (option) => option.value === selectedDrivers[per._id]
                            )}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            loadOptions={fetchDriverData}
                            onChange={(selectedOption) =>{
                            handleChange(per._id, selectedOption.label);
                            UpdateStatus(per._id,selectedOption.label);
                             }}
                           /> </td>
                        
                        <td>
                        <button  onClick={()=>handleDelete(per._id)}
                            type="button"
                            class="btn btn-danger"
                            style={{ backgroundColor: "#FF0606", padding: "1px", marginLeft: "20px" }}
                             >Delete</button>
                            
                        
                        </td>
                    </tr>
                    ))
            
                }
    
          </table>                           
         </div>
        </div>
      </div>
    
    
   )
}
 
export default OrderList;