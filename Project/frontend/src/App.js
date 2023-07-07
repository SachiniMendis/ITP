
import Adminlayout from "./admin/components/layouts/Adminlayout";
import InventoryDashboard from "./admin/pages/InventoryDashboard";

import PurchaseDashboard from "./admin/pages/PurchaseDashboard";
import AddRequest from './admin/pages/Addrequest';



import Addexpense from './admin/pages/AddExpense';
import FinanceDashboard from './admin/pages/FinanceDashboard';
import AllExpenses from './admin/pages/AllExpenses';


import DeliveryDashboard from "./admin/pages/DeliveryDashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react'
import SupplierDashboard from "./admin/pages/SupplierDashboard";
import {EmployeeData, InventoryData,SupplierData,CustomerData,DeliveryData,FinanceData,salesData,PurchaseData} from "./admin/data";
import AddSupplier from './admin/pages/AddSupplier';
import AddProduct from './admin/pages/AddProduct';
import SupplierList from './admin/pages/SupplierList';
import PurchaseOrder_sm from './admin/pages/PurchaseOrder_sm'


import ProductList_im from './admin/pages/ProductList_im';
import ProductAdd_im from './admin/pages/ProductAdd_im';
import ProductStock_im from './admin/pages/ProductStock_im';
import StockDetails_im from './admin/pages/StockDetails_im';
import RequestList from './admin/pages/RequestList';

import ProductView from './customer/pages/ProductView';
import Cart from './customer/pages/CartPage';
import Checkout from './customer/pages/Checkout';
import Card from "./customer/pages/Card";
import SalesDashboard from "./admin/pages/SalesDashboard";
import OrderList from "./admin/pages/OrderList";
import ApprovedOrders from "./admin/pages/ApprovedOrders_om";

import Adpayment from './customer/pages/Payment_fm';



import AddDriver from './admin/pages/AddDriver';
import DriverList from './admin/pages/DriverList';
import UpdateDriver from './admin/pages/UpdateDriver';
import Deliveries from './admin/pages/Deliveries';

import AddCustomer_cm from './customer/pages/AddCustomer_cm';
import CustomerManagerDashboard from './admin/pages/CustomerManagerDashboard';
import CustomerList_cm from './admin/pages/CustomerList_cm';
import CustomerSidebar from './customer/components/layouts/CustomerSideBar';
import CustomerDashboard from './customer/pages/CustomerDashboard'
import { CustomerDataC } from './customer/data1';
import Adminlayout1  from "./customer/components/layouts/Adminlayout";
import AddReturnItem_cm from './customer/pages/AddReturnItem_cm';
import ChangePassword_cm from './customer/pages/ChangePassword_cm';
import DeleteAccount_cm from './customer/pages/DeleteAccount_cm';
import EditCustomer_cm from './customer/pages/EditCustomer_cm';
import ReturnItemList_cm from './admin/pages/ReturnItemList_cm';
import HeaderFooter from './customer/components/layouts/HeaderFooter';
import Homepage from './customer/pages/Homepage';


import EmployeeAdd_em from './admin/pages/EmployeeAdd_em';
import EmployeeList from './admin/pages/EmployeeList';
import EmployeeDashboard from './admin/pages/EmployeeDashboard';
import AdminLogin from "./admin/pages/AdminLogin";

import Outofstock from "./admin/pages/Outofstock";
import Lowstock from "./admin/pages/Lowstock";

import PurchaseList_pm from "./admin/pages/PurchaseList_pm";

import FinanceReport from "./admin/pages/FinanceReports";

import Attendence from "./admin/pages/Attendance";
import ScanQR from "./admin/pages/ScanQR";











