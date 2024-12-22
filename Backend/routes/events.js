const express = require('express');
const Event=require('../models/Event');
const router = express.Router();

//get events
router.get('/',async(req,res)=>{
    const events=await
    Event.find().populate('attendees');
    res.json(events);
});

//add event
router.post('/',async(req,res)=>{
    const {name,description,location,date,} = req.body;
    const newEvent= new Event({name,description,location,date});
    await newEvent.save();
    res.status(201).json(newEvent);
});
 //event update
 router.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const updatedEvent = await 
    Event.findByIdAndUpdate(id,req.body,{new:true});
    res.json(updatedEvent);
 });
 //delete event
 router.delete('/:id',async(req,res)=>{
    await
    Event.findByIdAndDelete(req.params.id);
    res.status(204).send();
 });
 module.exports=router;