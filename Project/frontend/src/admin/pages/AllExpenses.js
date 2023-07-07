import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";
import {DeleteIcon, EditIcon} from '@chakra-ui/icons';
import {Modal} from 'react-bootstrap';
import {toast} from 'react-hot-toast';
import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {saveAs} from 'file-saver';

 function AllExpenses(){
  
  const [e_deleteId,seteDeleteId]=useState("");
  const [show,setShow]=useState(false);
   
   const [expenses,setExpenses]=useState([]);

   useEffect(()=>{
    
    const getExpense=async()=>{


        const result=await axios.get("http://localhost:8070/expense/");
        setExpenses(result.data);
        console.log(result.data)
        
       
        console.log(expenses);
    }

    getExpense();

   }, []);

   const getExpense=async()=>{

    const result=await axios.get(`${api}/expense/`);
    setExpenses(result.data);
    console.log(result.data);

}

const handleDeleteProduct=async()=>{

  await axios.delete(`${api}/expense/delete/${e_deleteId}`).then((res)=>{

   console.log(res);
  
   
   setShow(false)
   getExpense();
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





   const controlsearch=async(event)=>{

    let e_key=event.target.value;
    if(e_key){
       const result=await axios.get(`${api}/expense/search_expense/${e_key}`);
       setExpenses(result.data);
    }
    else{
        getExpense();
    }
    


}
const genaratepdf=async()=>{

  await  axios.post(`${api}/finance_ex_report/createPdf`,expenses).then((respnse)=>{
       console.log(respnse)
       axios.get(`${api}/finance_ex_report/fetchPdf`,{responseType:'blob'}).then((res)=>{

       const pdfBlob=new Blob([res.data],{type:'application/pdf'})

       saveAs(pdfBlob,'expenses_report.pdf')  //any name

       })
})
}

    return(
        <div class="col main pt-5 mt-3" >
          
            <div style={{height:"150vh"}}>
    <div className="container"   >
    <div className="h" style={{backgroundColor:"#D9D9D9"}}><h2>Added Expenses</h2></div>
    <br></br>
   
    <br></br>
    <div class="input-group rounded" style={{width:"25%",marginLeft:"800px"}}>
  <input type="search" class="form-control rounded" onChange={controlsearch} placeholder="Search for expenses" aria-label="Search" aria-describedby="search-addon"  />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
   <div style={{width:"100%",marginTop:"100px"}}>

   < div className="ptable">

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
 <Modal.Title>Confirm deletion</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure delete this data?</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleDeleteProduct}>
  OK
 </Button>
 <Button colorScheme="red" onClick={handleClose}>
Cancel
 </Button>
</Modal.Footer>
</Modal>

    <table class="table table-hover"  style={{backgroundColor:""}}>
    <thead>
            <tr>
                
              <th scope="col" style={{fontSize:"25px"}}>Date</th>
              <th scope="col" style={{fontSize:"25px"}}>Expense name</th>
              <th scope="col" style={{fontSize:"25px"}}>Expense value(RS:)</th>
              <th scope="col" style={{fontSize:"25px"}}>Action</th>
              
            </tr>
          </thead>
        {
            
            
           expenses.map((item)=>(
           
               
               <tr>
                    <td style={{fontSize:"20px"}}>{item.date}</td>
                    <td style={{fontSize:"20px"}}>{item.ename}</td>
                    <td style={{fontSize:"20px"}}>{item.evalue}</td>
                    <td textAlign="center"><div className="actionitem"><Link to={`/finance/addexpense/${item._id}`}><EditIcon color="blue.500" boxSize={5}/></Link><DeleteIcon onClick={()=>handledelete(item._id)}   color="red.500" boxSize={5}/></div></td>
                </tr>
               
            ))
        }
    </table>
    <div><Button onClick={genaratepdf} colorScheme="red" variant='outline' style={{marginLeft:"950px"}}>Generate Report </Button></div>


    


   </div>
 

    </div>
</div>
   </div>
    </div>
   )
}
export default AllExpenses;