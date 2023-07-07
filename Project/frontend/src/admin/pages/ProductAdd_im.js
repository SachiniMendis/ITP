import "./ProductAdd_im.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";




function ProductAdd_im(){

    const [product_code,setProductcode]=useState("");
    const [product_name,setProductname]=useState("");
    const [product_description,setProductdescription]=useState("");
    const [product_title,setProducttitle]=useState("");
    const [unit_price,setUnitprice]=useState(null);
    const [unit_type,setUnittype]=useState("");
    const [product_img_1_url,setImage1]=useState("");
    const [product_img_2_url,setImage2]=useState("");
    const [status,setStatus]=useState(true);
    const [hotdeals,setHotdeals]=useState(false);
    const [featured,setFeatured]=useState(false);
    const [discount,setDiscount]=useState(null);
    const [category_code,setCategorycode]=useState("");
    const [categoryoption,setCategoryoption]=useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const [errors, setErrors] = useState({});
    const [validationError, setValidationError] = useState('');
     





   useEffect(() => {
           
    setProductcode("");
    setProductname("");
    setProductdescription("");
    setProducttitle("");
    setUnitprice("");
    setDiscount("");
    setStatus(true);
    setImage1("");
    setImage2("");

           

    const getCategory = async () => {

        const result = await axios.get(`${api}/maincategory/get_main_category`);
        setCategoryoption(result.data);
       
    

    }

    const getproduct=async()=>{

        const result=await axios.get(`${api}/product/get_one_product/${params.id}`);

        const item=result.data;

        
        
        setProductcode(item.product_code);
        setProductname(item.product_name);
        setProductdescription(item.product_description);
        setProducttitle(item.product_title);
        setUnitprice(item.unit_price);
        setUnittype(item.unit_type);
        setImage1(item.product_img_1_url);
        setImage2(item.product_img_2_url);
        setStatus(item.status);
        setHotdeals(item.hotdeals);
        setFeatured(item.featured);
        setDiscount(item.discount);
        setCategorycode(item.category_code);




    }

    if(params.id){
        getproduct();
    }

      

    
    getCategory();


}, [params.id])
const handleUploadone = async (e) => {

  const file = e.target.files[0];
  
  const formData = new FormData();
  formData.append("image", file);
  const result1 = await axios.post(`${api}/product/upload`, formData);

    setImage1(result1.data.path);
    console.log(result1.data.path)
 
  

}

const handleUploadtwo = async (e) => {

  const file = e.target.files[0];
  
  const formData = new FormData();
  formData.append("image", file);
  const result1 = await axios.post(`${api}/product/upload`, formData);

    setImage2(result1.data.path);
    console.log(result1.data.path)
 
  

}

function validateProduct(product){

  let errors = {};
  if (!product.product_code) {
    errors.product_code = "Product Code is required";
  } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(product_code.first_name)) {
    errors.product_code = "Product Code is invalid";
  }
  else{

  }

  if (!product.unit_price) {
    errors.unit_price = "Unit price is required";
  } else if (unit_price<0) {
    errors.unit_price = "Unit Price is invalid";
  }

  if (!product.product_title) {
    errors.product_title = "Product title is required";
  }
  if (!product.product_description) {
    errors.product_description = "Product Description is required";
  }
  

 

  if (!product.category_code) {
    errors.category_code = "Product Category is required";
  }
  if (!product.unit_type) {
    errors.unit_type = "Unit type is required";
  }
  if (!product.product_name) {
    errors.product_name = "Product Name is required";
  }
  if (discount<0) {
    errors.discount = "Discount is invalid";
  }


  




  


  return errors;




}


function sendProductData(e){
  e.preventDefault();

  const product={
     
    product_code,
    product_name,
    product_description,
    product_title,
    unit_price,
    unit_type,
    product_img_1_url,
    product_img_2_url,
    status,
    hotdeals,
    featured,
    discount,
    category_code


  }

  const errors=validateProduct(product)
  setErrors(errors);

  
 if((Object.keys(errors).length === 0) && (validationError=='')){
  if(params.id){

     axios.put(`${api}/product/update_product/${params.id}`,product).then(()=>{

        toast.success("Product is successfully Updated..!!");
        setTimeout(() => {

          navigate("/inventory/p_list");
      }, 1000);

     }).catch((err)=>{

      toast.error("This Product cant be updated");
      console.log(err);
 

     })

  }
  else{



      axios.post(`${api}/product/add_product`,product).then(()=>{

        setProductcode("");
        setProductname("");
        setProductdescription("");
        setProducttitle("");
        setUnitprice("");
        setDiscount("");

        toast.success('Product is successfully Added!!');
        setTimeout(() => {

         navigate("/inventory/p_list");
     }, 1000);
   }).catch((err)=>{

     toast.error("This Product cant be Added");
     console.log(err);

   })



    
     
   
     

  }
    }



}