function App() {
  return (

   <>
    <ChakraProvider>
   <BrowserRouter>
   
   <Routes>
    {/* customer side routes */}



    
   
     
   
      


    <Route path="/customer/card" element={<Card/>}/>
    <Route path="/customer/product" element={<ProductView/>}/>
    <Route path="/customer/cart" element={<Cart/>}/>
    <Route path="/customer/checkout/:totalAmount" element={<Checkout/>}/>
   
    
    <Route path="/customer/addCustomer" element = {<HeaderFooter>{<AddCustomer_cm/>}</HeaderFooter>}/>
    <Route path="/customer/return_request" element = {<Adminlayout1 item ={CustomerDataC}><AddReturnItem_cm/></Adminlayout1>}/>
    <Route path="/customer/dashboard" element = {<Adminlayout1 item={CustomerDataC}><CustomerDashboard/></Adminlayout1>}/>
    <Route path="/customer/change_password" element = {<Adminlayout1 item={CustomerDataC}><ChangePassword_cm/></Adminlayout1>}/>
    <Route path="/customer/delete_account" element = {<Adminlayout1 item={CustomerDataC}><DeleteAccount_cm/></Adminlayout1>}/>
    <Route path="/customer/edit_customer" element = {<Adminlayout1 item={CustomerDataC}><EditCustomer_cm/></Adminlayout1>}/>
    <Route path="/cus/home" element = {<HeaderFooter>{<Homepage/>}</HeaderFooter>}/>

    
    <Route path="/payment/add" element = {<Adminlayout1 item={CustomerDataC}><Adpayment/></Adminlayout1>}/>
    <Route path="" element = {<HeaderFooter>{<Homepage/>}</HeaderFooter>}/>

    

    <Route path="/payment/add" element={ <Adpayment/>}></Route>


    {/* admin side routes */}


    <Route path="/adminlogin" element={<AdminLogin/>}/>
    <Route path="" element={<AdminLogin/>}/>
   

    <Route path="/sales" element={<Adminlayout item={salesData} name="Sales Management"><SalesDashboard/></Adminlayout>}/>
    <Route path="/sales/orders" element={<Adminlayout item={salesData} name="Sales Management"><OrderList/></Adminlayout>}/>
    <Route path="/sales/approvedorders" element={<Adminlayout item={salesData} name="Sales Management"><ApprovedOrders/></Adminlayout>}/>
   
    <Route path="/inventory" element={<Adminlayout item={InventoryData} name="Inventory Management"><InventoryDashboard/></Adminlayout>}/>
    <Route path="/inventory/p_list" element={<Adminlayout item={InventoryData} name="Inventory Management"><ProductList_im/></Adminlayout>}/>
    <Route path="/inventory/add_product" element={<Adminlayout item={InventoryData} name="Inventory Management"><ProductAdd_im/></Adminlayout>}/>
    <Route path="/inventory/add_product/:id" element={<Adminlayout item={InventoryData} name="Inventory Management"><ProductAdd_im/></Adminlayout>}/>
    <Route path="/inventory/product_stock" element={<Adminlayout item={InventoryData} name="Inventory Management"><ProductStock_im/></Adminlayout>}/>
    <Route path="/inventory/product_stock/stock_details/:id" element={<Adminlayout item={InventoryData} name="Inventory Management"><StockDetails_im/></Adminlayout>}/>
    <Route path="/inventory/product_stock/stock_details/:id/:idd" element={<Adminlayout item={InventoryData} name="Inventory Management"><StockDetails_im/></Adminlayout>}/>
    <Route path="/inventory/outofstock" element={<Adminlayout item={InventoryData} name="Inventory Management"><Outofstock/></Adminlayout>}/>
    <Route path="/inventory/lowstock" element={<Adminlayout item={InventoryData} name="Inventory Management"><Lowstock/></Adminlayout>}/>

    

    <Route path="/request" element={<Adminlayout item={PurchaseData} name="Purchase Management"><PurchaseDashboard/></Adminlayout>}/>
    <Route path="/request/add_request" element={<Adminlayout item={PurchaseData} name="Purchase Management"><AddRequest/></Adminlayout>}/>
    <Route path="/request/r_list" element={<Adminlayout item={PurchaseData} name="Purchase Management"><RequestList/></Adminlayout>}/>
    <Route path="/request/add_request/:id" element={<Adminlayout item={PurchaseData} name="Purchase Management"><AddRequest/></Adminlayout>}/>
    <Route path="/request/purchase" element={<Adminlayout item={PurchaseData} name="Purchase Management"><PurchaseList_pm/></Adminlayout>}/>

   

    
    <Route path="/finance/addexpense" element={<Adminlayout item={FinanceData} name="Finance Management"><Addexpense/></Adminlayout>}/>
    <Route path="/finance" element={<Adminlayout item={FinanceData} name="Finance Management"><FinanceDashboard/></Adminlayout>}/>
    <Route path="/finance/allexpense" element={<Adminlayout item={FinanceData} name="Finance Management"><AllExpenses/></Adminlayout>}/>
    <Route path="/finance/addexpense/:id" element={<Adminlayout item={FinanceData} name="Finance Management"><Addexpense/></Adminlayout>}/>
    <Route path="/finance/financeReport" element={<Adminlayout item={FinanceData} name="Finance Management"><FinanceReport/></Adminlayout>}/>



   
    <Route path="/delivery" element={<Adminlayout item={DeliveryData} name="Delivery Management"><DeliveryDashboard/></Adminlayout>}/>
    <Route path="/delivery/d_list" element={<Adminlayout item={DeliveryData} name="Delivery Management"><DriverList/></Adminlayout>}/>
    <Route path="/delivery/add" element={<Adminlayout item={DeliveryData} name="Delivery Management"><AddDriver/></Adminlayout>}/>
    <Route path="/delivery/d_list/:id" element={<Adminlayout item={DeliveryData} name="Delivery Management"><UpdateDriver/></Adminlayout>}/>
    <Route path="/delivery/deliveries" element={<Adminlayout item={DeliveryData} name="Delivery Management"><Deliveries/></Adminlayout>}/>

    <Route path="/customer_man" element={<Adminlayout item={CustomerData} name="Customer Management"><CustomerManagerDashboard/></Adminlayout>}/>
    <Route path="/customer_man/customer_list" element={<Adminlayout item={CustomerData} name="Customer Management"><CustomerList_cm/></Adminlayout>}/>
    <Route path="/customer_man/return_list" element={<Adminlayout item={CustomerData} name="Customer Management"><ReturnItemList_cm/></Adminlayout>}/>

    

    <Route path="/employee" element={<Adminlayout item={EmployeeData} name="Employee Management"><EmployeeDashboard/></Adminlayout>}/>
    <Route path="/employee/add_employee" element={<Adminlayout item={EmployeeData} name="Employee Management"><EmployeeAdd_em/></Adminlayout>}/>
    <Route path="/employee/add_employee/:id" element={<Adminlayout item={EmployeeData} name="Employee Management"><EmployeeAdd_em/></Adminlayout>}/>
    <Route path="/employee/employee_list" element={<Adminlayout item={EmployeeData} name="Employee Management"><EmployeeList/></Adminlayout>}/>
    <Route path="/employee/attendence" element={<Adminlayout item={EmployeeData} name="Employee Management"><Attendence/></Adminlayout>}/>
    <Route path="/employee/qr" element={<Adminlayout item={EmployeeData} name="Employee Management"><ScanQR/></Adminlayout>}/>


    <Route path="/supplier" element={<Adminlayout item={SupplierData} name="Supplier Management"><SupplierDashboard/></Adminlayout>}/>
    <Route path="/supplier/s_list" element={<Adminlayout item={SupplierData} name="Supplier Management"><SupplierList/></Adminlayout>}/>
    <Route path="/supplier/add_supplier" element={<Adminlayout item={SupplierData} name="Supplier Management"><AddSupplier/></Adminlayout>}/>
    <Route path="/supplier/add_supplier/:id" element={<Adminlayout item={SupplierData} name="Supplier Management"><AddSupplier/></Adminlayout>}/>
    <Route path="/supplier/add_product" element={<Adminlayout item={SupplierData} name="Supplier Management"><AddProduct/></Adminlayout>}/>
    <Route path="/supplier/request" element={<Adminlayout item={SupplierData} name="Supplier Management"><PurchaseOrder_sm/></Adminlayout>}/>

]
   </Routes>
    

   
   </BrowserRouter>
   <Toaster position="top-center"
        reverseOrder={false} /></ChakraProvider>
   </>
  
  );
}

export default App;
