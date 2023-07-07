let Expense = require("../models/expense_fm");

const add_expense = ((req,res)=>{
    const date = (req.body.date);
    const ename = req.body.ename;
    const evalue = req.body.evalue;

    const newExpense = new Expense({
        date,
        ename,
        evalue
    })
    newExpense.save().then(()=>{
        res.json("Expense added")
    })
    .catch((err)=>{
        console.log(err);
    })
})

const get_expense = ((req,res)=>{
    Expense.find().then((expenses)=>{
        res.json(expenses)
    }).catch((err)=>{
        console.log(err)
    })
})


const update_expense = (async(req,res)=>{
    let eID = req.params.expenseId;
    const {date,ename,evalue}=req.body;                       //D-structure

    const updateExpense = {
        date,
        ename,
        evalue
    }
    const update = await Expense.findByIdAndUpdate(eID,updateExpense).then(()=>{
        res.status(200).send({status:"Expense updated"});
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({status:"An error",error:err.message});
    })
    
})

const delete_expense = (async(req,res)=>{
    let eID = req.params.expenseId;
    await Expense.findByIdAndDelete(eID).then(()=>{
        res.status(200).send({status:"expense deleted"});

    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"An error",error:err.message});
    })
})
const get_one_expense=async(req,res)=>{

    let proId=req.params.expenseId;
    await Expense.findById(proId).then((expenses)=>{
        res.json(expenses);
    }).catch((err)=>{

        res.status(500).send({status:"Error with get product",error:err.message});

    })

}

//search expenses
const search_expense=async(req,res)=>{
    let sKey=req.params.key;
     await Expense.find({
         "$or":[
             {
                 ename:{$regex:sKey}
             },
            

             
         ]
     }).then((expenses)=>{
         
         res.json(expenses);
     }).catch((err)=>{
         res.status(500).send({status:"Error with Search expenses",error:err.message});
 
     })
 
 
 }


module.exports = {
    add_expense,
    get_expense,
    update_expense,
    delete_expense,
    get_one_expense,
    search_expense
}