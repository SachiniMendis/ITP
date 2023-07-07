const employee = require("../models/employees_em");
let Employee = require("../models/employees_em");

//Add new employee
const addemployee = async(req,res)=>{
    const employee_name = req.body.employee_name;
    const employee_id = req.body.employee_id;
    const nic_number = req.body.nic_number;
    const position = req.body.position;
    const registered_date = req.body.registered_date;
    const Address = req.body.address;
    const mobile_number = req.body.mobile_number;
    const user_name = req.body.user_name;
    const password = req.body.password;
   // const no_of_day_worked = req.body.no_of_day_worked;

    const newEmployee = new Employee({

        employee_name,
        employee_id,
        nic_number,
        position,
        registered_date,
        Address,
        mobile_number,
        user_name,
        password
        //no_of_day_worked

    })
//then is java script promise
    newEmployee.save().then(() => {
        res.json("Employee Added");
    }).catch((err) => {
        console.log(err);
    })
}


//Display all Employees
const getEmployee = async(req,res) =>{
    Employee.find().then((employees) => {
        res.json(employees)
    }).catch((err) => {
        console.log(err);
    })

}

//update employee using id
const updateEmployee = async(req,res) => {
    let empId = req.params.id; 
    const { employee_name,employee_id,nic_number,position,registered_date,address,mobile_number,user_name,password } = req.body;
    const updateEmployee = {
        employee_name,
        employee_id,
        nic_number,
        position,
        registered_date,
        address,
        mobile_number,
        user_name,
        password
        
    }


const update = await Employee.findByIdAndUpdate(empId, updateEmployee).then(() => {
    res.status(200).send({status: "employee Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Update Error",error:err.message})
})
}

//delete employee
const deleteEmployee = async(req,res) => {
    let empId = req.params.id;
    await Employee.findByIdAndDelete(empId).then(() => {
        res.status(200).send({status: "employee deleted"})
    }).catch((err) => {
        res.status(500).send({status: "Delete Error",error:err.message})
    })
}

//Display one employee using ID

const getOneEmployee = async(req,res) => {
    let empId = req.params.id;
    await employee.findById(empId).then((employees) =>  {
        res.json(employees)
    }).catch((err)  => {
        res.status(500).send({status: "Error with get employee",error: err.message});
    })
}

const search_employee_em=async(req,res)=>{
    let searchKey=req.params.key;
     await Employee.find({
         "$or":[
             {
                 employee_name:{$regex:searchKey}
             },
             {
                 employee_id:{$regex:searchKey}
             },
             {
                position : {$regex:searchKey}
             }
         ]
     }).then((employee)=>{
         
         res.json(employee);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search employee",error:err.message});
 
     })
 
 
 }





module.exports = {
    addemployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
    getOneEmployee,
    search_employee_em
};




