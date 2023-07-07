import axios from "axios";
import { useEffect, useState, useNavigate, useParams,  } from "react";
import { Link } from 'react-router-dom';
import { api } from "../config";





function CustomerManagerDashboard(){

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
    const [id,setId]=useState("");


    useEffect(() => {
        
      const customerid=localStorage.getItem('customerid');
      const id=JSON.parse(customerid)
      setId(id)

      console.log(id)





    const getOneCustomer = async() => {

        const result = await axios.get(`${api}/customer/get/${id}`);

        const item = result.data

        console.log(item);

        setFirst_name(item.first_name);
        setLast_name(item.last_name);
        setEmail(item.email);
        setPhone(item.phone);
        setProvince(item.province);
        setCity(item.city);
        setProfile_pic(item.profile_pic);
        setUsername(item.username);
        setPassword(item.password);
        setAddress(item.address);
        setGender(item.gender);
    }

    getOneCustomer();

    }, [])



    return(
        <>
        <div className="container">
        <div class="col main pt-5 mt-3">

        <center><h1>PERSONAL DETAILS</h1></center>
            <hr/>

        <form enctype="multipart/form-data">
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="first_name">First Name</label>
      <input disabled type="text" value={first_name} onChange={(event)=>setFirst_name(event.target.value)}  class="form-control" id="first_name" />
    </div>

    <div class="form-group col-md-6">
      <label for="last_name">Last Name</label>
      <input disabled type="text" value={last_name} onChange={(event)=>setLast_name(event.target.value)}  class="form-control" id="last_name" />
    </div>
  </div>

  <div class="form-group">
  <label for="address">Address</label>
      <input disabled type="text" value={address} onChange={(event)=>setAddress(event.target.value)}  class="form-control" id="address" />
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="email">Email</label>
      <input disabled type="email" value={email} onChange={(event)=>setEmail(event.target.value)}  class="form-control" id="email" />
    </div>

    <div class="form-group col-md-6">
      <label for="phone">Mobile Number</label>
      <input disabled type="text" value={phone} onChange={(event)=>setPhone(event.target.value)}  class="form-control" id="phone" />
    </div>
  </div>
  
  


  <div class="form-row">

  <div class="col">
    <label for="gender">Gender</label>
    <select disabled class="form-control" value={gender} onChange={(event)=>setGender(event.target.value)}  id="gender" placeholder="Select Gender"> 
      <option selected >Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    </div>


    <div class="col">
    <label for="province">Province</label>
    <select disabled class="form-control" value={province} onChange={(event)=>setProvince(event.target.value)}  id="province" placeholder="Select Province"> 
      <option selected >Select</option>
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
    </div>

    <div class="col">
    <label for="city">City</label>
    <select disabled class="form-control" value={city} onChange={(event)=>setCity(event.target.value)}  id="city" placeholder="Select City"> 
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
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="username">Username</label>
      <input disabled type="text" value={username} onChange={(event)=>setUsername(event.target.value)}  class="form-control" id="username" />
    </div>

    <div class="form-group col-md-6">
      <label for="passowrd">Password</label>
      <input disabled type="password" value={password} onChange={(event)=>setPassword(event.target.value)}  class="form-control" id="password" />
    </div>
  </div>


 
  <div class="form-group">
  <div class="" >
    <div class="">
    
    <Link to="/customer/edit_customer" ><button type="" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> EDIT DETAILS </button></Link>

    </div>
  </div>
</div>
  

</form>
            
        </div>
        </div>
        </>
    );

}


export default CustomerManagerDashboard;