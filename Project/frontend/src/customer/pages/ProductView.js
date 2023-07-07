import { useState,useEffect } from "react";
 import axios from 'axios';
import { api } from "../../config";
import {toast} from 'react-hot-toast';
import './Cart.css';
import { useNavigate, useParams } from "react-router-dom";


 


 export default function ProductView(){


  let[s,sets]=useState(250)
  let[p,setp]=useState(0)
  let [quantity,setNumber] = useState(1)
  const [productDescription,setProductdescription]=useState("");
  const [productName,setproduct_name]=useState("");
  const [unitPrice,setunit_price]=useState("");
  const navigate = useNavigate();



  function increment(){
      setNumber(++quantity)
  }

  
  function uincrement(){
      setNumber(--quantity)
  }

  const [items, setItems] = useState([]);
  const [productCode,setProductcode]=useState("64421a8868e944312e866c27");
  const [customerId,setCusid]=useState("123");
 
  

//COMME
useEffect(() => {
         
  getproduct();
 

}, [])

const getproduct =async()=>{

  const result=await axios.get(`${api}/product/get_one_product/${productCode}`);
  const item=result.data;
  setProductdescription(item.product_description)
  setproduct_name(item.product_name)
  setunit_price(item.unit_price)
 


}



  //COMMME

  const addToCart=()=>{
    
       const cart={

        productCode,
        customerId,
        productName,
        productDescription,
        unitPrice,
        quantity

       }


       axios.post(`${api}/cart/addItemToCart`,cart).then(()=>{

       

        toast.success('Product is successfully Added!!');
        navigate("/customer/cart");

        
   }).catch((err)=>{

     toast.error("This Product cant be Added");
     console.log(err);

   })


}


    return(
    
     
<div class="container">
<div class="row">
    <div class="col-md-7 mt-2">
    
    <img src="https://i.postimg.cc/ZRFR5mXV/powerdrills-2048px-0568.jpg" class="img-rounded" alt="Cinque Terre" width="80%" height="50%"/> 
      </div>
      <div class="col-md-4 mt-2">
      <table align="center">
        <tr>
          <td width="100%" style={{maxWidth:"250px",fontFamily:"ChoqueDisplaySSi",fontStyle:"bold",fontSize:"25px"}}>{productName}</td>          
        </tr>
        <tr>
        <td style={{maxWidth:"250px",fontFamily:"arial",fontStyle:"bold",fontSize:"20px"}}>{productDescription}</td>
        </tr>
        <tr>          
        <td style={{maxWidth:"250px",fontFamily:"Bowlby One",fontFamily:"ChoqueDisplaySSi",fontStyle:"bold",fontSize:"40px"}}>RS.{unitPrice}.</td>
        
        </tr>
        <tr>
          <td>
          <td>
        <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                        <button class="btn btn-primary px-3 me-2 mr-3 mb-4"
                          onClick={e =>uincrement()} style={{backgroundColor: "#f2c800"}}>
                          <i class="fas fa-minus"></i>
                        </button>
      
                        
                          <input id="form1" min="1" name="quantity" value={quantity} type="number" />
                          
                        
      
                        <button class="btn btn-primary px-3 ms-2 ml-3 mb-4" 
                          onClick={e =>increment()} style={{backgroundColor: "#f2c800"}}>
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
        </td>
          </td>
        </tr>
        <tr>
          <td>
          <button type="button" class="btn btn-primary btn-lg "  onClick={()=>addToCart()} style={{backgroundColor: "#f2c800",width:"300px"}} >
                    Add to Cart
                  </button>

          </td>
        </tr>
      </table>

</div>
      </div>
      </div>
      
      )

}