const pdf=require('html-pdf')
const path=require('path')

const pdfTemplate=require("../models/financeDocument_fm")
const createPdf =(req,res)=>{

  pdf.create(pdfTemplate(req.body),{}).toFile('expenseReport.pdf',(err)=>{

    if(err){
        console.log(err);
    }

    res.send('pdf generated')

  })

}


const fetchPdf=(req,res)=>{


    res.sendFile(path.join(__dirname,'../expenseReport.pdf'))
}


module.exports={

   createPdf,
   fetchPdf

}