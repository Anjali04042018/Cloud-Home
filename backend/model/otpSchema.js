const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const otpSchema = new mongoose.Schema({
    opt:{
        type:Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    userId:{
        type: ObjectId,
        required:true,
        ref: "Users",
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

otpSchema.methods.verifyOtp =  (otp, hashedOtp) =>{
    return bcrypt.compare(otp,hashedOtp);
}

otpSchema.pre("save",async function(next){
    if(this.isModified("otp")){
        const hashedOtp = await bcrypt.hash(this.otp,12);
        this.otp = hashedOtp;
        next();
    }else{
        next();
    }
})

const OtpModel = mongoose.model("OTPs", otpSchema);

module.exports = OtpModel;