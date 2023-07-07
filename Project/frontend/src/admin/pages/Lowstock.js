import { Button } from "@chakra-ui/react";
import "./ProductList_im.css";
import { useState,useEffect } from "react";
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

function Lowstock(){

    const [items, setItems] = useState([]);
    
    useEffect(() => {
           
           

      
        

        getproduct();
       


    }, [])

    const getproduct =async()=>{

        const result=await axios.get(`${api}/product/get_product`);
        setItems(result.data);
        console.log(result.data);

    }

    
  
   

   
   

    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Low Stock Product</h5></div>
          

            </div>
       
         <div className="search">
         

     
  

         </div>
  
         <hr/>

         < div className="ptable">

    

         <TableContainer overflowY='auto' maxHeight='100vh'>
                <Table variant='striped' colorScheme='gray'>

                    <Thead  backgroundColor="white" position="sticky" top={0} zIndex="docked">
                        <Tr textAlign="center" >
                            <Th fontSize="medium" textAlign="center" ><b>Product Code</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Unit</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Available Stock</b></Th>
                           
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                

        
                    item.stock  <10 &&(
        
                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.product_code}</Td> 
                <Td textAlign="center" >{item.product_name}</Td>
               <Td textAlign="center"> {item.unit_type} </Td>
                <Td textAlign="center">{item.stock}</Td>
                
                </Tr>)



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}

export default Lowstock;