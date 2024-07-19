const nodemailer = require("nodemailer");

const sendOTPMail = async(email,otp) =>{
    let mailer = nodemailer.createTransport({

    });
    const response = await mailer.sendMail({
        
    })

}

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