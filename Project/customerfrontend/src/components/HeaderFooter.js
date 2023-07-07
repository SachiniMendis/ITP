import "./styles.css";
import FooterOne from "./FooterOne";
import HeaderOne from "./HeaderOne";

function HeaderFooter({children}){


   
return(
   
    <>
    
    <HeaderOne/>
     
    {children}

    <FooterOne/>

    
    </>

);
  
}

export default HeaderFooter;