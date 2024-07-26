import { useState } from "react";
import useSignup from "../hooks/useSignup";
import Navbar from "../components/navbar";

const SignupPage = () =>{

    const SignupPageStyles ={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:"24px",
        margin:"auto",
        padding:"24px",
    };

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const { signup } = useSignup();

    const handleSubmit = () =>{
        const validation = true;
        if(validation){
            signup({email,password});
        }else{
            alert("Validation Failed");
        }
    }
    return(
        <>
       <Navbar/>
       <div className="signup-page">
        <div className="signup-wrapper">
            
                <h1>Sign Up Page</h1>
    <div style={SignupPageStyles}>
        <div className="input-field">
        <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        <label>Enter your email</label>
        </div>
        <div className="input-field">
        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        <label>Enter your Password</label>
        </div>
        <button className="login-btn" onClick={handleSubmit}>Sign Up</button>
        
    </div>
    
    </div>
    </div>
    </>
    )
}

export default SignupPage;


