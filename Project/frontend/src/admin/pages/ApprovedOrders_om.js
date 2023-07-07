import { Button } from "@chakra-ui/react";
import "./ProductList_im.css";
import { useState,useEffect } from "react";
import {DeleteIcon, EditIcon, ViewIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import { api } from "../../config";
import {toast} from 'react-hot-toast';
import {
    Table,
    Thead,
    Tbody,
   
    Tr,
    Th,
    Td,
   
    TableContainer,
   
} from '@chakra-ui/react'

function ApprovedOrders(){

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

    const handleDeleteProduct=async()=>{

        await axios.delete(`${api}/product/delete_product/${deleteId}`).then((res)=>{
 
         console.log(res);
         
         setShow(false)
         getproduct();
         toast.success('Successfully Deleted!')
        })
 
 
     }
  


    const handleClose=()=>{
        setShow(false)
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

   
const UpdateStatus=(id)=>{
    console.log(id);
    const o={
        status:"Approved"


    }
   
    axios.put(`${api}/order/UpdateStatus/${id}`,o).then(()=>{

        toast.success("Status Updated");
        getproduct()
        setTimeout(() => {

          
      }, 1000);

     }).catch((err)=>{

      toast.error("Tcant be updated");
      console.log(err);
 

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure Delete This Product</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteProduct}>
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
                            <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>quantity</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Unit Price(Rs)</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Status</b></Th>
                            
                          
                            
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                    
                
                    
                   
                <Tr textAlign="center" key={item.id}>
                
 { item.status==="Approved" && ( <>
                 <Td textAlign="center">{item.customerId}</Td> 
                <Td textAlign="center">{item.productCode}</Td> 
                <Td textAlign="center" >{item.productName}</Td>
               <Td textAlign="center"> {item.quantity}</Td>
                <Td textAlign="center">{item.unitPrice}</Td>
                <Td textAlign="center">{item.status}</Td>
               
               
                </> )
                                       
                                         
                                    }


                </Tr>



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}


export default ApprovedOrders;