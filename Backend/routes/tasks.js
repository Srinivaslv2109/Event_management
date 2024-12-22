const express=require('express');
const Task=require('../models/task');
const router = express.Router();
//get tasks
router.get('/',async(req,res)=>{
    const tasks=await Task.find({eventId:req.params.eventId});
    res.json(tasks);
});
//add task
router.post('/',async(req,res)=>{
    const {name,deadline,assignedTO}=req.body;
    const newTask=new Task({name,deadline,assignedTo});
    await newTask.save();
    res.status(202).json(newTask);
});
//task update
router.put('/:id',async(req,res)=>{
    const updatedTask=await Task.findByIdAndUpdate(req.params,id,req.id,{new:true});
});
module.exports=router;