const mongoose=require('mongoose');
const taskScchema=new mmongoose.Schema({
    name:{type:String,required:true},
    deadline:{type:Date,required:true},
    status:{type:String,enum:['pending','ongoing','completed'],default:'pending'},
    assignedTo:{type:mongoose.Schema.Types.ObjectId,ref:'Attendee'},
});
module.exports = mongoose.model('Task',taskSchema);