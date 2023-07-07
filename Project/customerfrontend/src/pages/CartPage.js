import { useState,useEffect } from "react";
import axios from 'axios';
import { api } from "../config";
import {toast} from 'react-hot-toast';
import {Modal} from 'react-bootstrap';
import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";


import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
 
  TableContainer,
 
} from '@chakra-ui/react'






export default function Cart(){



  const [totalPrice, setTotalPrice] = useState(0);
  const [show,setShow]=useState(false);
  const [deleteId,seteDeleteId]=useState("");
  
  const [customerId,setCusid]=useState("");
  const [items, setItems] = useState([]);
  
  

  const [product,setProduct]=useState([]);
  const navigate = useNavigate();

  // const [deleteId,seteDeleteId]=useState("");
  // const [show,setShow]=useState(false);

  useEffect(() => {

    // const customerid=localStorage.getItem('customerid');
    // const id=JSON.parse(customerid)
    // setCusid(id)
    // console.log(customerId)
    

         
    getCartItems ();
     

  }, [])

  const getCartItems  =async()=>{

      const result=await axios.get(`${api}/cart/getCartItems/${JSON.parse(localStorage.getItem('customerid'))}`);
      setItems(result.data);
      calculateTotalPrice(result.data);
      console.log(result.data);
      const item=result.data;
     
      


  }

  //cc

  let[s,sets]=useState(250)
  let[p,setp]=useState(0)
  let[q,setq]=useState(0)
  let[tp,settp]=useState(0)
 
 
 
  
  //comment

  const handleDeleteProduct=async()=>{

    await axios.delete(`${api}/cart/deleteItem/${deleteId}`).then((res)=>{

     console.log(res);
     
     setShow(false)
     getCartItems ();
     toast.success('Successfully Deleted!')
    })


 }
 


 const handledelete=(_id)=>{
  seteDeleteId(_id)
  setShow(true)
  console.log(_id);

}


const handleClose=()=>{
  setShow(false)
}



// //update quantity
const NavigateToCheckout=(id)=>{

 
  
    navigate(`/customer/checkout/${totalPrice}`);







}
// const UpdateQuantityPlus=(id)=>{
//   console.log(id);
//   const o={
    



//   }
 
//   axios.put(`${api}/cart/updateCart/${id}`,o).then(()=>{

      
//     getCartItems ()
//       setTimeout(() => {

        
//     }, 1000);

//    }).catch((err)=>{

//     toast.error("Tcant be updated");
//     console.log(err);


//    })

// }

// const UpdateQuantityMinus=(id)=>{
//   console.log(id);
//   const o={
      


//   }
 
//   axios.put(`${api}/cart/updateCart/${id}`,o).then(()=>{

      
//     getCartItems ()
//       setTimeout(() => {

        
//     }, 1000);

//    }).catch((err)=>{

//     toast.error("Tcant be updated");
//     console.log(err);


//    })

// }

const updateQuantity = async (id, newQuantity) => {
  try {
    await axios.put(`${api}/cart/updateCart/${id}`, { quantity: newQuantity });
    getCartItems();
  } catch (error) {
    console.log(error);
    toast.error("Failed to update the quantity");
  }
};

const handleQuantityPlus = (id, quantity) => {
  const newQuantity = quantity + 1;
  updateQuantity(id, newQuantity);
};

const handleQuantityMinus = (id, quantity) => {
  if (quantity > 1) {
    const newQuantity = quantity - 1;
    updateQuantity(id, newQuantity);
  }
};
const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.unitPrice * item.quantity;
    });
    setTotalPrice(totalPrice);
  };

    return(<>

<div class="container-fluid">
  
  <div class="row">
    
    <div class="col-sm-8" >
    <table>
      
     
      {
        items.length >0 && items.map((item)=>{

          return(
           
             <tr>
           
          
              <td>
                
              <section class="h-100 gradient-custom">
        <div class="container ">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-1 ">
                <div class="card-header py-3">
                  <h5 class="mb-0">{item.title}</h5>
                </div>
                <div class="card-body">
                
                  <div class="row">
                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                     
                      <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={`${api}${item.product_img_1_url}`}
                          class="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                          <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                        </a>
                      </div>
                     
                    </div>
                    <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Delete Item</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Are You sure Delete This Product</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleDeleteProduct}>
                                OK
                            </Button>
                            <Button colorScheme="red" onClick={handleClose}>
                              Cancel
                            </Button>
                          </Modal.Footer>
                      </Modal>
                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  
                      <p><strong>{item.productName}</strong></p>
                      <p>{item.productDes}</p>
                     
                      <button type="button"  class="btn btn-primary btn-sm me-1 mb-2 mr-2" data-mdb-toggle="tooltip"
                        title="Remove item" onClick={()=>handledelete(item._id)}>
                         delete
                      </button>
                     
                     
                    </div>
      
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                     
                      <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                        <button class="btn btn-primary px-3 me-2 mr-3 mb-4" 
                         onClick={() => handleQuantityMinus(item._id, item.quantity)} style={{backgroundColor: "#f2c800",width:"30px",height:"30px"}}>
                         -
                        </button>
      
                        <div class="form-outline">
                        <label class="form-label" for="form1" >{item.quantity}</label>
                          <label class="form-label" for="form1" ></label>
                        </div>
      
                        <button class="btn btn-primary px-3 ms-2 ml-3 mb-4" 
                          onClick={() => handleQuantityPlus(item._id, item.quantity)}style={{backgroundColor: "#f2c800",width:"30px",height:"30px"}}>
                          +
                        </button>
                      </div>
                     
                      <p class="text-start text-md-center">
                      <input type="hidden" id="custId" name="custId" value={p=item.unitPrice}/>
                      <input type="hidden" id="custId" name="custId" value={q=item.quantity}/>
                        <strong></strong><br></br>
                        <strong>{p*q}</strong>
                        
                      </p>
                     
                    </div>
                  </div>
                  
                  
                  <hr class="my-4" />
      
                
                  
                
                </div>
              </div>
              
            
            </div>
           
          </div>
        </div>
      </section> 
              </td>
            </tr>
         
          
          )
          
         
})
}
</table>
    </div>
    <div class="col-md-3 mt-4 " >
    <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products Total 
                      <span>{totalPrice}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span name="v" value="250">250</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0 mr-5">(including VAT)</p>
                        </strong>
                      </div>
                      <span><strong>{totalPrice+250}</strong></span>
                    </li>
                  </ul>
      
                
                </div>
               <div > <button type="button" onClick={NavigateToCheckout} class="btn btn-primary btn-lg " style={{backgroundColor: "#f2c800",width:"350px"}} >
                    Go to checkout
                  </button></div>
               
                 
              </div>
    </div>
  </div>
</div>
     
     

<div class="col-md-4 ">
             
            
            
            </div>     
          
        </>)



 }