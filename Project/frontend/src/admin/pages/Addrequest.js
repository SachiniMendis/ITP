import React,{useState, useEffect} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { api } from "../../config";
import { useNavigate, useParams } from "react-router-dom";

export default function AddRequest(){
    const [requestId,setID]=useState("");
    const [date,setDate]=useState("");
    const [des,setDes]=useState("");
    const [qty,setQty]=useState(null);
    const [stat,setStat]=useState("");

    const navigate = useNavigate();
    const params = useParams();

    const { id } = useParams();
    const [isCreateForm, setIsCreateForm] = useState(!id);


    useEffect(() => {
           
        setID("");
        setDate("");
        setDes("");
        setQty("");
        setStat(null)

    
               

        const getRequest=async()=>{
    
            const result=await axios.get(`${api}/request/get/${params.id}`);
    
            const item=result.data;

            
            setID(item.requestId);
            setDate(item.date);
            setDes(item.des);
            setQty(item.qty);

            
    
    console.log(item)
    
    
        }
    
        if(params.id){
            getRequest();
        }

        setIsCreateForm(!id);
    
    }, [params.id])



  function sendRequestData(e){
    e.preventDefault();

    
    const request = {
        requestId,
        date,
        des,
        qty,
        stat
    }

    if(params.id){

        axios.put(`${api}/request/update/${params.id}`,request).then(()=>{
   
           toast.success("Request is successfully Updated..!!");
           setTimeout(() => {
   
             navigate("/request/r_list");
         }, 1000);
   
        }).catch((err)=>{
   
         toast.error("This Request cant be updated");
         console.log(err);
    
   
        })
   
     }

     else{


    axios.post("http://localhost:8070/request/addRequest",request).then(()=>{
        toast.success('Successfully added!')
        setID("");
        setDate("");
        setDes("");
        setQty("");
        
    }).catch((err)=>{
        toast.error("Can't add Requests")
})}

  }

const currentDate = new Date().toISOString().split('T')[0]; 
return(


    <div class="col main pt-5 mt-3">


       
    
        
             
           
                
    <div  className="head">
        <div>
    <h5 class="display-6 font-weight-bold text-black">{params.id ? "Update Request" : "Add Request"}</h5></div>
    
    </div>
    
    
    
    <hr/>
    
    <div class="m-5" style={{backgroundColor:"#D9D9D9", borderRadius:"25px", width:"70%"}}>
    
    <form onSubmit={sendRequestData} enctype="multipart/form-data">
    
                        <div className="form-group" style={{marginRight:"30px",marginLeft:"30px"}}>
                            <label for="requestId">Request ID</label>
                            <input type="text" value={requestId} required className="form-control" id="requestId" placeholder="Enter Request ID" disabled={!isCreateForm}

                            onChange={(e)=>
                                {
                                    setID(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                                }}/>


            
                               
                            
                        </div>

                        <div className="form-group" style={{marginRight:"30px",marginLeft:"30px"}}>
                                <label for="description">Description</label>
                                <input type="text" value={des} required className="form-control" id="description" placeholder="Enter Description" disabled={!isCreateForm}
                                
                                onChange={(e)=>
                                {
                                    setDes(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                                }}/>
                                   
                        
                        </div>
    
                        <div className="form-group" style={{marginRight:"30px",marginLeft:"30px"}}>
                            <label for="date">Date</label>
                            <input type="Date" value={date} required  max={currentDate} className="form-control" id="date" placeholder="Enter Date" 
                            onChange={(e)=>
                                {
                                    setDate(e.target.value);//onchange state copies everything that we enter in the input field by using setName function
                                }}/>
            
                               
                            
                        </div>
            
                       
        
                        <div className="form-group" style={{marginRight:"30px",marginLeft:"30px"}}>
                            <label for="quantity">Quantity</label>
                            <input type="number" step=".00000001"value={qty} required min="1" onChange={(e)=>{ setQty(e.target.value)}} className="form-control" id="quantity" placeholder="Enter Quantity" />
                            
                            
                        </div>

    
                        <div class="form-group" style={{marginRight:"30px",marginLeft:"30px"}}>
                                <label for="status">Status</label>
                                <select class="form-control" value={stat} required onChange={(event)=>setStat(event.target.value)}  id="status" placeholder="Select Status">
                                <option selected>-----</option>
                                <option value="Incomplete" >Incomplete</option>
                                <option value="Pending">Pending</option>
                                <option value="Complete">Complete</option>
    
                              
                                </select>
    
    
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginRight:"20px",marginLeft:"20px",marginBottom:"20px",marginTop:"20px", backgroundColor:"#0B1145", }}>{params.id ? "Save Changes" : "Add"}</button>
    
      
    
    </form>
    
    </div>
    
    
    
    </div>
    
    
        )
}