import { Button } from "@chakra-ui/react";
import "./EmployeeList.css";
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

function EmployeeList(){

    const [items, setItems] = useState([]);
    const [deleteId,seteDeleteId]=useState("");
    const [show,setShow]=useState(false);

    useEffect(() => {
      
        
       
        getEmployee();
       
 

    }, [])

    const getEmployee =async()=>{

        const result=await axios.get(`${api}/employee/`);
        setItems(result.data);
        console.log(result.data);

    }

    const handleDeleteEmployee=async()=>{

        await axios.delete(`${api}/employee/deleteEmployee/${deleteId}`).then((res)=>{
 
         console.log(res);
         
         setShow(false)
         getEmployee();
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
            const result=await axios.get(`${api}/employee/search_employee_em/${key}`);
            setItems(result.data);
         }
         else{
            
        
            getEmployee()
         }


    }

   


    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Employee List</h5></div>
            <div><Link to="/employee/add_employee"><Button colorScheme="blue" variant='outline'>Add New Employee</Button></Link></div>
            </div>
       
         <div className="search">
         

         <div class="input-group rounded">
  <input type="search" class="form-control rounded" onChange={handleSearch} placeholder="Search Employee" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
  

         </div>
  
         <hr/>

         < div className="ptable">

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee???</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure Delete This Employee</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteEmployee}>
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
                            <Th fontSize="medium" textAlign="center" ><b>Employee ID</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Employee Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Position</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Address</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Mobile Number</b></Th>

                          
                            <Th fontSize="medium" textAlign="center"><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                

                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.employee_id}</Td>
                <Td textAlign="center" >{item.employee_name}</Td>
                <Td textAlign="center">{item.position}</Td>
                <Td textAlign="center">{item.Address} </Td>
                <Td textAlign="center">{item.mobile_number}</Td>
                <Td textAlign="center"><div className="actionitem"><ViewIcon boxSize={5}/><Link to={`/employee/add_employee/${item._id}`}><EditIcon color="blue.500" boxSize={5}/></Link><DeleteIcon onClick={()=>handledelete(item._id)} color="red.500" boxSize={5}/></div></Td>
                
                
                </Tr>



            ))}

                 </Tbody>

                </Table>




            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}

export default EmployeeList;