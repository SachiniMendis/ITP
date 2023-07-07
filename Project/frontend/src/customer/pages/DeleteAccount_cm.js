import axios from "axios";
import { useEffect, useState, useNavigate, useParams  } from "react";
import { api } from "../../config";


export default function DeleteAccount_cm() {

    return(
        
            <div className="container">
        <div class="col main pt-5 mt-3">

        <center><h1>DELETE ACCOUNT</h1></center>
            <hr/>
        <br/>
        <h4><center>Confirm Account Deletion</center></h4>
        <br/>
        <div className="container">
       <center> <p>
We're sorry to see you go. Once your account is deleted, all of your content <br/> will be permanently gone, including your profile, purchase history and Order history. <br/> 
If you're not sure about that, we suggest you deactivate or <br/> contact toolhub2343@gmail.com instead. </p></center>
        </div>
            <form enctype="multipart/form-data">

            <div class="form-group">
                <label for="password"></label>
                    <input type="password"    class="form-control" id="" />
                </div>

                <br/>

        <center><h3>To confirm deletion, type "DELETE" above ! </h3></center>

                <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#FF0000",color:"white"}}>CANCLE</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> CONFIRM DELETE </button>

    </div>
  </div>





            </form>


            </div>
        </div>
        
    )
}