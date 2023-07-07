import React from "react";
import frame from '../components/images/QR.jpeg'

const ScanQR = () => {


  return (
    <div>
      
    <div>
      
       (
        <div className="col main pt-5 mt-3">
        <div className="head">
        <h5 className="display-6 font-weight-bold text-black">
        Scan QR From Here
            </h5>
            </div>
          <br></br>
          
          
          <div class="">
              <img src={frame} className="" alt="signin logo" style={{width:"500px"}}/> 
            </div>
        </div>
        </div>
      )
    </div>
    
  );
};

export default ScanQR;