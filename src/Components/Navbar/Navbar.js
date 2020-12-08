import React from "react"
import './Navbar.css';

const Navbar = () => {
   return(
        <nav>
 <ul className="left">
 <li>Online Shop</li>
 {/* <li><form>
     <input type="text" className="search" placeholder="Search Product..."/>
     </form></li> */}
 </ul>
 <ul className="right">
 </ul>
 <ul className="right">
<span className="dollor"><i className="fas fa-cart-plus"></i></span>
<span className="shoppingCartTotal"></span>
 </ul>
</nav>
   );
   

}

export default Navbar;