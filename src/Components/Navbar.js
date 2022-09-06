import { Link } from "react-router-dom";
import SignUp from "./SignUp";

import "../Css/Navbar.css"

export default function Navbar () { 
    return (
        <div className="container-navbar">
            <nav className="navbar">
                <h1 className="header">Y-Todo</h1>
            </nav>
            {/* Link für meine SignUp Seite */}
            <Link to="/signup" element={<SignUp/>}><h1 className="signup-link">Sign Up</h1></Link>
        </div>
    )
 }