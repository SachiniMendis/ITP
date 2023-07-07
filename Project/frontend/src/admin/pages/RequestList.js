import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";
import {DeleteIcon, EditIcon} from '@chakra-ui/icons';
import {Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {saveAs} from 'file-saver';

import {toast} from 'react-hot-toast';
import { Button } from "@chakra-ui/react";

 function RequestList(){
   
   const [requests, setrequests] = useState([]);
   const [e_deleteId,seteDeleteId]=useState("");
   const [show,setShow]=useState(false);

   useEffect(()=>{
    
   const getRequest=async()=>{


        const result=await axios.get("http://localhost:8070/request/");
        setrequests(result.data);
        console.log(result.data)
        
       
        console.log(requests);
    }

    getRequest();

   }, []);

   const getRequest=async()=>{

    const result=await axios.get(`${api}/request/`);
    setrequests(result.data);
    console.log(result.data);

}

const handleDeleteRequest=async()=>{

  await axios.delete(`${api}/request/delete/${e_deleteId}`).then((res)=>{

   console.log(res);
   
   setShow(false)
   getRequest();
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

    let s_key=event.target.value;
    if(s_key){
       const result=await axios.get(`${api}/request/searchRequest/${s_key}`);
       setrequests(result.data);
    }
    else{
        getRequest();
    }

    
//     const genaratepdf=async()=>{

//       await  axios.post(`${api}/requestreport/createPdf`,requests).then((respnse)=>{
//            console.log(respnse)
//            axios.get(`${api}/requestreport/fetchPdf`,{responseType:'blob'}).then((res)=>{

//            const pdfBlob=new Blob([res.data],{type:'application/pdf'})

//            saveAs(pdfBlob,'purchaserequests.pdf')

//            })
//       })
//       }
    
// }

// const genaratepdf=async()=>{

//   await  axios.post(`${api}/requestreport/createPdf`,requests).then((respnse)=>{
//        console.log(respnse)
//        axios.get(`${api}/requestreport/fetchPdf`,{responseType:'blob'}).then((res)=>{

//        const pdfBlob=new Blob([res.data],{type:'application/pdf'})

//        saveAs(pdfBlob,'purchaserequests.pdf')

//        })
//       })
      }



    return(
        <div class="col main pt-5 mt-3" >
            <div style={{height:"150vh"}}>
    <div className="container"   >
    <div  className="head">
        <div>
    <h5 class="display-6 font-weight-bold text-black">Request List</h5></div>
    
    </div>
    <br></br>
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search for Request" aria-label="Search" aria-describedby="search-addon" onChange={controlsearch} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
 
< div className="ptable">

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
 <Modal.Title>Confirm deletion</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure delete this data?</Modal.Body>
<Modal.Footer>
 <Button variant="secondary" onClick={handleDeleteRequest}>OK</Button>
 <Button colorScheme="red" onClick={handleClose}>Cancel</Button>
</Modal.Footer>
</Modal>

   <div style={{width:"100%",marginTop:"10px",}}>
    <table class="table table-hover"  style={{backgroundColor:"#D9D9D9",width:"100%"}}>
    <thead>
            <tr>
                
              <th scope="col">Request ID</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
        {
            
            
            requests.map((item)=>(
           
               
               <tr>
                    <td  textAlign="center">{item.requestId}</td>
                    <td  textAlign="center">{item.date}</td>
                    <td textAlign="center">{item.des}</td>
                    <td  textAlign="center">{item.qty}</td>
                    <td  textAlign="center">{item.stat}</td>
                    <td textAlign="center"><div className="actionitem"><Link to={`/request/add_request/${item._id}`}><EditIcon color="blue.500" boxSize={5}/></Link ><DeleteIcon onClick={()=>handledelete(item._id)}   color="red.500" boxSize={5}/></div></td>
                </tr>
               
            ))
        }
    </table>


    


   </div>
 

    </div>

   </div>
    </div>
    </div>
   )
      }

export default RequestList;

  
 

