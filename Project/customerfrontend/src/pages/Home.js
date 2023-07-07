import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import "./styles.css";
import logo from '../images/toolshubicon.png';
import wallpaper from '../images/1880039.jpg';
import cat1 from '../images/bulb.jpg';
import cat2 from '../images/wallpaper.jpg';
import cat3 from '../images/safe.jpg';
import { useNavigate, useParams } from "react-router-dom";



function Home(){

  const [items, setItems] = useState([]);
  const [auth,setAuth]=useState("");
  const navigate = useNavigate();

  

  useEffect(() => {
           
           
    const customerid=localStorage.getItem('customerid');
    const id=JSON.parse(customerid)
    setAuth(id)
    console.log(auth)
      
        

    getproduct();
   


}, [])

const getproduct =async()=>{

    const result=await axios.get(`http://localhost:8070/product/get_product`);
    setItems(result.data);
    console.log(result.data);
    
}
const logOut=()=>{

  localStorage.clear()
  navigate("/customer/login")


}



    return(<>
     <header className="header" id="header">
      <div className="top-nav" style={{backgroundColor:"#333"}}>
        <br/><br/>
        <div className="container d-flex">
        <Link to={""}><a href="" className="logo"><h1 style={{color:"white"}}><img style={{width:"100px"}} src={logo}/>  ToolsHUB</h1></a></Link>
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
            <Link to={""}><a href="/" className="nav-link">Home</a></Link>
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
<br/>
     <div className="hero">
      <img src={wallpaper} style={{width:"100%"}}></img>
</div>

   </header>

   <section class="section category">
     <div class="cat-center">
       <div class="cat">
         <img src={cat1} alt="" />
         <div>
           <p>ELECTRONICS</p>
         </div>
       </div>
       <div class="cat">
         <img src={cat2} alt="" />
         <div>
           <p>ACCESSORIES</p>
         </div>
       </div>
       <div class="cat">
         <img src={cat3} alt="" />
         <div>
           <p>SAFETY ITEMS</p>
         </div>
       </div>
     </div>
   </section>

  
   <section class="section new-arrival">
     <div class="title">
       <h1>HOT DEALS</h1>
       <p>All the latest items of our store</p>
     </div>

     <div class="product-center">
       
      
       
      
       
    
     {
                    
                    items.length >0  &&   items.map((item) => (


                     
                        item.hotdeals &&(
                      <div className="product-item">
                      <div className="overlay">
                        <Link to={`/customer/productview/${item._id}`}>
                        <a href="" className="product-thumb">
                          <img src={`http://localhost:8070${item.product_img_1_url}`} alt="" />
                        </a></Link>
                      </div>
                      <div className="product-info">
                        <span>{item.product_name}</span>
                        <a href="">{item.product_name}</a>
                        <h4>Rs.{item.unit_price}</h4>
                      </div>
                      <ul className="icons">
                        <li><i className="bx bx-heart"></i></li>
                        <li><Link to={`/customer/productview/${item._id}`}><i className="bx bx-search"></i></Link></li>
                        <li><i className="bx bx-cart"></i></li>
                      </ul>
                    </div>)
                  
                 
   
   
               ))}
     </div>
   </section>


 

   <section class="section banner" style={{backgroundColor:"#333333",color:"white"}}>
<div class="left">
 <span class="trend">Trend Items</span>
 <h1 style={{color:"white"}}>New Collection 2023</h1>
 <p>New Arrival <span class="color">Sale 50% OFF</span> Limited Time Offer</p>
 <Link to={"/customer/allproduct"}><a href="#" class="btn btn-dark mb-3" style={{color:"white",width:"100px",height:"30px",background:"white",color:"#333",fontSize:"15px"}}>Discover Now</a></Link>
</div>
<div class="right">
 <img src="./images/banner.png" alt=""/>
</div>
   </section>




 
   <section class="section new-arrival">
     <div class="title">
       <h1>Featured</h1>
       <p>All the latest picked from designer of our store</p>
     </div>

     <div class="product-center">
       
    
      
     {
                    
                    items.length >0  &&   items.map((item) => (


                     
                        item.featured &&(
                      <div className="product-item">
                      <div className="overlay">
                        <Link to={`/customer/productview/${item._id}`}>
                        <a href="" className="product-thumb">
                          <img src={`http://localhost:8070${item.product_img_1_url}`} alt="" />
                        </a></Link>
                      </div>
                      <div className="product-info">
                        <span>{item.product_name}</span>
                        <a href="">{item.product_name}</a>
                        <h4>Rs.{item.unit_price}</h4>
                      </div>
                      <ul className="icons">
                        <li><i className="bx bx-heart"></i></li>
                        <li><Link to={`/customer/productview/${item._id}`}><i className="bx bx-search"></i></Link></li>
                        <li><i className="bx bx-cart"></i></li>
                      </ul>
                    </div>)
                  
                 
   
   
               ))}
     </div>

   </section>

   
   

 
   <footer class="footer" style={{backgroundColor:"#333"}}>
     <div class="row" >
       <div class="col d-flex">
         <h4>INFORMATION</h4>
         <a href="">About us</a>
         <a href="">Contact Us</a>
         <a href="">Term & Conditions</a>
         <a href="">Shipping Guide</a>
       </div>
       <div class="col d-flex">
         <h4>USEFUL LINK</h4>
         <a href="">Online Store</a>
         <a href="">Customer Services</a>
         <a href="">Promotion</a>
         <a href="">Top Brands</a>
       </div>
       <div class="col d-flex">
         <span><i class='bx bxl-facebook-square'></i></span>
         <span><i class='bx bxl-instagram-alt' ></i></span>
         <span><i class='bx bxl-github' ></i></span>
         <span><i class='bx bxl-twitter' ></i></span>
         <span><i class='bx bxl-pinterest' ></i></span>
       </div>
     </div>
   </footer>


 
    
    </>)

}

export default Home;