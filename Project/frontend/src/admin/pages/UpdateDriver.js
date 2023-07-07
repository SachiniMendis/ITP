
import React,{useState,useEffect} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import {useParams } from 'react-router-dom'




const UpdateDriver= ()=>{

    const [ Drivername,setDriverName]=useState("");
    const [Contact,setDriverContact]=useState("");
    const [VehicleType,setVehicletype]=useState("");
    const [LicenseNo,setLicenseNumber]=useState("");
    const [VehicleNo,setVehicleNumber]=useState("");
    const [Password,setPassword]=useState("");


const{ id } =useParams();

    useEffect(() => {
        axios.get('http://localhost:8070/driver/' + id)
          .then(response => {
            setDriverName(response.data.driverdet.Drivername);
            setDriverContact(response.data.driverdet.Contact);
            setVehicletype(response.data.driverdet.VehicleType);
            setLicenseNumber(response.data.driverdet.LicenseNo);
            setVehicleNumber(response.data.driverdet.VehicleNo);
            setPassword(response.data.driverdet.Password);
           // setIsLoading(false);
          })
    
          .catch(function (error) {
            console.log(error);
          })
      }, [id]);
    
      const onSubmit = (event) => {
        event.preventDefault();
    
        const updatedDriver = {
            Drivername: Drivername,
            Contact: Contact,
            VehicleType: VehicleType,
            LicenseNo: LicenseNo,
            VehicleNo: VehicleNo,
            Password:Password
        };
    
        axios.put(`http://localhost:8070/driver/update/`+id, updatedDriver)
          .then(()=>{

            toast.success("Successfully updated!!");

            setTimeout(() => {

                window.location = '/delivery/d_list';  
            }, 1000);
          }).catch((err)=>{

            toast.success("Error");
          })

      
          
       
      };
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
        <h5 class="display-6 font-weight-bold text-black">Update Driver</h5></div>

    </div>
        <hr/>

    <div class="m-3" style={{backgroundColor:"#D9D9D9", borderRadius:"20px", width:"98%",height:"88%"}}>
     

        <form onSubmit={onSubmit} enctype="multipart/form-data">
            <div className="container" style={{marginRight:"100px",marginLeft:"100px"}}>
           

                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="inputName"><h5>Driver Name</h5></label>
                    <input type="text" value={Drivername} required onInput={validateDriverNameInput} onChange={(event)=>setDriverName(event.target.value)}  class="form-control" id="inputName" />
                </div>
  

                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="inputContact"><h5>Contact Number</h5></label>
                    <input type="text" value={Contact} pattern='[0-9A-Z]{10}' maxLength={10}
                     title="Phone number with 7-9 and remaing 9 digit with 0-9" required onChange={(event)=>setDriverContact(event.target.value)}  class="form-control" id="inputContact" />
                </div>
             
  

                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="vehicletype"><h5>Kind of Vehicle</h5></label>
                    <input type="text" value={VehicleType} required onChange={(event)=>setVehicletype(event.target.value)}  class="form-control" id="vehicletype" />
                </div>


                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="licensenumber"><h5>License No.</h5></label>
                    <input type="number" value={LicenseNo} required onChange={(event)=>setLicenseNumber(event.target.value)}  class="form-control" id="licensenumber" rows="3"/>
                </div>


                <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="vehiclenumber"><h5>Vehicle No.</h5></label> 
                    <input type="text" value={VehicleNo} required onChange={(event)=>setVehicleNumber(event.target.value)}  class="form-control" />
                </div>
                 
                 
                  

                    <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
                    <label for="password"><h5>Password</h5></label> 
                    <input type="text" value={Password} required onChange={(event)=>setPassword(event.target.value)}  class="form-control" />
                </div>

          
               
  

    <div class="form-group" style={{marginRight:"150px",marginLeft:"150px"}}>
    
      
    <div class="col-md-12 text-center">
                    <button type="submit"  className="btn btn-primary" style={{backgroundColor:"#0B1145",color:"white"}}>Update</button>
              </div>

    </div>
  

  </div>

</form>
</div>
</div>




    );
  };


export default UpdateDriver;