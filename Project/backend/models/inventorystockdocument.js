
module.exports=(product)=>{

  
    const today=new Date()
    console.log(product);
    let total=0;
    
    return `
    
    <!doctype html>
    <html lang="en">

    <head>

    <meta charset="utf-8">
    <titel>Inventory Report</titel>
    <style>
    
    .clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
      
      a {
        color: #5D6975;
        text-decoration: underline;
      }
      
      body {
        position: relative;
        width: 21cm;  
        height: 29.7cm; 
        margin: 0 auto; 
        color: #001028;
        background: #FFFFFF; 
        font-family: Arial, sans-serif; 
        font-size: 12px; 
        font-family: Arial;
      }
      
      header {
        padding: 10px 0;
        margin-bottom: 30px;
      }
      
      #logo {
        text-align: center;
        margin-bottom: 10px;
      }
      
      #logo img {
        width: 90px;
      }
      
      h1 {
        border-top: 1px solid  #5D6975;
        border-bottom: 1px solid  #5D6975;
        color: #5D6975;
        font-size: 2.4em;
        line-height: 1.4em;
        font-weight: normal;
        text-align: center;
        margin: 0 0 20px 0;
        background: url(dimension.png);
      }
      
      #project {
        float: left;
      }
      
      #project span {
        color: #5D6975;
        text-align: right;
        width: 52px;
        margin-right: 10px;
        display: inline-block;
        font-size: 0.8em;
      }
      
      #company {
        float: right;
        text-align: right;
      }
      
      #project div,
      #company div {
        white-space: nowrap;        
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        margin-bottom: 20px;
      }
      
      table tr:nth-child(2n-1) td {
        background: #F5F5F5;
      }
      
      table th,
      table td {
        text-align: center;
      }
      
      table th {
        padding: 5px 20px;
        color: #5D6975;
        border-bottom: 1px solid #C1CED9;
        white-space: nowrap;        
        font-weight: normal;
      }
      
      table .service,
      table .desc {
        text-align: left;
      }
      
      table td {
        padding: 20px;
        text-align: right;
      }
      
      table td.service,
      table td.desc {
        vertical-align: top;
      }
      
      table td.unit,
      table td.qty,
      table td.total {
        font-size: 1.2em;
      }
      
      table td.grand {
        border-top: 1px solid #5D6975;;
      }
      
      #notices .notice {
        color: #5D6975;
        font-size: 1.2em;
      }
      
      footer {
        color: #5D6975;
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        border-top: 1px solid #C1CED9;
        padding: 8px 0;
        text-align: center;
      }
    
    </style>

    </head>

    <body>

    <header class="clearfix">
    <div id="logo">
      <img src="./toolshubicon.png">
    </div>
    <h1><b>Tools Hub PVT LTD</b></h1>
    <h1>Inventory Stock</h1>

    <div id="company" class="clearfix">
      <div>Tools Hub PVT LMT</div>
      <div>Walivita Road<br /> No 85004, Srilanka</div>
      <div>0272226088</div>
      <div><a href="mailto:company@example.com">Toolshub@gmail.com</a></div>
    </div>
    <div id="project">
      <div><span>Position</span>Inventory Manager</div>
      <div><span>Name</span>Malindu Dilshan</div>
     
      <div><span>EMAIL</span> <a href="mailto:john@example.com">malindu@gmail.com</a></div>
      <div><span>DATE</span>${`${today}`}</div>
     
    </div>
  </header>
  <main>
    <table>
      <thead>
        <tr>
          <th class="service">Product Code</th>
          <th class="desc">Product Name</th>
          <th>Unit Type</th>
          <th>Unit Price(Rs)</th>
          <th>Available Stock</th>
          <th>Total Cost(Rs)</th>
        </tr>
      </thead>
      <tbody>

     ${product.map((item)=>{

        total=total+(item.stock * item.unit_price)

        return(
            `   <tr>
            <td class="service">${item.product_code}</td>
            <td class="desc">${item.product_name}</td>
            <td class="unit">${item.unit_type}</td>
            <td class="unit">${item.unit_price}</td>
            <td class="unit">${item.stock}</td>
            <td class="unit">${(item.stock)*(item.unit_price)}</td>
      


          
            </tr>`
        )

     })}


     <tr>
     <td class="service"></td>
     <td class="desc"></td>
     <td class="unit"></td>
     <td class="unit"></td>
     <td class="unit">Total Stock Value</td>
     <td class="unit">${`${total}`}</td>



   
     </tr>
     
      
      </tbody>
    </table>
    <div id="notices">
   
    
    </div>
  </main>
  <footer>
 
  </footer>


    </body>

    </html>
    
    
    `




}