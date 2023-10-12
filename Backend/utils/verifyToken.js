const jwt=require("jsonwebtoken");
const verifyToken=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(!token){
        return res.json("You are not authenticated!")
    }
    jwt.verify(token,"secret",(err,user)=>{
        if(err) return res.json("token is not valid");
        req.user=user;
        next();
    });
};
module.exports.verifyToken=verifyToken;