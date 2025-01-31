import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

console.log(User);

const router = express.Router();

router.post('/register', async  (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email})
        if (user) {
            return res.status(401).json({success: false, message: "User already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, email, password: hashPassword
        })

        await newUser.save()

        return res.status(200).json({success:true, message: "Account Created Successfully"})
    } catch (error) {
        return res.status(500).json({success: false, message: "Error in Adding User"})
    }
})

/**
 * 
 * Steps for User Registration
Receive User Input:

The route /register listens for POST requests.
The req.body contains user data (name, email, and password) sent from the frontend.
Check if the User Already Exists:

The database is searched for a user with the provided email.
If a user is found, it means the email is already in use, so a response is sent with an error message.
Encrypt the Password:

If the email is not in use, the password is hashed using bcrypt.hash(password, 10).
Hashing makes the password secure by converting it into an unreadable format.
Create a New User Object:

A new user is created using the User model with the name, email, and hashed password.
Save the User to the Database:

The newly created user is saved to the database.
Send a Success Response:

If everything works correctly, a success message is sent back to the frontend.
Handle Errors:

If an error occurs (e.g., database issues), a response is sent with an error message.
 * 
 * 
 * 
 */

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res
            .status(401)
            .json({ success: false, message: "User Not exist" });
        }
    
        const checkPassword = await bcrypt.compare(password, user.password)
    
        if(!checkPassword) {
            return res.status(401).json({success: false, message: "Wrong Credentials"})
        }
    
        const token = jwt.sign({id: user._id}, "secretkeyofnoteapp123@#", {expiresIn: "5h"})
      
        return res
          .status(200)
          .json({ success: true, token, user: {name: user.name}, message: "Login Successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: "Error in Logging Server"})
    }
  });

/**
 * 
 *Steps for User Login
Receive User Input:

The route /login listens for POST requests.
The req.body contains the user’s email and password sent from the frontend.
Find the User by Email:

The database is searched to find a user with the provided email.
If no user is found, a response is sent with an error message saying "User Not exist."
Check the Password:

If the user exists, the entered password is compared with the stored (hashed) password using bcrypt.compare().
If the passwords don’t match, a response is sent with the message "Wrong Credentials."
Generate a Token:

If the credentials are correct, a JSON Web Token (JWT) is generated using jwt.sign().
The token contains the user’s ID and has an expiration time of 5 hours (expiresIn: "5h").
Send a Success Response:

A success message is sent back to the frontend, along with the token and the user’s name.
The frontend can use the token for authentication in future requests.
Handle Errors:

If an error occurs during the process (like a server issue), a response with a "Server Error" message is sent back. 
 * 
 * 


 */

export default router;