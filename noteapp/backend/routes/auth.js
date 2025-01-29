import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

console.log(User);

const router = express.Router();

// router.post('/register', async  (req, res) => {
//     try {
//         const {name, email, password} = req.body;
//         const user = await User.findOne({email})
//         if (user) {
//             return res.status(401).json({success: false, message: "User already exist"})
//         }

//         const hashPassword = await bcrypt.hash(password, 10)

//         const newUser = new User({
//             name, email, password: hashPassword
//         })

//         await newUser.save()

//         return res.status(200).json({success:true, message: "Account Created Successfully"})
//     } catch (error) {
//         return res.status(500).json({success: false, message: "Error in Adding User"})
//     }
// })

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = User.findOne({ email });
  if (user) {
    return res
      .status(401)
      .json({ success: false, message: "User already exist" });
  }

  const hashPassword = bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashPassword,
  });

  newUser.save();

  return res
    .status(200)
    .json({ success: true, message: "Account Created Successfully" });
});

router.post("/register", (req, res) => {
    const { email, password } = req.body;
    const user = User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User Not exist" });
    }

    const checkPassword = bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(401).json({success: false, message: "Wrong Credentials"})
    }

    const token = jwt.sign({id: user._id}, "secretkeyofnoteapp123@#", {expiresIn: "5h"})
  
    return res
      .status(200)
      .json({ success: true, token, user: {name: user.name}, message: "Login Successfully"});
  });

export default router;
