import { useState,useEffect } from "react";
import axios from 'axios';
import { api } from "../../config";
import {toast} from 'react-hot-toast';
import {Modal} from 'react-bootstrap';
import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
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
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [error, setError] = useState('');
  const [errorv, setErrorv] = useState('');
  const [num, setNum] = useState('');
  const [contactNumber,setcontactNumber]=useState("");
  const [address,setAddress]=useState("");
  const { totalAmount } = useParams();
  const [productCode,setProductcode]=useState("");
  const [quantity,setQuantity]=useState("");
  const [totalPrice,setTotalPrice]=useState("");
  const [productName,setProductName]=useState("");
  const [unitPrice,setUnitPrice]=useState("");
  const [status,setStatus]=useState("");
  const orderDate= new Date().toLocaleString();

  const [show,setShow]=useState(false);
  const [deleteId,seteDeleteId]=useState("");
  const [customerId,setCustomerId]=useState("123");
  const [items, setItems] = useState([]);
  const [product,setProduct]=useState([]);
  // const [deleteId,seteDeleteId]=useState("");
  // const [show,setShow]=useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");


  useEffect(() => {
         
      getproduct();
     

  }, [])

  const getproduct =async()=>{

      const result=await axios.get(`${api}/cart/getCartItems/${customerId}`);
      setItems(result.data);
      const item=result.data;
      setProductcode(item[0].productCode)
      setProductName(item[0].productName)
      setQuantity(item[0].quantity)
      setUnitPrice(item[0].unitPrice)

    

  }

  //cc
  const deleteCartItems=async()=>{

    await axios.delete(`${api}/cart/deleteItem/${customerId}`).then((res)=>{

     console.log(res);
     
     setShow(false)
     getproduct ();
     toast.success('Successfully Deleted!')
    })


 }
//cc  
  
  const addOrder=()=>{
    let i=0;
    while(i<items.length){
      
    const cart={

     productCode:items[i].productCode,
     customerId,
     productName,
     address,
     contactNumber,
     unitPrice,
     quantity:items[i].quantity,
     orderDate
     

    }


    axios.post(`${api}/order/addOrder`,cart).then(()=>{

    

     toast.success('Product is successfully Added!!');
     
}).catch((err)=>{

  toast.error("This Product cant be Added");
  console.log(err);

})

i++;
}}
  //xx
  let[p,setp]=useState(0)
  let[q,setq]=useState(0)
  let [number1,setNumber] = useState(0)
  function increment(){
      setNumber(++number1)
  }

  
  function uincrement(){
      setNumber(--number1)
  }

  
  //comment

  const handleDeleteProduct=async()=>{

    await axios.delete(`${api}/cart/deleteItem/${deleteId}`).then((res)=>{

     console.log(res);
     
     setShow(false)
     getproduct();
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

const handleCardNumberChange = (event) => {
  const { value } = event.target;
  setcontactNumber(value);
  
  

}

const handleSubmit = (event) => {
  event.preventDefault();

  
}



const handleDeleteProductall=async()=>{

  await axios.delete(`${api}/cart/deleteAllItem/${customerId}`).then((res)=>{

   console.log(res);
   
   setShow(false)
   getproduct ();
   toast.success('Successfully Deleted!')
  })


}

// const addaddOrder=()=>{
    
//   const cart={

   
//   }


//   axios.post(`${api}/cart/addItemToCart`,cart).then(()=>{

  

//    toast.success('Product is successfully Added!!');
   
// }).catch((err)=>{

// toast.error("This Product cant be Added");
// console.log(err);

// })


// }

const handleNumChange = event => {
  const limit = 10;
  const value = event.target.value;

  if (value.length < limit) {
    setError('Phone number must be at least 10 digits long');
    setIsSubmitDisabled(true);
  } else {
    setError('');
    
    setIsSubmitDisabled(false);
  }
  setcontactNumber(value.slice(0, limit));
};

const handleVisaNumChange = event => {
  const limit = 16;
  const value = event.target.value;

  if (value.length < limit) {
    setErrorv('Visa Card number must be at least 16 digits long');
    setIsSubmitDisabled(true);
    
  } else {
    setErrorv('');
    setIsSubmitDisabled(false);
    //setNum(value.slice(0, limit));
  }
  setCardNumber(value.slice(0, limit));
};

console.log(num);


    return(<>
        <div class ="container">
              <div class="row">
                <div class="col-sm-8">
     
                <table>
      
     
      {
        items.length >0 && items.map((item)=>{
          
          const vari=item.unitPrice;
          return(
             <tr>
           
            
              <td>
              <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4 ">
                <div class="card-header py-3">
                  <h5 class="mb-0">{item.title}</h5>
                </div>
                <div class="card-body">
                
                  <div class="row">
                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                     
                      <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="https://i.postimg.cc/ZRFR5mXV/powerdrills-2048px-0568.jpg"
                          class="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                          <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                        </a>
                      </div>
                     
                    </div>
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
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
                     
                      
                     
                    </div>
      
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                     
                      <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                        
      
                        <div class="form-outline">
                          <input id="form1" min="1" name="quantity" value={p=item.quantity} type="number" class="form-control" />
                          <label class="form-label" for="form1" >Quantity</label>
                        </div>
      
                        
                      </div>
                     
                      <p class="text-start text-md-center">
                        <strong>{q=item.unitPrice}</strong>
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
                  <div class="col-sm-4">


<form class="mb-5" onSubmit={()=>{addOrder();handleDeleteProductall(customerId)}}>

    <div class="form-outline mb-5"><br></br>
     Address
     <input type="text" id="address" class="form-control form-control-lg" size="17"
      value={address} onChange={(event) =>setAddress(event.target.value)}  required/>
     Contact Number  
     <input type="number" id="num" class="form-control form-control-lg" size="17"  
   
      value={contactNumber} onChange={handleNumChange}required minlength="10"/>
       {error && <p>{error}</p>}
     Visa Card Number
    <input type="text" id="typeText" class="form-control form-control-lg" siez="17" 
    value={cardNumber} onChange={handleVisaNumChange} required/> 
    {errorv && <p>{errorv}</p>}

     Name on card
    <input type="text" id="typeName" class="form-control form-control-lg" siez="17" required/>
 
  </div>

  <div class="row">
  <div class="col-md-6 mb-5">
    <div class="form-outline">
      <input type="month" id="typeExp" class="form-control form-control-lg" required
        size="7"  minlength="7" maxlength="7" />
      <label class="form-label" for="typeExp">Expiration</label>
    </div>
  </div>
  <div class="col-md-6 mb-5">
    <div class="form-outline">
      <input type="password" id="typeText" class="form-control form-control-lg"
        required size="1" minlength="3" maxlength="3"  />
      <label class="form-label" for="typeText">Cvv</label>
    </div>
  </div>
  </div>
  <button type="submit" disabled={isSubmitDisabled}  id="submit"class="btn btn-primary btn-block btn-lg"  style={{backgroundColor: "#f2c800"}}>Buy now</button>
  <br></br>
  <br></br>
</form>
    
<hr class="mb-4" style={{height: "2px", backgroundColor: "#1266f1",opacity: "1"}}/>

                      
<div class="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: "#e1f5fe"}}>
  <h5 class="fw-bold mb-0">Total:</h5>
  <h5 class="fw-bold mb-0">{totalAmount}</h5>

</div> 
<h5 class="fw-bold mb-5">
  <a href="#!"><i class="fas fa-angle-left me-2"></i>Back to shopping</a>
</h5> 
                  </div>
              </div>
            </div>


                
</>)



 }