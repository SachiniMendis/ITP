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

function ProductList_im(){

    const [items, setItems] = useState([]);
    const [deleteId,seteDeleteId]=useState("");
    const [show,setShow]=useState(false);

    useEffect(() => {
           
           

      
        

        getproduct();
       


    }, [])

    const getproduct =async()=>{

        const result=await axios.get(`${api}/product/get_product`);
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
            const result=await axios.get(`${api}/product/search_product_im/${key}`);
            setItems(result.data);
         }
         else{
            getproduct()
         }


    }

   


    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Product List</h5></div>
            <div><Button colorScheme="blue" variant='outline'>Add New Product</Button></div>
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
          <Modal.Title>Delete Product</Modal.Title>
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
                            <Th fontSize="medium" textAlign="center" ><b>Product Code</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Product Image</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Unit Price(Rs)</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Status</b></Th>
                          
                            <Th fontSize="medium" textAlign="center"><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                

                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.product_code}</Td> 
                <Td textAlign="center" >{item.product_name}</Td>
               <Td textAlign="center"><center><img src={`${api}${item.product_img_1_url}`} alt="no" height="50px" width="50px"/></center> </Td>
                <Td textAlign="center">{item.unit_price}</Td>

                
                { item.status===true && ( <><Td textAlign="center"><Button size="xs" colorScheme="green">Active</Button></Td></>)
                                       
                                         
                                    }

                                    { item.status===false && ( <><Td textAlign="center"><Button size="xs" colorScheme="red">Inactive</Button></Td></>)
                                       
                                         
                                    }

               
                <Td textAlign="center"><div className="actionitem"><ViewIcon boxSize={5}/><Link to={`/inventory/add_product/${item._id}`}><EditIcon color="blue.500" boxSize={5}/></Link>
                <DeleteIcon onClick={()=>handledelete(item._id)} color="red.500" boxSize={5}/></div></Td>
                
                </Tr>



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}

export default ProductList_im;