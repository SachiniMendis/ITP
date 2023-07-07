import "./AddCustomer_cm.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";


export default function AddCustomer_cm(){

    const [first_name,setFirst_name]=useState("");
    const [last_name,setLast_name]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [province,setProvince]=useState("");
    const [city,setCity]=useState("");
    const [profile_pic,setProfile_pic]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [gender,setGender]=useState("");
    const navigate = useNavigate();
    const params = useParams();
    const [errors, setErrors] = useState({});




const handleUploadone = async (e) => {

  const file = e.target.files[0];
  
  const formData = new FormData();
  formData.append("image", file);
  const result1 = await axios.post(`${api}/customer/upload`, formData);

    setProfile_pic(result1.data.path);
    console.log(result1.data.path)
 
  

}

function validate(customer) {
  let errors = {};

  if (!customer.first_name) {
    errors.first_name = "First name is required";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(customer.first_name)) {
    errors.first_name = "First Name is invalid";
  }

  if (!customer.last_name) {
    errors.last_name = "Last name is required";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(customer.last_name)) {
    errors.last_name = "Last Name is invalid";
  }

  if (!customer.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(customer.email)) {
    errors.email = "Email address is invalid";
  }

  if (!customer.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(customer.phone)) {
    errors.phone = "Phone number is invalid";
  }

  if (!customer.password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(customer.password)) {
    errors.password = "Password is invalid";
  }

  if (!customer.username) {
    errors.username = "Confirm Password is required";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(customer.username)) {
    errors.username = "Confirm Password is invalid";
  } else if(!password == username){
    errors.username = "Password Not Match..."
  }

  if (!customer.gender) {
    errors.gender = "Gender is required";
  }

  if (!customer.province) {
    errors.province = "Province is required";
  }

  if (!customer.city) {
    errors.city = "City is required";
  }

  return errors;
}







function sendCustomerData(e) {
  e.preventDefault();

  const customer = {
    first_name,
    last_name,
    email,
    phone,
    province,
    city,
    profile_pic,
    username,
    password,
    address,
    gender
  };

  const errors = validate(customer);
  setErrors(errors);

  if (Object.keys(errors).length === 0) {
    axios.post(`${api}/customer/addCustomer`, customer)
      .then(() => {
        setFirst_name("");
        setLast_name("");
        setUsername("");
        setPassword("");
        setAddress("");

        toast.success('Registration Successful!!');
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        toast.error("Error");
        console.log(err);
      });
  }
}






 


    return(
      
      <div className="container">
      <div class="col main pt-5 mt-3">

    
         
       
            
<div  className="head">
    <div>
<h5 class="display-6 font-weight-bold text-black">Welcome to ToolHUB! Please Register</h5></div>

</div>

<div className="jk">

<hr/>

<div class="m-3">

<form onSubmit={sendCustomerData}>
<div class="form-row">
<div class="form-group col-md-6">
  <label for="first_name">First Name</label>
  <input type="text" value={first_name} onChange={(event) => setFirst_name(event.target.value)} class="form-control" id="first_name" />
  {errors.first_name && <div className="text-danger">{errors.first_name}</div>}
</div>

<div class="form-group col-md-6">
  <label for="last_name">Last Name</label>
  <input  type="text" value={last_name} onChange={(event) => setLast_name(event.target.value)} class="form-control" id="last_name" />
  {errors.last_name && <div className="text-danger">{errors.last_name}</div>}
</div>

<div class="form-group col-md-6">
  <label for="email">Email</label>
  <input  type="text" value={email} onChange={(event) => setEmail(event.target.value)} class="form-control" id="email" />
  {errors.email && <div className="text-danger">{errors.email}</div>}
</div>

<div class="form-group col-md-6">
  <label for="phone">Mobile Number</label>
  <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} class="form-control" id="phone" />
  {errors.phone && <div className="text-danger">{errors.phone}</div>}
</div>

  </div>
  
  


  <div class="form-row">

  <div class="col">
    <label for="gender">Gender</label>
    <select required class="form-control" value={gender} onChange={(event)=>setGender(event.target.value)}  id="gender" placeholder="Select Gender"> 
      <option selected >--</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    {errors.gender && <div className="text-danger">{errors.gender}</div>}
    </div>


    <div class="col">
    <label for="province">Province</label>
    <select class="form-control" value={province} onChange={(event)=>setProvince(event.target.value)}  id="province" placeholder="Select Province"> 
      <option selected >--</option>
      <option value="Western">Western</option>
      <option value="Uva">Uva</option>
      <option value="Southern">Southern</option>
      <option value="Sabaragamuwa">Sabaragamuwa</option>
      <option value="North Western">North Western</option>
      <option value="Northern">Northern</option>
      <option value="North Central">North Central</option>
      <option value="Eastern">Eastern</option>
      <option value="Central">Central</option>

      
    </select>
    {errors.province && <div className="text-danger">{errors.province}</div>}
    </div>

    <div class="col">
    <label for="city">City</label>
    <select class="form-control" value={city} onChange={(event)=>setCity(event.target.value)}  id="city" placeholder="Select City"> 
      <option selected >--</option>
      <option value="Colombo">Colombo</option>
      <option value="Kandy">Kandy</option>
      <option value="Mathara">Mathara</option>
      <option value="Matale">Matale</option>
      <option value="Nuwaraeliya">Nuwaraeliya</option>
      <option value="Galla">Galla</option>
      <option value="Anuradhapura">Anuradhapura</option>
      <option value="Polonnaruwa">Polonnaruwa</option>
      <option value="Dabulla">Dabulla</option>
      <option value="Rathnapura">Rathnapura</option>
      <option value="Malabe">Malabe</option>
      <option value="Yapane">Yapane</option>
      <option value="Trincomale">Trincomale</option>
      <option value="Kurunagala">Kurunagala</option>
      <option value="Puttalama">Puttalama</option>
      <option value="Balangoda">Balangoda</option>
      <option value="Hambanthota">Hambanthota</option>
      <option value="Kaluthara">Kaluthara</option>
      <option value="Mathugama">Mathugama</option>
      <option value="Panadura">Panadura</option>
      <option value="Horana">Horana</option>

      
    </select>
    {errors.city && <div className="text-danger">{errors.city}</div>}
    </div>
  </div>

  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="passowrd">Password</label>
      <input type="password" value={password} onChange={(event) =>setPassword(event.target.value)}  class="form-control" id="password" />
      {errors.password && <div className="text-danger">{errors.password}</div>}
    </div>


    <div class="form-group col-md-6">
      <label for="username">Confirm Password</label>
      <input type="password" value={username} onChange={(event) =>setUsername(event.target.value)}  class="form-control" id="username" />
      {errors.username && <div className="text-danger">{errors.username}</div>}
    </div>

    
  </div>


  <label class="mt-3" for="profile_pic">Choose Profile Picture</label> 

  <div class="form-row " >
    
    <div class="form-group col-md-6">
    <div class="custom-file">
  <input type="file" onChange={handleUploadone} class="custom-file-input" id="profile_pic"/>
  <label class="custom-file-label" for="profile_pic">Choose Image</label>
    </div>
    </div>
    </div>

  <div>

    <div>

    </div>


  </div>
  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
     
{
   profile_pic && (<img src={`${api}${profile_pic}`}  class="rounded float-right w-50  " alt="..."/>)}

    </div>
    <div class="form-group col-md-6">
    

    </div>
  </div>
 

  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#FF0000",color:"white"}}>Reset Details</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> Register </button>

    </div>
  </div>

  

</form>

</div>



</div>
</div>
</div>
    )
}


