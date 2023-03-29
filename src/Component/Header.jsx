import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = ()=>
{
    return(
        <>
        <header>
            <nav>
                <div className="d5">
                <li><NavLink to={"/"}  className="red">CovidData</NavLink></li>
                
                <li>
                 <NavLink to={'/home'} className="red" >Pokemon API</NavLink>  
                 </li>
                 </div>
            </nav>
        </header>
        </>
    )
}
export default Header;