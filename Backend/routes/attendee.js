const express=require('express');
const Attendee=require('../models/Attendee');
const router=express.Router();

//get attendees
router.get('/',async(req,res)=>{
    const attendees=await Attendee.find().populate('tasks');
    res.json(attendees);
});
//add attendee
router.post('/',async(req,res)=>{
    const {name,email}=req.body;
    const newAttendee=new Attendee({name,email});
    await newAttendee.save();
    res.status(201).json(newAttendee);
});
//attendee delete
router.delete('/:id',async(req,res)=>{
    Attendee.findByIdAndDelete(req.params.id);
    res.status(204).send();
});
module.exports=router;