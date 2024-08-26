import User from "../model/login.js";
import passport from "passport";
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from 'bcrypt';
// import passport from './validation/passport.js';
const router = express.Router();
router.post('/user', async (req, res) => {
   const { name, password, email } = req.body;
   try {
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
       const user = new User({
           name,
           password: hashedPassword,
           email,
       });
       await user.save();
       res.status(201).json({ msg: "User saved successfully", user });
   } catch (error) {
       res.status(500).json({ msg: error.message });
   }
});

// router.get("/get",async(req,res)=>{
//    const user = await User.find({})
//    res.json(user);
// })
router.post('/login',async(req,res)=>{
   const{email,password} = req.body;
   try {
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(401).json({ msg: "Invalid credentials" });
      }

      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ msg: "Invalid credentials" });
      }
   const payload = {
      id:user.id,
      name:user.name,
      email:user.email
   };
   const token = jwt.sign(payload,process.env.jwt_secret,{expiresIn:'5min'});
   res.status(201).json({msg:"user logged in successfully", token: `Bearer ${token}`});

   
}
   catch(error){
      console.log(error.message);
   }
})
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
   res.json({ msg: "You have accessed a protected route!", user: req.user });
});
export default router;