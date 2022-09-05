import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";
import SignUp from "./Components/SignUp";

function App() {

  return (
    <div className="app-container">
     <Navbar />
       <Body />
       {/* //Link für Signup page */}
       <Link to="/signup" element={<SignUp/>}>Sign Up</Link>
       </div>
     

   
  );
}

export default App;
