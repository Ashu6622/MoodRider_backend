const User = require('../model/userSchema')

const register = async (req, res, next)=>{

    try{

        let {name, email, contact, instaUrl, youtubeUrl, avatar} = req.body;

        if(!instaUrl){
            instaUrl = "not provided"
        }
        if(!youtubeUrl){
            youtubeUrl = "not provided"
        }

        const userExit = await User.findOne({email});

        if(userExit){
            return res.status(400).json({message:"User already exit with this email"})
        }

        const newUser = new User({name, email, contact, instaUrl, youtubeUrl, avatar});
        await newUser.save();

        return res.status(201).json({message:"User created successfully"})

    }
    catch(error){
         req.statusCode = 500;
         next(error);

    }
}

const showUsers = async (req, res, next)=>{

    try{

        const allUsers = await User.find().select('name email avatar contact');

        return res.status(200).json({data:allUsers});
    }
    catch(error){
        req.statusCode = 500;
        next(error)
    }

}

module.exports = {register, showUsers};