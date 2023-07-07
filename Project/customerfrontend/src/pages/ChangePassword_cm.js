import axios from "axios";
import { useEffect, useState, useNavigate, useParams  } from "react";
import { api } from "../config";


export default function ChangePassword_cm() {

    return(
        
            <div className="container">
        <div class="col main pt-5 mt-3">

        <center><h1>CHANGE PASSWORD</h1></center>
            <hr/>

            <form enctype="multipart/form-data">

            <div class="form-group">
                <label for="password">CURRENTPASSWORD</label>
                    <input type="password"    class="form-control" id="" />
                </div>

                <div class="form-group">
                <label for="password">NEW PASSWORD</label>
                    <input type="password"    class="form-control" id="" />
                </div>

                <div class="form-group">
                <label for="password">CONFIRM NEW PASSWORD</label>
                    <input type="password"    class="form-control" id="" />
                </div>
        

                <div class="form-row mt-4" >
    <div class="form-group col-md-6" style={{alignItems:"center",justifyContent:"center"}}>
     
    <button type="reset" class="btn  btn-lg btn-block"  style={{backgroundColor:"#FF0000",color:"white"}}>CANCLE</button>

    </div>
    <div class="form-group col-md-6">
    
    <button type="submit" class="btn  btn-lg btn-block" style={{backgroundColor:"#04A80A",color:"white"}}> SUBMIT </button>

    </div>
  </div>





            </form>


            </div>
        </div>
        
    )
}