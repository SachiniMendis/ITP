import "./styles.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import logo from '../images/toolshubicon.png';
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";







function HeaderOne(){
  const [auth,setAuth]=useState("");
  const navigate = useNavigate();
  useEffect(() => {
           
           
    const customerid=localStorage.getItem('customerid');
    const id=JSON.parse(customerid)
    setAuth(id)
    console.log(auth)
      
        

   


}, [])

const logOut=()=>{

  localStorage.clear()
  navigate("/customer/login")


}
   
    return(<>
    
    <header className="" id="header">
      <div className="top-nav" style={{backgroundColor:"#333"}}>
        <br/><br/>
        <div className="container d-flex">
        <Link to={"/"}><a href="" className="logo"><h1 style={{color:"white"}}><img style={{width:"100px"}} src={logo}/>  ToolsHUB</h1></a></Link>
          <p>Order Online Or Call Us: (001) 2222-55555</p>
          <ul className="d-flex">
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navigation" style={{backgroundColor:"#333"}}>
        <div className="nav-center container d-flex" >
        
          

          <ul className="nav-list d-flex">
            <li className="nav-item">
            <Link to={"/"}><a href="/" className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
            <Link to={"/customer/allproduct"}> <a href="product.html" className="nav-link">Shop</a></Link>
            </li>
            
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            
          </ul>

          <div className="icons d-flex" >
          <Link to={"/customer/dashboard"}><a href="login.html" className="icon">
              <i className="bx bx-user" style={{color:"white"}}></i>
            </a></Link>
            <div className="icon">
              <i className="bx bx-search" style={{color:"white"}}></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart" style={{color:"white"}}></i>
              <span className="d-flex">0</span>
            </div>
           
            <a href="cart.html" className="icon">
            <Link to={"/customer/cart"}> <i className="bx bx-cart" style={{color:"white"}}></i></Link>
              <span className="d-flex">0</span>
            </a>

            <div className="icon" style={{marginLeft:"20px"}}>{auth ? 
           ( <button type="button"  class="btn btn-dark mb-3" onClick={logOut} style={{color:"white",width:"70px",height:"30px",background:"white",color:"#333",fontSize:"15px"}}>LogOut</button>):
           (<Link to={"/customer/login"}> <button type="button" class="btn btn-dark mb-3" style={{color:"white",width:"60px",height:"30px",background:"white",color:"#333",fontSize:"15px"}}>Log In</button></Link>)
            }
            
            </div>

          </div>

          

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>
        </div>
      </div>
    </header>
    
    
    
    </>)


}


export default HeaderOne;