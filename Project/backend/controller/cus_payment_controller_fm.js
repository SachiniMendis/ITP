let Cus_payment = require("../models/cus_payment_fm");

const add_payment = ((req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const cardType = req.body.cardType;
    const cardNumber = req.body.cardNumber;
    const exYear = req.body.exYear;
    const exMonth = req.body.exMonth;
    const CVN = req.body.CVN;

    const newpayment = new Cus_payment({
        firstName,
        lastName,
        cardType,
        cardNumber,
        exYear,
        exMonth,
        CVN
    })
    newpayment.save().then(()=>{
        res.json("payment added")
    })
    .catch((err)=>{
        console.log(err);
    })
})



  



module.exports = {
    add_payment
}