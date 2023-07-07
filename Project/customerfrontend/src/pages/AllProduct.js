import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';





function AllProduct(){

  const [items, setItems] = useState([]);

  useEffect(() => {
           
           

      
        

    getproduct();
   


}, [])

const getproduct =async()=>{

    const result=await axios.get(`http://localhost:8070/product/get_product`);
    setItems(result.data);
    console.log(result.data);

}


    return(

        
      <>
   

   <section className="section all-products" id="products">
  <div className="top container">
    <h1>All Products</h1>
    <form>
      <select>
        <option value="1">Defualt Sorting</option>
        <option value="2">Sort By Price</option>
        <option value="3">Sort By Popularity</option>
        <option value="4">Sort By Sale</option>
        <option value="5">Sort By Rating</option>
      </select>
      <span><i className="bx bx-chevron-down"></i></span>
    </form>
  </div>
  <div className="product-center container">

  {
                    
                    items.length >0  &&   items.map((item) => (
                   
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
                    </div>
                      
                 
   
   
               ))}
    <div className="product-item">
      <div className="overlay">
        <a href="" className="product-thumb">
          <img src="./images/product-4.jpg" alt="" />
        </a>
      </div>
      <div className="product-info">
        <span>MEN'S CLOTHES</span>
        <a href="">Concepts Solid Pink Men’s Polo</a>
        <h4>$150</h4>
      </div>
      <ul className="icons">
        <li><i className="bx bx-heart"></i></li>
        <li><i className="bx bx-search"></i></li>
        <li><i className="bx bx-cart"></i></li>
      </ul>
    </div>
  </div>
</section>
<section className="pagination">
  <div className="container">
    <span>1</span> <span>2</span> <span>3</span> <span>4</span>
    <span><i className="bx bx-right-arrow-alt"></i></span>
  </div>
</section>

   
      
      
      
      </>
    

   


       
    )
}

export default AllProduct;