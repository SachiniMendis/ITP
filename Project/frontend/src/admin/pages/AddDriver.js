import React,{useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";


export default function AddDriver(){

   const [ Drivername,setDriverName]=useState("");
    const [Contact,setDriverContact]=useState("");
    const [VehicleType,setVehicletype]=useState("");
    const [LicenseNo,setLicenseNumber]=useState("");
    const [VehicleNo,setVehicleNumber]=useState("");
    const [Password,setPassword]=useState("")
    //const [error, setError] = useState(false);
    const navigate = useNavigate();
        
    function sendDriverData(event){
      event.preventDefault();
    
        const newDriver = {
            Drivername,
            Contact,
            VehicleType,
            LicenseNo,
            VehicleNo,
            Password
        }



    axios.post("http://localhost:8070/driver/add",newDriver).then(()=>{
        toast.success('Successfully added!')
                setDriverName("");
                setDriverContact("");
                setVehicletype("");
                setLicenseNumber("");
                setVehicleNumber("");
                setPassword("");

                setTimeout(() => {
        
                    navigate("/delivery/d_list");
                }, 1000);
     }).catch((err)=>{
        console.log(err)//toast.error("An error")
    })
}
  

  //validation for driver name
  const validateDriverNameInput = (event) => {
    const regex = /^[a-zA-Z]+$/;
    const isValid = regex.test(event.target.value);
    if (!isValid) {
      event.target.setCustomValidity('Please enter alphabets only');
    } else {
      event.target.setCustomValidity('');
    }
  }


        return(

            <div class="col main pt-5 mt-3">
            <div  className="head">
            <div>
                <h5 class="display-6 font-weight-bold text-black">Add New Driver</h5></div>

            </div>
            <hr/>

           <div class="m-3" style={{backgroundColor:"#D9D9D9", borderRadius:"25px", width:"98%",height:"87%"}}>
                <form onSubmit={sendDriverData} enctype="multipart/form-data">
                <div className="form-group" style={{marginRight:"100px",marginLeft:"100px"}}>
                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="inputName">Driver Name</label>
                    <input type="text" value={Drivername}  onInput={validateDriverNameInput} onChange={(event)=>setDriverName(event.target.value)}  class="form-control" id="inputName"  placeholder="Enter Name" required/>
                
                </div>
  

                <div className="form-group " style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="inputContact" >Contact Number</label>
                    <input type="text+" pattern='[0-9A-Z]{10}' maxLength={10}
                     title="Phone number with 7-9 and remaing 9 digit with 0-9" required 
                     value={Contact} onChange={(event)=>setDriverContact(event.target.value)}  class="form-control" id="inputContact" placeholder="(+94)xxxxxxxx"/>
                
                </div>
             
                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="vehicletype">Kind of Vehicle</label>
                    <input type="text" value={VehicleType} required onInput={validateDriverNameInput} onChange={(event)=>setVehicletype(event.target.value)}  class="form-control" id="vehicletype" placeholder="Enter Kind of Vehicle" />
                </div>


                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="licensenumber">License No.</label>
                    <input type="number" value={LicenseNo} required  onChange={(event)=>setLicenseNumber(event.target.value)}  class="form-control" id="licensenumber" rows="3" placeholder="Enter License Number"/>
                </div>


                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="vehiclenumber">Vehicle No.</label> 
                    <input type="text" value={VehicleNo} pattern="[A-Z]{2}-[0-9]{4}" required onChange={(event)=>setVehicleNumber(event.target.value)} class="form-control" placeholder="Enter Vehicle Number"/>
                    
                </div>
                

                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="password">Password</label> 
                    <input type="password" value={Password} required  onChange={(event)=>setPassword(event.target.value)}  class="form-control" placeholder="*******"/>
                </div>

               <div class="col-md-12 text-center">
                    <button type="submit"  className="btn btn-primary" style={{backgroundColor:"#0B1145",color:"white"}}>Submit</button>
              </div>
               

          </div>

        </form>
    </div>
    </div>



    )
}

