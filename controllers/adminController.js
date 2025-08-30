const Admin = require('../model/adminSchema')

const adminRegister = async (req, res, next)=>{

    try{

        const {email, password, uid, name} = req.body;

        if(!email){
            return res.status(400).json({message:"Please fill all the fields"})
        }

        const adminExit = await Admin.findOne({email});
        
        if(adminExit){
            return res.status(201).json({message:"Admin login successfully"})
        }

        const newAdmin = new Admin({email, password, uid, name});
        await newAdmin.save();

        return res.status(201).json({message:"Admin login successfully"})

    }
    catch(error){
        req.statusCode = 500;
        next(error);
    }

}

module.exports = {adminRegister}