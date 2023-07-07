import { Button } from "@chakra-ui/react";
import "./ProductList_im.css";
import { useState,useEffect } from "react";
import {DeleteIcon, EditIcon, ViewIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import { api } from "../../config";
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

function ProductStock_im(){

    const [items, setItems] = useState([]);
    
    useEffect(() => {
           
           

      
        

        getproduct();
       


    }, [])

    const getproduct =async()=>{

        const result=await axios.get(`${api}/product/get_product`);
        setItems(result.data);
        console.log(result.data);

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

   
    const genaratepdf=async()=>{

        await  axios.post(`${api}/inventoryreport/createPdf`,items).then((respnse)=>{
             console.log(respnse)
             axios.get(`${api}/inventoryreport/fetchPdf`,{responseType:'blob'}).then((res)=>{
  
             const pdfBlob=new Blob([res.data],{type:'application/pdf'})
  
             saveAs(pdfBlob,'inventorystock.pdf')
  
             })
        })
      }

    

    return(<>
     <div class="col main pt-5 mt-3">

    
         
       
            
            <div  className="head">
                <div>
            <h5 class="display-6 font-weight-bold text-black">Product Stock</h5></div>
            <div><Button colorScheme="blue" onClick={genaratepdf} variant='outline'>Export Report</Button></div>

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

    

         <TableContainer overflowY='auto' maxHeight='70vh'>
                <Table variant='striped' colorScheme='gray'>

                    <Thead  backgroundColor="white" position="sticky" top={0} zIndex="docked">
                        <Tr textAlign="center" >
                            <Th fontSize="medium" textAlign="center" ><b>Product Code</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Product Name</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Unit</b></Th>
                            <Th fontSize="medium" textAlign="center"><b>Available Stock</b></Th>
                           <Th fontSize="medium" textAlign="center"><b>Action</b></Th>
                        </Tr>
                    </Thead>
                    <Tbody>


                    {
                    
                 items.length >0  &&   items.map((item) => (
                

                   
                <Tr textAlign="center" key={item.id}>
                <Td textAlign="center">{item.product_code}</Td> 
                <Td textAlign="center" >{item.product_name}</Td>
               <Td textAlign="center"> {item.unit_type} </Td>
                <Td textAlign="center">{item.stock}</Td>
                <Td textAlign="center"><div ><center><Link to={`/inventory/product_stock/stock_details/${item.product_code}`}><button  class="btn btn-info btn-sm">View Stock Details</button></Link></center></div></Td>
                
                </Tr>



            ))}

                 

                       
                       

                    </Tbody>

                </Table>


            </TableContainer>



         </div>
        
        
 </div>
    
    
    
    
    </>)

}

export default ProductStock_im;