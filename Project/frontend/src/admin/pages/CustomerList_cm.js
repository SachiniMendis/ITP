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

function CustomerList_cm(){

    const [items, setItems] = useState([]);
    const [deleteId,seteDeleteId]=useState("");
    const [show,setShow]=useState(false);

    useEffect(() => {
           
           

      
        

        getcustomer();
       


    }, [])

    const getcustomer =async()=>{

        const result=await axios.get(`${api}/customer/`);
        setItems(result.data);
        console.log(result.data);

    }

    const handleDeleteCustomer=async()=>{

        await axios.delete(`${api}/customer/deleteCustomer/${deleteId}`).then((res)=>{
 
         console.log(res);
         
         setShow(false)
         getcustomer();
         toast.success('Successfully Removed!')
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
            const result=await axios.get(`${api}/customer/search_customer_cm/${key}`);
            setItems(result.data);
         }
         else{
            getcustomer()
         }


    }

   


    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Customer List</h5></div>
            </div>
       
         <div className="search">
         

         <div class="input-group rounded">
  <input type="search" class="form-control rounded" onChange={handleSearch} placeholder="Search Product" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
  

         </div>
  
         <hr/>

         < div className="ptable">

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure Remove this Customer???</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCustomer}>
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
                            <Th fontSize="medium" textAlign="center" ><b>First Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Last Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>City</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Email</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Mobile Number</b></Th>
                          
                            <Th fontSize="medium" textAlign="center"><b>Remove</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                

                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.first_name}</Td> 
                <Td textAlign="center" >{item.last_name}</Td>
                <Td textAlign="center" >{item.city}</Td>
                <Td textAlign="center" >{item.email}</Td>
                <Td textAlign="center" >{item.phone}</Td>

                
                                       
                            

               
                <Td textAlign="center"><div className="actionitem"><DeleteIcon onClick={()=>handledelete(item._id)} color="red.500" boxSize={5}/></div></Td>
                
                </Tr>



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}

export default CustomerList_cm;