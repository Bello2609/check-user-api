const Check = require("../model/check");
exports.check = async (req, res, next)=>{
    try{
        const { code } = req.body;
        const checkResult = await Check.findOne({ userId: code });
        if(!checkResult[0]){
            return res.status(404).json({
                message: "Failure"
            })
        }
        else{
            return res.status(201).json({
                message: "Success"
            })
        }
    }catch(err){
        return res.status(500).json({
            error: err
        })
    }
    
}