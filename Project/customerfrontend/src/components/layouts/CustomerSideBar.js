
import "./CustomerSideBar.css"
import logout from '../../images/logoutBtn.png';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'

import axios from "axios";
import { api } from "../../config";




const CustomerSidebar = ({item}) => {

     const [profile_pic,setProfile_pic]=useState("");
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
               
               setProfile_pic(item.profile_pic);
           }

           getOneCustomer();

     }, [])



    return (
      <div  class="col-md-3 col-lg-2 sidebar-offcanvas pl-0 pr-0" id="sidebar" role="navigation" style={{backgroundColor:"#D9D9D9"}}>
      <ul style={{textAlign:"center"}} class="">

          

      <center>   <li class=""><a class="nav-link text-white" href="#">
          <img style={{marginTop:"10px",padding:"1px",borderRadius:"50%",width:"100px",height:"100px"}}   src={`${api}${profile_pic}`}/></a></li></center>

        
          {item.map((item) => (

               <li id='item'   class="nav-item mb-2 "><Link to={item.path} style={{color:"black"}} class="nav-link"  key={item.id}> <span className="ml-0">{item.name}</span></Link></li>

               
          ))}


   

    <center><li class="nav-item mb-1 mt-5"><a class="nav-link text-white" href="#"><img width='100px' src={logout}/></a></li></center>
 

      </ul>
 </div>
   
    )}

    export default CustomerSidebar;