import { Schema, model } from 'mongoose';

const attendeeSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    tasks:[{type:Schema.Types.ObjectId,ref:'Task'}],
});
module.exports('Attendee',attendeeSchema);
