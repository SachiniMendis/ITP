import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import { api } from "../config";


function ProductView() {
  let[s,sets]=useState(250)
  let[p,setp]=useState(0)
   let [quantity,setNumber] = useState(1)
  const [productCode, setProductcode] = useState("");
  const [productName, setProductname] = useState("");
  const [productDescription, setProductdescription] = useState("");
  const [product_title, setProducttitle] = useState("");
  const [unitPrice,setunit_price]=useState("");
  const [unit_type, setUnittype] = useState("");
  const [product_img_1_url, setImage1] = useState("");
  const [product_img_2_url, setImage2] = useState("");
  const [status, setStatus] = useState(true);
  const [hotdeals, setHotdeals] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [discount, setDiscount] = useState(null);
  const [category_code, setCategorycode] = useState("");
  const [categoryoption, setCategoryoption] = useState([]);
  const [items, setItems] = useState([]);
  const [customerId,setCusid]=useState(JSON.parse(localStorage.getItem('customerid')));
  const navigate = useNavigate();
  const params = useParams();
  const [auth,setAuth]=useState("");

  function increment(){
      setNumber(++quantity)
  }

  
  function uincrement(){
      setNumber(--quantity)
  }

  useEffect(() => {
    setProductcode("");
    setProductname("");
    setProductdescription("");
    setProducttitle("");
    setunit_price("");
    setDiscount("");
    setStatus(true);
    setImage1("");
    setImage2("");


    const customerid=localStorage.getItem('customerid');
    const id=JSON.parse(customerid)
    setCusid(id)
    console.log(customerId)
    


    const getproduct = async () => {
      const result = await axios.get(
        `http://localhost:8070/product/get_one_product/${params.id}`
      );

      const item = result.data;

      setProductcode(item.product_code);
      setProductname(item.product_name);
      setProductdescription(item.product_description);
      setProducttitle(item.product_title);
      setunit_price(item.unit_price)
 
      setUnittype(item.unit_type);
      setImage1(item.product_img_1_url);
      setImage2(item.product_img_2_url);
      setHotdeals(item.hotdeals);
      setFeatured(item.featured);
      setDiscount(item.discount);
    };

    getproduct();
    getallproduct();
  }, [params.id]);

  const getallproduct =async()=>{

    const result=await axios.get(`http://localhost:8070/product/get_product`);
    setItems(result.data);
    console.log(result.data);

}
const addToCart=()=>{
    
  const cart={

   productCode,
   customerId,
   productName,
   productDescription,
   unitPrice,
   quantity,
   product_img_1_url

  }


  axios.post(`http://localhost:8070/cart/addItemToCart`,cart).then(()=>{

  

   toast.success('Product is successfully Added!!');
   navigate("/customer/cart");

   
}).catch((err)=>{

toast.error("This Product cant be Added");
console.log(err);

})


}



  return (
    <>
      <section className="section product-detail">
        <div className="details container">
          <div className="left image-container">
            <div className="main">
              <img
                src={`http://localhost:8070${product_img_1_url}`}
                id="zoom"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <span>{productName}</span>
            <h2>{product_title}</h2>
            <div className="price" style={{fontSize:"30px",color:"red"}}>Rs.{unitPrice}</div>

          
            

          
            <h3>Product Detail</h3>
            <p>{productDescription}</p>
            <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                        <button class="btn btn-primary px-3 me-2 mr-3 mb-4"
                          onClick={e =>uincrement()} style={{backgroundColor: "#f2c800",width:"30px",height:"30px"}}>
                            -
                        </button>                       
                          <input id="form1" min="1" name="quantity" value={quantity} type="number" class="form-control" style={{width:"45px",height:"45px",fontSize:"18px"}} />           
                       
      
                        <button class="btn btn-primary px-3 ms-2 ml-3 mb-4" 
                          onClick={e =>increment()} style={{backgroundColor: "#f2c800",width:"30px",height:"30px"}}>
                          +
                        </button>
                        
                      </div>
                      <button type="button" class="btn btn-primary btn-lg "  onClick={()=>addToCart()} style={{backgroundColor: "#f2c800",width:"300px"}} >
            Add to Cart
                  </button>
          </div>
          
        </div>
        
      </section>

      <section className="section featured">
        <div className="top container">
          <h1>Related Products</h1>
          <a href="#" className="view-more">
            View more
          </a>
        </div>
        <div className="product-center container">
          {items.length > 0 &&
            items.map((item) => (
             
                
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

          
        </div>
      </section>

    </>
  );
}

export default ProductView;
