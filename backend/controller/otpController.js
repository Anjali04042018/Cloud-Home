// const nodemailer = require("nodemailer");

// const sendOTPMail = async(email,otp) =>{
//     try{
//     let mailer = nodemailer.createTransport({
//         service: "gmail",
//         secure: true,
//         port: 465,
//         auth: {
//             user: "anjaligp1210@gmail.com",
//             pass: "Anjali@10",
//         },
//     });
//     const response = await mailer.sendMail({
//         from: "anjali", 
//         to: email,
//         subject: "OTP", // OTP verification for your account
//         html: `
//             <html>
//                 <body>
//                     <h1> Your OTP for Cloud Home APP is </h1>
//                     <h1> ${otp} </h1>
//                 </body>
//             </html>
//         `,
//     });
//     console.log(response);
//     return true;
// }
// catch(err){
//     console.log("--------------------------------");
//         console.log(err);
//         console.log("--------------------------------");

//         return false;
// }
// };

const generateOtp = async (req,res) =>{
    try{

        const {email} = req.query;
    
        res.json(201);
        res.json({
            status:"success",
            message: `otp sent to ${email}`,
            data:{},
        });
    }catch(err){
        console.log("------------------------------");
        console.log(err);
        console.log("-------------------------------");

        res.status(500).json({
            status:"fail",
            message: "Internal Server Error",
            data: err,
        });

    }
};

module.exports = {generateOtp};