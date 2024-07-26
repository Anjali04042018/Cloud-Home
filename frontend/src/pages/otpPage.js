import { useEffect,useState } from "react";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import useGenerateNewOtp from "../hooks/useGenerateNewOtp";
import useVerifyOtp from "../hooks/useVerifyOtp";

const OtpPage = () =>{
    const {email} = useSelector((e) => e.auth);
    const [otp,setOtp ]= useState();
    const {generateNewOtp} = useGenerateNewOtp();
    const {verifyOtp} = useVerifyOtp();

    const handleSubmit = () =>{
        if(otp.length < 4){
            alert("Invalid OTP");
        }else{
            const num = parseInt(otp);
            if(num >= 1000 && num <= 9999){
                // alert(num);
                //generateNewOtp();
                verifyOtp(num);
            }else{
                alert("Invalid OTP, OTP must be Number")
            }
        }
    };

    useEffect(()=>{
        generateNewOtp();
    },[]);
   return(
    <>
    <Navbar/>
    <div className="otp-page">
    <div className="otp-wrapper">
        <h1>OTP Verification Page</h1>
        
        <p>Enter the code from the Email we sent to </p> 
        {/* <p>Email: {email}</p> */}
         <p><b>{email}</b></p>
         <div className="input-field">
        <input maxLength={4} type="text" value={otp} onChange={(e) => setOtp(e.target.value)}/>
        <label>Enter your OTP</label>
       
        {/* <div className="otp-column c1"/>
        <div className="otp-column c2"/>
        <div className="otp-column c3"/>
        <div className="otp-column c4"/> */}


        </div>
        <button className="otp-btn" onClick={handleSubmit}>Verify OTP</button>
    </div>
    </div>

    </>
   );
};

export default OtpPage;