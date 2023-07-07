
import { Navbar } from "./NavBar";
import CustomerSidebar from "./CustomerSideBar";

function Adminlayout({children,item,name}){


   
return(
    <div>
    <Navbar name={name} />
    <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
       <CustomerSidebar item={item} />
       {children}
       
     
    
 </div>
</div>  
</div>  


);
  
}

export default Adminlayout;