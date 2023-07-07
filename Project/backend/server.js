const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const app = express();
require("dotenv").config();  

const PORT = process.env.PORT || 8070;
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());   

const URL = process.env.MONGODB_URL;


mongoose.connect(URL, {

    useNewUrlParser: true

})



const connection = mongoose.connection;
connection.once("open", () => {     

    console.log("Mongodb Connection success!!");

});


const requestRouter = require("./routes/requests_pm.js");
app.use("/request", requestRouter);


const requestPdfRoute = require("./routes/requestReportRoute_pm.js");
app.use("/requestreport", requestPdfRoute);

const supplierRouter=require("./routes/suppliers_sm.js");
app.use("/supplier",supplierRouter);

const supplierPdfRoute=require("./routes/supplierReportRoute.js");
app.use("/supplierReport",supplierPdfRoute)

const orderPdfRoute=require("./routes/salesReportRoutes.js");
app.use("/orderReport",orderPdfRoute)

const supProductRouter=require("./routes/products_sm.js");
app.use("/supProduct",supProductRouter);

const expenseRouter = require("./routes/expenses_fm.js");         
app.use("/expense",expenseRouter)

const paymentRouter = require("./routes/cus_payments_fm.js");
app.use("/payment",paymentRouter)

const financeRouter= require("./routes/financeReportRoutes_fm.js");
app.use("/finance_ex_report",financeRouter);

const mainCategoryRouter=require("./routes/main_category_r_im.js");
app.use("/maincategory",mainCategoryRouter)

const productRouter=require("./routes/product_r_im.js");
app.use("/product",productRouter)

const stockRouter=require("./routes/stock_r_im.js");
app.use("/stock",stockRouter)

const employeeRouter=require("./routes/employee_r_em.js");
app.use("/employee",employeeRouter)

const customerRouter = require("./routes/Customer_route_cm");   
app.use("/customer", customerRouter);

const deliveryRouter= require("./routes/driverinfo_routes_dm.js");
app.use("/driver",deliveryRouter);

const inventoryPdfRoute=require("./routes/inventory_report_route.js");
app.use("/inventoryreport",inventoryPdfRoute)


const OrderRouter= require("./routes/Order_r_om.js");
app.use("/order",OrderRouter);

const deliveryPdfRoute=require("./routes/deliveryreport_route_dm.js");
app.use("/driverreport",deliveryPdfRoute);

const returnRouter = require("./routes/return_item_route_cm.js");
app.use("/returnitem",returnRouter)

const returnItemReportRouter = require("./routes/return_item_r_cm.js");
app.use("/returnItemReport",returnItemReportRouter)

const CartRouter= require("./routes/CartPage_r_om.js");
app.use("/cart",CartRouter);

const adminRouter=require("./routes/admin_r.js");
app.use("/admin",adminRouter);

const AttendanceRoute=require("./routes/Attendance_r.js");
app.use("/attendence",AttendanceRoute); 

const employeePdfRoute = require("./routes/employeeReportRoute.js");
app.use("/employeeroute", employeePdfRoute);




app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
})