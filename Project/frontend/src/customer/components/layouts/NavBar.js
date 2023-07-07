import React from 'react'
import logo from '../images/toolshubicon.png';
import { Link } from 'react-router-dom';
 
export const Navbar = () => {
    return (
        <div >
        
        <div style={{padding:"0"}} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{background:"#333333"}}>
  <Link to = ""><img style={{height:"60px",padding:"10px"}} src={logo}/></Link>
    
    <div  class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form style={{textAlign:"center"}} class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

    <Link to = "/customer/dashboard"><a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>User Account</a></Link>
    <Link to = "/customer/addCustomer" ><a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Register</a></Link>


  </div>

</div>
      


<div style={{padding:"0"}} class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{background:"#333333"}}>
    
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ALL CATEGORIES
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>


        

        
        <li class="nav-item">
          <Link to ="/"><a class="nav-link" href="#">HOME</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SPECIAL OFFERS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT US</a>
        </li>
       
        
        
      </ul>
      
      
    </div>
    <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>0 ITEMS</a>
  </div>

  
</div>

</div>



        

    )
}
