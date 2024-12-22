import React,{useState,useEffect} from 'react';
import axios from 'axios';
const EventManagement=()=>{
    const[events,setEvents]=useState([]);
    const[newEvent,setNewEvent]=useState({name:'',description:'',location:'',date:''});
useEffect(()=>{
    fetchEvents();},
[]);

const  fetchEvents=async()=>{
    const result=await axios.get('http://localhost:5000/api/events');
    setEvents(res.data);
};
const handleAddEvent=async()=>{
    await axios.post('http://localhost:5000/api/events',newEvent);
    fetchEvents();
    setNewEvent({name:'',description:'',location:'',date:''});
};
return (
    <div>
        <h1>Event Management</h1>
        <ul>
            {events.map((event)=>(
            <li key ={event._id}>{event.name}-{event.location}</li>
        )
        )}
    </ul>
    <input
    placeholder="Name"
    value={newEvent.name}
    onchange={(e)=>
    setNewEvent({...newEvent,name:e.target.value})}
    /> 
    <button onnclick={handleAddEvent}>Add Event</button>   
    </div>
);
};
export default EventManagement;