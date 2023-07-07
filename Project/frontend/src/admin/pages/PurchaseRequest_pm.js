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

function PurchaseRequest_pm(){

    const [purchase, setPurchase] = useState([]);
    const [deleteId,seteDeleteId]=useState("");
    const [show,setShow]=useState(false);

    useEffect(() => {
           
           

      
        

        getrequest();
       


    }, [])

    const getrequest =async()=>{

        const result=await axios.get(`${api}/request/`);
        setRequest(result.data);
        console.log(result.data);

    }

    const handleDeleteRequest=async()=>{

        await axios.delete(`${api}/request/delete/${deleteId}`).then((res)=>{
 
         console.log(res);
         
         setShow(false)
         getrequest();
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
            const result=await axios.get(`${api}/product/search_product_im/${key}`);
            setRequest(result.data);
         }
         else{
            getrequest()
         }


    }

   


    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Request List</h5></div>
            </div>
       
         <div className="search">
         

         <div class="input-group rounded">
  <input type="search" class="form-control rounded" onChange={handleSearch} placeholder="Search Request" aria-label="Search" aria-describedby="search-addon" />
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
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteRequest}>
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
                            <Th fontSize="medium" textAlign="center" ><b>Request ID</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Date</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Description</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Quantity</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Status</b></Th>
                          
                            <Th fontSize="medium" textAlign="center"><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 request.length >0  &&   request.map((item) => (
                

                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.requestId}</Td> 
                <Td textAlign="center" >{item.des}</Td>
                <Td textAlign="center">{item.qty}</Td>

                
                { item.status===true && ( <><Td textAlign="center"><Button size="xs" colorScheme="green">Complete</Button></Td></>)
                                       
                                         
                                    }

                                    { item.status===false && ( <><Td textAlign="center"><Button size="xs" colorScheme="red">Incomplete</Button></Td></>)
                                       
                                         
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

export default PurchaseRequest_pm;