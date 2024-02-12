const {verifyToken} = require('jsonwebtoken');
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verifyToken(token, process.env.SECRET_KEY, (err, decoded) => {
                if(err){
                    res.json({
                        success: 0,
                        message: "Invalid Token"
                    });
                }else{
                    next();
                }
            });
        }else{
            res.json({
                success: 0,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
}