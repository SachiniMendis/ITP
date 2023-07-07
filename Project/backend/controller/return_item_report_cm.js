const pdf=require('html-pdf')
const path=require('path')

const pdfTemplate=require("../models/return_item_document_cm")
const createPdf =(req,res)=>{

  pdf.create(pdfTemplate(req.body),{}).toFile('return_item_list.pdf',(err)=>{

    if(err){
        console.log(err);
    }

    res.send('pdf generated')

  })

}


const fetchPdf=(req,res)=>{


    res.sendFile(path.join(__dirname,'../return_item_list.pdf'))
}


module.exports={

   createPdf,
   fetchPdf

}