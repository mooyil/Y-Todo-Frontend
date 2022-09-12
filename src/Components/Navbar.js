import { Link } from "react-router-dom";
import SignUp from "./SignUp";

import "../Css/Navbar.css"

export default function Navbar () { 
    return (
            <nav className="navbar">
                <h1 className="header">Y-Todo</h1>
                  {/* Link für meine SignUp Seite */}
            <Link className="signup-link" to="/signup" element={<SignUp/>}><h1 className="signup-link-font">Sign Up</h1></Link>
            </nav>
          
    )
 }