// standard response function

import { createUserService, deleteUserByIdService, getAllUsersService, getUserByIdService, updateUserByIdService } from "../models/userMode.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const createUser= async(req,res,next)=>{
    const{name,email}=req.body;
    try{
        const newUser= await createUserService(name,email);
        handleResponse(res,201,"User created successfully",newUser); 
    } catch(err){
        next(err);
    }
}

export const getAllUsers= async(req,res,next)=>{
    try{
        const users= await getAllUsersService();
        handleResponse(res,200,"Users fetched successfully", users); 
    } catch(err){
        next(err);
    }
}


export const getUserById= async(req,res,next)=>{
    try{
        const user= await getUserByIdService(req.params.id);
        if (!user) return handleResponse(res,404,"User not found");
        handleResponse(res,200,"User fetched successfully", user); 
    } catch(err){
        next(err);
    }
}

export const updateUser= async(req,res,next)=>{
    const {name,email}=req.body;
    try{
        const user= await updateUserByIdService(req.params.id,name,email);  
        if (!user) return handleResponse(res,404,"User not found"); 
        handleResponse(res,200,"User updated successfully", user); 
    } catch(err){
        next(err);
    }
}

export const deleteUser= async(req,res,next)=>{
    try{
        const user= await deleteUserByIdService(req.params.id,name,email);  
        if (!user) return handleResponse(res,404,"User not found"); 
        handleResponse(res,200,"User deleted successfully", user); 
    } catch(err){
        next(err);
    }
}