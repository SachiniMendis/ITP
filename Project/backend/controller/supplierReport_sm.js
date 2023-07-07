const pdf=require('html-pdf')
const path=require('path')

const pdfTemplate=require("../models/supplierDocument_sm")
const createPdf =(req,res)=>{

  pdf.create(pdfTemplate(req.body),{}).toFile('supplierlist.pdf',(err)=>{

    if(err){
        console.log(err);
    }

    res.send('pdf generated')

  })

}


const fetchPdf=(req,res)=>{


    res.sendFile(path.join(__dirname,'../supplierlist.pdf'))
}


module.exports={

   createPdf,
   fetchPdf

}