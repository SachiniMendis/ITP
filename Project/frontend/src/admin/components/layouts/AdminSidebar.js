import logo from '../images/toolshubicon.png';
import "./AdminSidebar.css"
import logout from '../images/logoutBtn.png';
import { Link } from "react-router-dom";
import React from 'react'
import { useNavigate } from "react-router-dom";




const AdminSidebar = ({item}) => {

     const navigate = useNavigate();


     const logoutHandle=()=>{

          navigate("/adminlogin");

     }

    return (
      <div  class="col-md-3 col-lg-2 sidebar-offcanvas pl-0 pr-0" id="sidebar" role="navigation" style={{backgroundColor:"#0B1145"}}>
      <ul style={{textAlign:"center"}} class="nav flex-column sticky-top pl-0 pt-5 p-0 mt-3 d-block ">

          

      <center>   <li class="nav-item mb-3 mt-3"><a class="nav-link text-white" href="#"><img height="110px" src={logo}/></a></li></center>

        
          {item.map((item) => (

               <li id='item'  class="nav-item mb-2 "><Link to={item.path} class="nav-link"  key={item.id}> <span className="ml-0">{item.name}</span></Link></li>

               
          ))}


   

    <center><li class="nav-item mb-1 mt-5"><a class="nav-link text-white" href="#"><img width='100px' onClick={logoutHandle} src={logout}/></a></li></center>
 

      </ul>
 </div>
   
    )}

    export default AdminSidebar;