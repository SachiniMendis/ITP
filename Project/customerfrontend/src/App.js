import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom';
import Login from './pages/Login';
import HeaderFooter from './components/HeaderFooter';
import AllProduct from './pages/AllProduct';
import ProductView from './pages/ProductView';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Abc from './pages/Abc';
import AddCustomer_cm from './pages/AddCustomer_cm';
import AddReturnItem_cm from './pages/AddReturnItem_cm';
import CustomerDashboard from './pages/CustomerDashboard';
import ChangePassword_cm from './pages/ChangePassword_cm';
import DeleteAccount_cm from './pages/DeleteAccount_cm';
import EditCustomer_cm from './pages/EditCustomer_cm';
import {CustomerDataC} from './data1';
import Adminlayout1 from './components/layouts/Adminlayout'
import Adpayment from './pages/Payment_fm';
import { Toaster } from 'react-hot-toast';






function App() {
  return (
    <>
     <BrowserRouter>

     <Routes>
     <Route path="/customer/test" element={<Abc/>}/>

     <Route path="" element={<Home/>}/>
     <Route path="/customer/login" element={<HeaderFooter><Login/></HeaderFooter>}/>
     <Route path="/customer/allproduct" element={<HeaderFooter><AllProduct/></HeaderFooter>}/>
     <Route path="/customer/cart" element={<HeaderFooter><CartPage/></HeaderFooter>}/>
     <Route path="/customer/checkout/:totalAmount" element={<HeaderFooter><Checkout/></HeaderFooter>}/>

     <Route path="/customer/productview/:id" element={<HeaderFooter><ProductView/></HeaderFooter>}/>


     <Route path="/customer/addCustomer" element = {<HeaderFooter>{<AddCustomer_cm/>}</HeaderFooter>}/>
      <Route path="/customer/return_request" element = {<HeaderFooter><Adminlayout1 item ={CustomerDataC}><AddReturnItem_cm/></Adminlayout1></HeaderFooter>}/>
      <Route path="/customer/dashboard" element = {<HeaderFooter><Adminlayout1 item={CustomerDataC}><CustomerDashboard/></Adminlayout1></HeaderFooter>}/>
      <Route path="/customer/change_password" element = {<HeaderFooter><Adminlayout1 item={CustomerDataC}><ChangePassword_cm/></Adminlayout1></HeaderFooter>}/>
      <Route path="/customer/delete_account" element = {<HeaderFooter><Adminlayout1 item={CustomerDataC}><DeleteAccount_cm/></Adminlayout1></HeaderFooter>}/>
      <Route path="/customer/edit_customer" element = {<HeaderFooter><Adminlayout1 item={CustomerDataC}><EditCustomer_cm/></Adminlayout1></HeaderFooter>}/>
      <Route path="/payment/add" element={<HeaderFooter><Adminlayout1 item={CustomerDataC}> <Adpayment/> </Adminlayout1></HeaderFooter> }/>

      


     
     





     
     


     </Routes>
     
     
     
     
     
     </BrowserRouter>
     <Toaster position="top-center"
        reverseOrder={false} />
   
    </>
  );
}

export default App;
