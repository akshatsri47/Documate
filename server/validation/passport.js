import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from "../model/login"; 

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.jwt_secret
};
passport.use( new JwtStrategy(opts,async(jwt_payload,done)=>{
    try{
        const user = await User.findById(jwt_payload.id);
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false)
        }

    }
    catch(error){
        return done(err,false);
    }

}));
export default passport;