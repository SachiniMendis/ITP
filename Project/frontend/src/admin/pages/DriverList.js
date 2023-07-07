import React,{useState,useEffect} from "react";
import axios from "axios";
import { api } from "../../config";
import { Link } from "react-router-dom";
import {Button} from "@chakra-ui/react";
import {saveAs} from 'file-saver';


 function DriverList(){
   
   const [drivers,setdrivers]=useState([]);
    
   useEffect(()=>{
    
      getDriver();

   }, []);

   const getDriver=async()=>{

    const result=await axios.get(`${api}/driver/`);
    setdrivers(result.data);
    console.log(result.data);
    

}

//delete method
const deleteDriver=async(id)=>{
  console.warn(id)
  let result = await fetch(`http://localhost:8070/driver/${id}`,{
    method:"Delete"
});
result=await result.json();
if(result)
{
  alert("Driver deleted")
  getDriver();
}

}


//search 

   const controlsearch=async(event)=>{

    let e_key=event.target.value;
    if(e_key){
       const result=await axios.get(`${api}/driver/searchdriver/${e_key}`);
       setdrivers(result.data);
    }
    else{
        getDriver();
    }
}

//generate report
const genaratepdf=async()=>{

  await  axios.post(`${api}/driverreport/createPdf`,drivers).then((respnse)=>{
       console.log(respnse)
       axios.get(`${api}/driverreport/fetchPdf`,{responseType:'blob'}).then((res)=>{

       const pdfBlob=new Blob([res.data],{type:'application/pdf'})

       saveAs(pdfBlob,'driver.pdf')

       })
  })
}


    return (
        <div class="col main pt-5 mt-3" >
            <div style={{height:"150vh"}}>
            
            <div  className="head">
            <div>
              <h5 class="display-6 font-weight-bold text-black">All Drivers</h5></div>
              <div><Button colorScheme="blue" variant='outline' onClick={genaratepdf}>Export Report</Button></div>
            </div>
            <br></br>

            <div class="input-group rounded">
                <input type="search" class="form-control rounded"  placeholder="Search Driver Name" aria-label="Search" aria-describedby="search-addon" onChange={controlsearch} />
                <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>

            <div style={{width:"100%" ,marginTop:"100px"}}>
            <table class="table table-hover"  style={{backgroundColor:"#D9D9D9"}}>
              <thead>
                  <tr>
              
                        <th scope="col">Driver Name</th>
                        <th scope="col">Contact No.</th>
                        <th scope="col">Kind of Vehicle</th>
                        <th scope="col">License No.</th>
                        <th scope="col">Vehicle No.</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
              
                  </tr>
              </thead>
              {
                    drivers.length >0 && drivers.map((per)=>(
           
                   <tr>
                    
                        <td>{per.Drivername}</td>
                        <td>{per.Contact}</td>
                        <td>{per.VehicleType}</td>
                        <td>{per.LicenseNo}</td>
                        <td>{per.VehicleNo}</td>
                        <td>{per.Password}</td>
                        <td><Link  class="btn btn-warning " style={{backgroundColor:"gold" ,padding:"1px",marginLeft:"8px"}}  to={`/delivery/d_list/${per._id}`} >Update</Link>
                        <button type="button" class="btn btn-danger" style={{backgroundColor:"#FF0606" ,padding:"1px",marginLeft:"20px"}} onClick={()=>deleteDriver(per._id)}>Delete</button></td>
                  </tr>
               
                   ))
                }
    
          </table>
         </div>
        </div>
      </div>
    
   )
}
 
export default DriverList;