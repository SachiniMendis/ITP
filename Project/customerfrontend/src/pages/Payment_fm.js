import React,{useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';





 export default function Adpayment(){

    const[firstName,setFirst]=useState("");
    const[lastName,setLast]=useState("");
    const[cardType,setType]=useState("");
    const[cardNumber,setNumber]=useState("");
    const[exYear,setYear]=useState("");
    const[exMonth,setMonth]=useState("");
    const[CVN,setCvn]=useState("");
  
    function sendData(e){
      e.preventDefault();
      
      const newPayment = {
          firstName,
          lastName,
          cardType,
          cardNumber,
          exYear,
          exMonth,
          CVN
      }
  
      axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
        toast.success('Successfully added!')
        setFirst("");
        setLast("");
        setType("");
        setNumber("");
        setYear("");
        setMonth("");
        setCvn("");
      }).catch((err)=>{
        toast.error("An error")
      })}

     
       
      
    
   
    
   
    
  


      
   
    return(
      
  
<div className="frm" style={{marginLeft:"20%",marginRight:"25%",backgroundColor:"#D9D9D9",height: "490px",marginTop:"100px",padding:"10px"}}>
      <form class="row g-3" novalidate onSubmit={sendData}>
        
  <div class="col-md-6 mb-3">
    <label for="inputEmail4" class="form-label">First name:</label>
    <input type="text" class="form-control" id="inputEmail4" style={{width:"400px"}} value={firstName} onChange={(e)=>{setFirst(e.target.value
        )}} required/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last name:</label>
    <input type="text" class="form-control" id="inputPassword4" style={{width:"400px"}} value={lastName}  onChange={(e)=>{setLast(e.target.value
        )}}  required/>
  </div>
  
  <br></br>
  <div class="col-md-4 mb-2">
    <label for="inputState" class="form-label">Card type :</label>
    <select id="inputState" class="form-select" value={cardType}  onChange={(e)=>{setType(e.target.value
        )}}required>
      <option selected >Select</option>   
      <option value="VISA">VISA</option>
      <option value="MASTER">MASTER</option>
    </select>
  </div>
  
  <div class="col-12 mb-2">
    <label for="inputAddress2" class="form-label">Card number:</label>
    <input type="number" class="form-control" id="inputAddress2" style={{width:"350px"}} value={cardNumber}  onChange={(e)=>{setNumber(e.target.value
        )}} required/>
  </div>
  <div class="col-md-6 mb-2" style={{marginRight:"100px"}}>
    <label for="inputCity" class="form-label">Expiration yr:</label>
    <input type="number" class="form-control" id="inputCity" placeholder="YYYY" style={{width:"200px"}} value={exYear}  onChange={(e)=>{setYear(e.target.value
        )}}  required/>
  </div>
  <div class="col-md-2">
    <label for="inputAddress" class="form-label">Expiration mon:</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="MM" min={1} max={12} style={{width:"200px"}} value={exMonth}  onChange={(e)=>{setMonth(e.target.value
        )}} required/>
  </div>
  
  <div class="col-12 mb-4">
    <label for="inputZip" class="form-label">CVN</label>
    <input type="number" class="form-control" id="inputZip" style={{width:"100px"}} value={CVN}  onChange={(e)=>{setCvn(e.target.value
        )}} required/>
  </div>
  <br></br>
  <br></br>
  
  <div class="col-12" >
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Agree to terms and conditions.
      </label>
    </div>
  </div>
  <br></br>
  <br></br>
  <div class="col-12" style={{textAlign:"right"}}>
    <button type="submit" class="btn btn-primary" style={{backgroundColor:"gold",color:"black"}}>submit</button>
  </div>
  <br></br>
  <br></br>
  
  
  
 
</form>
{/* <hr ></hr>
<hr ></hr>

<div style={{height:"150vh"}}>
        <div className="container"   >
        
        <br></br>
       
       <div style={{width:"100%",marginTop:"100px"}}>
    
     
     
    
        </div>
    </div>
       </div> */}


</div>





    

      )
    }

   
    

/*
//fetch part
    function AllPayment(){
  
      const [p_deleteId,seteDeleteId]=useState("");
      const [show,setShow]=useState(false);
       
       const [payments,setPayment]=useState([]);
    
       useEffect(()=>{
        
        const getPayment=async()=>{
    
    
            const result=await axios.get("http://localhost:8070/payment/");
            setPayment(result.data);
            console.log(result.data)
            
           
            console.log(payments);
        }
    
        getPayment();
    
       }, []);
    
       const getPayment=async()=>{
    
        const result=await axios.get(`${api}/payment/`);
        setPayment(result.data);
        console.log(result.data);
    
    }
    
    const handleDeleteProduct=async()=>{
    
      await axios.delete(`${api}/payment/delete/${p_deleteId}`).then((res)=>{
    
       console.log(res);
       
       //setShow(false)
       getPayment();
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
    
    
    
    
    
    
        return(
            <div class="col main pt-5 mt-3" >
                <div style={{height:"150vh"}}>
        <div className="container"   >
        <div className="h" style={{backgroundColor:"#D9D9D9"}}><h2>Added payments</h2></div>
        <br></br>
        <div class="input-group rounded" style={{width:"25%"}}>
      <input type="search" class="form-control rounded"  placeholder="Search for expenses" aria-label="Search" aria-describedby="search-addon"  />
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
                    
                  <th scope="col" style={{fontSize:"25px"}}>dsd</th>
                  <th scope="col" style={{fontSize:"25px"}}>sds</th>
                  <th scope="col" style={{fontSize:"25px"}}>sdsd</th>
                  <th scope="col" style={{fontSize:"25px"}}>sdssdc</th>
                  <th scope="col" style={{fontSize:"25px"}}>srrrr</th>
                  <th scope="col" style={{fontSize:"25px"}}>seeeee</th>
                  <th scope="col" style={{fontSize:"25px"}}>swwwww</th>
                  <th scope="col" style={{fontSize:"25px"}}>Acyion</th>
                </tr>
              </thead>
            {
                
                
               payments.map((item)=>(
               
                   
                   <tr>
                        <td style={{fontSize:"20px"}}>{item.firstName}</td>
                        <td style={{fontSize:"20px"}}>{item.lastName}</td>
                        <td style={{fontSize:"20px"}}>{item.cardType}</td>
                        <td style={{fontSize:"20px"}}>{item.cardNumber}</td>
                        <td style={{fontSize:"20px"}}>{item.exYear}</td>
                        <td style={{fontSize:"20px"}}>{item.exMonth}</td>
                        <td style={{fontSize:"20px"}}>{item.CVN}</td>
                        <td textAlign="center"><div className="actionitem"><EditIcon color="blue.500" boxSize={5}/><DeleteIcon onClick={()=>handledelete(item._id)}   color="red.500" boxSize={5}/></div></td>
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
    
    module.exports ={
      Adpayment,
      AllPayment
    }*/

    
    