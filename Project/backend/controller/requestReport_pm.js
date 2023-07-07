const pdf=require('html-pdf')
const path=require('path')

const pdfTemplate=require("../models/requestDocument_pm")
const createPdf =(req,res)=>{

  pdf.create(pdfTemplate(req.body),{}).toFile('purchaserequests.pdf',(err)=>{

    if(err){
        console.log(err);
    }

    res.send('pdf generated')

  })

}


const fetchPdf=(req,res)=>{


    res.sendFile(path.join(__dirname,'../purchaserequests.pdf'))
}


module.exports={

   createPdf,
   fetchPdf

}
