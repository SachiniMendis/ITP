import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/common/EmployeeCard";
import { api } from "../../config";



export default function EmployeeDashboard(){

    const [employee,setEmployee]=useState([]);

    useEffect(() => {
        const getEmployee = async () => {
            const result = await axios.get(`${api}/employee/`);
            setEmployee(result.data)
        }
        getEmployee();
    },[])

    return(

        <div>
            <div className="container">

<nav aria-label="breadcrumb" style={{backgroundColor:"#0B1145",borderRadius:"1em"}}>
<ol class="" style={{backgroundColor:"#0B1145",borderRadius:"2em",padding:"3px"}}>
<center><h3 class="display-6 font-weight-bold text-white">Employee Manager Dashboard..!!</h3></center>
</ol>
</nav>
<br/>
<div class="row mb-3 ml-1 mr-1 pt-0 pb-0" style={{justifyContent:"center", gap:"70px"}}>

<EmployeeCard bcolor="red"  cardtext="Active Employee" value="3"/>
<EmployeeCard bcolor="green" cardtext="Total Employee" value={employee.length}/>




</div>
<br/>

<div class="container">
<div class="row" className="" >
  <h5 class="mt-3 mb-3 text-secondary">
   Employee Details
  </h5>
 
  

  </div>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>NIC</th>
                    <th>Position</th>
                  
                </tr>
            </thead>
            <tbody>

            {

employee.map((employee)=>{

return( 
<tr key={employee.id}>

<td>{employee.employee_id}</td>
<td>{employee.employee_name}</td>
<td>{employee.nic_number}</td>
<td>{employee.position}</td>



</tr>)

})

}
             
            </tbody>
        </table>
    </div>
</div>

</div>

        </div>
    )


}
