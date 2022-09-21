import "../styles/SignUp.css"

export default function SignUp () { 
    return (
        <div className="sign-up-container">
            <p>Y-Todo</p>
            <h1>Sign Up Now</h1>
            <form className="sign-up-form">
                <input type="email" className="input-text-signup" placeholder="Enter Your E-Mail" ></input>
                <input type="password" className="input-text-signup" placeholder="Enter Your Password" ></input>
                <p><span><input type="checkbox"></input></span>I agree to the terms of services</p>
                <button className="signup-button">Sign up</button>
                
            </form>
        </div>
    )
 }