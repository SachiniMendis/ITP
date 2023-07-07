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
    // const [errors, setErrors] = useState({});
  
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
    
      <div className="container">
        <h2 style={{textAlign:"center",marginTop:"50px"}}>Add payment details</h2>
<div className="frm" style={{marginLeft:"5%",marginRight:"0%",backgroundColor:"#D9D9D9",height: "490px",marginTop:"100px",padding:"10px"}}>

      <form class="row g-3" novalidate onSubmit={sendData}>
      
        
  <div class="col-md-6 mb-3">
    <label for="inputFirst" class="form-label">First name:</label>
    <input type="text" class="form-control" id="inputFirst" style={{width:"400px"}} value={firstName} onChange={(e)=>{setFirst(e.target.value
        )}}pattern="^[A-Za-z]+$" required  onInvalid={(e) => e.target.setCustomValidity('Please enter valid name')}
        onInput={(e) => e.target.setCustomValidity('')}/>
      
  </div>
  <div class="col-md-6">
    <label for="inputlast" class="form-label">Last name:</label>
    <input type="text" class="form-control" id="inputlast" style={{width:"400px"}} value={lastName}  onChange={(e)=>{setLast(e.target.value
        )}}pattern="^[A-Za-z]+$"  required onInvalid={(e) => e.target.setCustomValidity('Please enter valid name')}
        onInput={(e) => e.target.setCustomValidity('')} />
        
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
    <label for="inputnum" class="form-label">Card number:</label>
    <input type="number" class="form-control" id="inputnum" style={{width:"350px"}} value={cardNumber}  onChange={(e)=>{setNumber(e.target.value
        )}} required/>
  </div>
  <div class="col-md-6 mb-2" style={{marginRight:"100px"}}>
    <label for="year-input" class="form-label">Expiration yr:</label>
    <input type="number" class="form-control" id="inputCity" min={2023} placeholder="YYYY" style={{width:"200px"}} value={exYear}  onChange={(e)=>{setYear(e.target.value
        )}}  required/>
  </div>
  <div class="col-md-2">
    <label for="inputmon" class="form-label">Expiration mon:</label>
    <input type="number" class="form-control" id="inputmon" placeholder="MM" min={1} max={12} style={{width:"200px"}} value={exMonth}  onChange={(e)=>{setMonth(e.target.value
        )}} required/>
  </div>
  
  <div class="col-12 mb-4">
    <label for="inputZip" class="form-label">CVN</label>
    <input type="number" class="form-control" id="inputZip" style={{width:"100px"}}  value={CVN}  onChange={(e)=>{setCvn(e.target.value
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


</div>


    

      )
    }

   
    


