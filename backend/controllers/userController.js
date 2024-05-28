import User from '../models/User.js'

export const createUser= async(req,res)=>{
    const newUser = new User (req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({
            success:true, message:'successfully created',data:savedUser
        })
    } catch (error) {
        
        res.status(500).json({
            success:false, message:'failed to create,try again'
        })
    }
};

export const updateUser=async(req,res)=>{
    const id=req.params.id
    try {
        const updatedUser=await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true, 
            message:'successfully updated',
            data: updatedUser,
        })
        
    } catch (error) {
        res.status(500).json({
            success:false, message:'failed to update,try again'
        })
        
    }
}
export const deleteUser =async(req,res) =>{
    const id=req.params.id
    try {
        await User.findByIdAndDelete(id)
        

        res.status(200).json({
            success:true, 
            message:'successfully deleted',
            
        })
        
    } catch (error) {
        res.status(500).json({
            success:false, message:'failed to delete,try again'
        })
        
    }
}
export const getSingleUser =async(req,res)=>{
    const id=req.params.id
    try {
        const user= await User.findById(id)
        

        res.status(200).json({
            success:true, 
            message:'successful',
            data: user
            
        })
        
    } catch (error) {
        res.status(404).json({
            success:false, message:'not found'
        })
        
    }
}
export const getAllUser =async(req,res)=>{

    
    try {
        const users= await User.find({})
    
        .limit(8)
        res.status(200).json({
            success:true, 
            // count:users.length,
            message:'successful',
            
            data: users
        })
        
    } catch (error) {
        res.status(404).json({
            success:false, message:'not found'
        })
        
    }
}