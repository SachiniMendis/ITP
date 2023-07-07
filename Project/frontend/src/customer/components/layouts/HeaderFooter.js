
import { Navbar } from "./NavBar";
import Footer from "./Footer";

function HeaderFooter({children,item,name}){


   
return(
    <div>
    <Navbar name={name} />
    <div class="container-fluid" id="main">
     <div class="row row-offcanvas row-offcanvas-left">
     {children}
       <Footer item={item} />
       
       
     
    
 </div>
</div>  
</div>  


);
  
}

export default HeaderFooter;