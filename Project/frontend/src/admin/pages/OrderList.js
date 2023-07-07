import { Button } from "@chakra-ui/react";
import "./ProductList_im.css";
import { useState,useEffect } from "react";
import {DeleteIcon, EditIcon, ViewIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import { api } from "../../config";
import {toast} from 'react-hot-toast';
import {saveAs} from 'file-saver';
import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
    Td,
   
    TableContainer,
   
} from '@chakra-ui/react'

function OrderList(){
    const [order, setOrder] = useState([]);
    const [items, setItems] = useState([]);
    const [deleteId,seteDeleteId]=useState("");
    const [show,setShow]=useState(false);

    useEffect(() => {
           
           

      
        

        getproduct();
       


    }, [])

    const getproduct =async()=>{

        const result=await axios.get(`${api}/order/getOrders`);
        setItems(result.data);
        console.log(result.data);

    }

    // const handleDeleteProduct=async()=>{

    //     await axios.delete(`${api}/order/deleteorder/${deleteId}`).then((res)=>{
 
    //      console.log(res);
         
    //      setShow(false)
    //      getproduct();
    //      toast.success('Successfully Deleted!')
    //     })
 
 
    //  }
  


    const handleClose=()=>{
        setShow(false)
    }
    
  const handleDeleteOrder=async()=>{

    await axios.delete(`${api}/order/deleteorder/${deleteId}`).then((res)=>{

     console.log(res);
     
     setShow(false)
     getproduct ();
     toast.success('Successfully Deleted!')
    })


 }
    const handledelete=(_id)=>{
        seteDeleteId(_id)
        setShow(true)
        console.log(_id);

    }

    const handleSearch=async(event)=>{

         let key=event.target.value;
         if(key){
            const result=await axios.get(`${api}/order/searchOrder/${key}`);
            setItems(result.data);
         }
         else{
            getproduct()
         }


    }

   
    const UpdateStatus = (id) => {
      console.log(id);
      const o = {
        status: "Approved"
      };
    
      axios.put(`${api}/order/UpdateStatus/${id}`, o)
        .then(() => {
          toast.success("Status Updated");
          getproduct();
          setTimeout(() => {
            // Update the stock for the accepted order
            const acceptedOrder = items.find(item => item._id === id);
            if (acceptedOrder) {
              const productCode = acceptedOrder.productCode;
              const quantity = acceptedOrder.quantity;
    
              // Update the stock for the accepted order using the productCode and quantity
              // Implement your logic here
    
              // Example:
              axios.put(`${api}/stock/updateStock/${productCode}`, { quantity })
                .then(() => {
                  console.log("Stock updated successfully");
                })
                .catch((err) => {
                  console.log("Error updating stock:", err);
                });
            }
          }, 1000);
        })
        .catch((err) => {
          toast.error("Can't be updated");
          console.log(err);
        });
    };
    
const genaratepdf=async()=>{

    await  axios.post(`${api}/orderReport/createPdf`,items).then((respnse)=>{
         console.log(respnse)
         axios.get(`${api}/orderReport/fetchPdf`,{responseType:'blob'}).then((res)=>{
  
         const pdfBlob=new Blob([res.data],{type:'application/pdf'})
  
         saveAs(pdfBlob,'OrderList.pdf')
  
         })
        })
        }

    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Order List</h5></div>
            
            </div>
       
         <div className="search">
         

         <div class="input-group rounded">
  <input type="search" class="form-control rounded" onChange={handleSearch} placeholder="Search Orders" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
  

         </div>
  
         <hr/>

         < div className="ptable">

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure Delete This Order</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteOrder}>
           OK
          </Button>
          <Button colorScheme="red" onClick={handleClose}>
        Cancel
          </Button>
        </Modal.Footer>
      </Modal>

         <TableContainer overflowY='auto' maxHeight='70vh'>
                <Table variant='striped' colorScheme='gray'>

                    <Thead  backgroundColor="white" position="sticky" top={0} zIndex="docked">
                        <Tr textAlign="center" >
                         <Th fontSize="medium" textAlign="center"><b>Customer ID</b></Th>
                            <Th fontSize="medium" textAlign="center" ><b>Product Code</b></Th>
                            <Th fontSize="medium" textAlign="center" ><b>Date</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>quantity</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Unit Price(Rs)</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Status</b></Th>
                            
                          
                            <Th fontSize="medium" textAlign="center"><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                    
                
                    
                   
                <Tr textAlign="center" key={item.id}>
                
 { item.status==="pending" && ( <>
                 <Td textAlign="center">{item.customerId}</Td> 
                <Td textAlign="center">{item.productCode}</Td> 
                <Td textAlign="center" >{item.orderDate}</Td>
                <Td textAlign="center" >{item.productName}</Td>
               <Td textAlign="center"> {item.quantity}</Td>
                <Td textAlign="center">{item.unitPrice}</Td>
                <Td textAlign="center">{item.status}</Td>
               
                <Td textAlign="center"><div className="actionitem"><button type="button" onClick={()=>UpdateStatus(item._id)} class="btn btn-primary">ACCEPT</button>
                <Link to={`/inventory/add_product/${item._id}`}></Link>
                 <button type="button" onClick={()=>handledelete(item._id)} class="btn btn-danger">REJECT</button></div></Td>
                </> )
                                       
                                         
                                    }


                </Tr>



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>


            <Button colorScheme="blue" variant='outline' onClick={genaratepdf}>Generate Report</Button>
         </div>
        
        
 </div>
    
    
    
    
    </>)

}


export default OrderList;