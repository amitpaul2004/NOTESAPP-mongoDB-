import UserModel from '../models/Auth.js'
import bcriypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



const Register=async (req, res) => {
    try{
        const {username, email, password} = req.body
        if(!username || !email || !password) {
            return res.status(303).json({success:false,message:"All fields are required"})
        }
        const exitingUser = await UserModel.findOne({email})
        if(exitingUser) {
            return res.status(303).json({suceess:false,message: "User already exists"})

    }
        const hasepassword = await bcriypt.hash(password, 10)
        const NewUser = new UserModel({
            username,email,password: hasepassword
        })
        NewUser.save()
        res.status(201).json({success:true,message:"User created successfully",USer:NewUser})
}catch(error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal server error"})
}   
    }


const Login = async (req, res) => {
    try {
        const {email, password} = req.body
        const FindUser = await UserModel.findOne({ email })
        if(!FindUser){
            return res.status(404).json({success:false,message:"Usser not found"})
        }
        const comparePassword = await bcriypt.compare(password, FindUser.password)
        if(!comparePassword) {
            return res.status(303).json({success:false,message:"Invalid credentials"})
        }


        const token = jwt.sign({userId:FindUser._id},process.env.SeceretKey,{expiresIn:"3d"})
        res.cookie("token", token, {
   httpOnly: true,
   secure:false, // Set to true if using HTTPS
   maxAge:3 * 24 *3600 *1000
        })
        res.status(200).json({success:true,message:"Login successful",User:FindUser,
          token
        })

    }catch(error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}
const Logout = async (req, res) => {
    try {
res.clearCookie('token')
 res.status(200).json({success:true,message:"User Logout successful",
 })
    }catch(error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

export {Register,Login,Logout}