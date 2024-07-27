
// import { useState } from "react";
// import useLogin from "../hooks/useLogin";
// import Navbar from "../components/navbar";

// const LoginPage = () =>{

//     // const loginPageStyles ={
//     //     display:"flex",
//     //     flexDirection:"column",
//     //     alignItems:"center",
//     //     justifyContent:"center",
//     //     gap:"24px",
//     //     margin:"auto",
//     //     padding:"24px",
//     // };
   
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const { login } = useLogin();

//     const handleSubmit = () =>{
//         const validation = true;
//         if(validation){
//             console.log('login called');
//             login({email,password});
//         }else{
//             alert("Validation Failed");
//         }
//     }
//     return(
//         <>
//         <Navbar />
//             <div className="login-page">
//                 <div className="login-wrapper">
//                     <form onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <br />
//                         <div className="input-field">
//                             <input
//                                 type="text"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label>Enter your email</label>
//                         </div>
//                         <div className="input-field">
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <label>Enter your Password</label>
//                         </div>
//                         <button className="login-btn" type="submit">Login</button>
//                     </form>
//                 </div>
//             </div>
//     </>
//     )
// }

// export default LoginPage;

import { Link } from 'react-router-dom';
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import Navbar from "../components/navbar";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = true; // Add your validation logic here
        if (validation) {
            console.log('login called');
            login({ email, password });
        } else {
            alert("Validation Failed");
        }
    };

    return (
        <>
            <Navbar />
            <div className="login-page">
                <div className="login-wrapper">
                    <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <br />
                        <div className="input-field">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Enter your email</label>
                        </div>
                        <div className="input-field">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Enter your Password</label>
                        </div>
                        <button className="login-btn" type="submit">Login</button>
                        <br />
                        <Link to="/signup" className="signup-link">Don't have an account? <a href="#">Sign up</a> </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
