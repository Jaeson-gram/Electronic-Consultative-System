import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (_id) => {

    const jwtKey = process.env.JWT_SECRET_KEY;

    return jwt.sign({_id}, jwtKey, { expiresIn: "3d" });

}

export const registerUser = async (request, response) => {

    try {
        // response.send("Register!");

        //get the name, email, and password from the ui
        const {name, email, password} = request.body;

        //create a user out of the user's email for comparisons and manipulations
        let user = await userModel.findOne({email});

        //validations
            // check if the user already exists
        if(user) return response.status(400).json({email: "User with the given email already exists!"});

        //check if the form has an empty field
        if (!name || !email || !password) {
            return response.status(400).json({error: "All fields are required!"})
        }

        //check if the user provided a valid email
        if(!validator.isEmail(email)){
            return response.status(400).json({error: "Email is not valid"});
        }

        //check if the password is strong enough
        if(!validator.isStrongPassword(password)){
            return response.status(400).json({error: "Please create a stronger password - at least one lowercase, uppercase, number, symbol, and up to 8 characters in total"});
        }

        // if (!validator.isStrongPassword(password)) {
        //     response.status(400).json("dude, you need a strong password.")
        // }

        // if validated, then create a user object using the userModel - name, email, password
        user = new userModel({name, email, password});

        //encrypt and hash the password using bcrypt
        const salt = await bcrypt.genSalt(16); 
        user.password = await bcrypt.hash(user.password, salt);

        //save user to database
        await user.save();

        //create a token of the registration session
        const token = createToken(user._id);

        //then when successful, send a 200 status code and return the user object - ui will replace this. this is for tests purposes only
        response.status(200).json({ _id: user._id, name, email, token});

    } catch (error) {

        //in case of any errora.. log the error. then send status code 500 (server error)
        console.log(error);
        response.status(500).json({error: 'internal server error'});
    }
    

};

export const loginUser = async (request, response) =>{

    try {
        
    //get the email and password from the ui
    const {email, password} = request.body;

    //check if user exists..
    let user = await userModel.findOne({email}); //use await here - GPT

    if(!user){
        return response.status(400).json({error: "Invalid credentials.."}); //return response immediately - GPT
    }

    //verify password with bcrypt
    const passwordIsValid = await bcrypt.compare(password, user.password); //use await here as well - GPT

    if (!passwordIsValid) {
        return response.status(400).json({error: "Invalid credentials. Please check email and password"}); //return response immediately - GPT
    }

    //create a token for the login session
    const token = createToken(user._id);

    //if it works,then return the user object. The ui will be handled soon.
    response.status(200).json({_id: user._id, name: user.name, email, token});
    // response.send("Login Successful!");
    
    } catch (error) {
        //in case of any error.. log the error for assessment and send status code 500 (server error)
        console.log(error);
        response.status(500).json({error: 'internal server error'});
    }
}

export const findUser = async (request, response) => {
    const userId = request.params.userId;

    if (!userId || userId === 'undefined') {
        console.log('Received an invalid userId:', userId);
        return response.status(400).json({ error: 'Invalid userId' });
    }

    try {
        const user = await userModel.findById(userId);

        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }

        response.status(200).json(user);

    } catch (error) {
        console.log('Error in findUser:', error);
        response.status(500).json({ error: 'Server error' });
    }
}


export const getUsers = async (request, response) => {
    try {
        const users = await userModel.find();

        response.status(200).json(users)

    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}