const handleInputChange = (event) => {
  const value = event.target.value;
  setProductcode(value);

  // Perform validation on the input value
  if (value.length<6) {
    setValidationError('Input must be 6 characters long');
  }
  else if(value.length>6){
    setValidationError('Input must be 6 characters long');

  }
  else {
    setValidationError('');
  }
};



    return(<>

<div class="col main pt-5 mt-3">

    
         
       
            
<div  className="head">
 <div>

<h5 class="display-6 font-weight-bold text-black">{params.id ? "Product Details Edit" : "Product Details"}</h5></div>


</div>



<hr/>

<div class="m-3">

<form onSubmit={sendProductData} enctype="multipart/form-data">
<div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputProductCode" onClick={()=>{toast.error("Product code cant be changed")}}>Product Code</label>
      {
        params.id ? (<input type="text" onClick={()=>{toast.error("Product code cant be changed")}}  value={product_code}  onChange={(event)=>setProductcode(event.target.value)} disabled  class="form-control" id="inputproductcode" placeholder="PCxxxxxx"/>):(<input type="text" value={product_code}  onChange={handleInputChange }  class="form-control" id="inputproductcode" placeholder="PCxxxxxx"/>)
      }
      {errors.product_code && <div className="text-danger">{errors.product_code}</div>}
      {validationError && <div className="text-danger">{validationError}</div>}


    </div>
    <div class="form-group col-md-6">
      <label for="inputProductName">Product Name</label>
      <input type="text"  value={product_name} onChange={(event)=>setProductname(event.target.value)}  class="form-control" id="inputproductname" />
      {errors.product_name && <div className="text-danger">{errors.product_name}</div>}
    </div>
  </div>
  <div class="form-group">
    <select class="form-control" value={category_code} onChange={(event)=>setCategorycode(event.target.value)}  id="exampleFormControlSelect1" placeholder="Select Product Category"> 
    <option selected>Select Product Category</option>
      {     

      
        categoryoption.map(item =>(

            <option key={item._id} value={item.main_category_code}>{item.main_category_name}</option>

        ))
      }
    </select>
    {errors.category_code && <div className="text-danger">{errors.category_code}</div>}
  </div>
  <div class="form-group">
    <label for="producttitel">Product title</label>
    <input  type="text" value={product_title} onChange={(event)=>setProducttitle(event.target.value)}  class="form-control" id="producttitle" />
    {errors.product_title && <div className="text-danger">{errors.product_title}</div>}

  </div>
  <div class="form-group">
    <label for="productdescription">Product Description</label>
    <textarea  value={product_description} onChange={(event)=>setProductdescription(event.target.value)}  class="form-control" id="productdescription" rows="3"></textarea>
    {errors.product_description && <div className="text-danger" style={{fontSize:"10sp"}}>{errors.product_description}</div>}

  </div>


  <div class="form-row">
    <div class="col">
      
    <label for="unittype">Unit Type</label>
    <select class="form-control" value={unit_type} onChange={(event)=>setUnittype(event.target.value)}  id="exampleFormControlSelect1" placeholder="Select Product Category"> 
      <option selected >--</option>
      <option value="1kg">1kg</option>
      <option value="1pack">1 pack</option>
      <option value="1m">1m</option>
      <option value="1 peice">1 peice</option>
    
  
      
    </select>
    {errors.unit_type && <div className="text-danger">{errors.unit_type}</div>}

    </div>
    <div class="col">
      <label for="unitprice">Unit Price</label> 
      <input  type="number" value={unit_price}  onChange={(event)=>setUnitprice(event.target.value)}  class="form-control" placeholder="Rs xx.xx"/>
      {errors.unit_price && <div className="text-danger">{errors.unit_price}</div>}

    </div>
    <div class="col">
     <label for="unitprice">Discount(%)</label> 
      <input  type="number" value={discount} onChange={(event)=>setDiscount(event.target.value)}  class="form-control" placeholder="xx%"/>
      {errors.discount && <div className="text-danger">{errors.discount}</div>}

    </div>
  </div>

  <div class="form-row mt-3">
    <div class="col">
      
    <label for="unittype">Product Status</label>
    <select class="form-control" value={status} onChange={(event)=>setStatus(event.target.value==="true")} id="exampleFormControlSelect1" placeholder="Select Product Category"> 
      
      <option value={true}>Active</option>
      <option value={false}>Inactive</option>
     
    
    
      
    </select>

    </div>
    <div class="col">
      <label for="unitprice">Is it Hot deal Product?</label> 
      <select  class="form-control"  value={hotdeals} onChange={(event)=>setHotdeals(event.target.value==="true")}  id="exampleFormControlSelect1" placeholder="Select Product Category"> 

      <option value={true}>Yes</option>
      <option value={false} selected>No</option>
    </select>

    </div>
    <div class="col">
     <label for="unitprice">Is it featured Product?</label> 
     <select  value={featured} onChange={(event)=>setFeatured(event.target.value==="true")}  class="form-control" id="exampleFormControlSelect1" placeholder="Select Product Category"> 

<option value={true}>Yes</option>
<option value={false} selected>No</option>
</select>

    </div>
  </div>
  <label class="mt-3" for="unitprice">Choose Product Images</label> 

  <div class="form-row " >
    
    <div class="form-group col-md-6">
    <div class="custom-file">
  <input type="file" onChange={handleUploadone} class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Choose Product Image one
  
  </label>
</div>
    </div>
    <div class="form-group col-md-6">
    <div class="custom-file">
  <input type="file" onChange={handleUploadtwo} class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="ChooseProductImage1">Choose Product Image two</label>
</div>
    </div>
  </div>

  <div>

    <div>

    </div>


  </div>
  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
     
{
   product_img_1_url && (<img src={`${api}${product_img_1_url}`}  class="rounded float-right w-50  " alt="..."/>)}

    </div>
    <div class="form-group col-md-6">
    
    {
   product_img_2_url && (<img src={`${api}${product_img_2_url}`}  class="rounded float-left w-50  " alt="..."/>)}

    </div>
  </div>
 

  <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#0B1145",color:"white"}}>Reset Details</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#0B1145",color:"white"}}> {params.id ? "Save Change" : "Submit Details"}</button>

    </div>
  </div>

  

</form>

</div>



</div>




    </>)
}

export default ProductAdd_im;

