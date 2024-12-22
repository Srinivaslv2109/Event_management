 import React,{useState,useEffect} from 'react';
 import axios from 'axios';
    const AttendeeManagement=()=>{
        const[attendees,setAttendees]=useState([]);
        const[newAttendee,setNewAttendee]=useState({name:'',email:''})
//fetch Attendees
useEffect(() => {fetchAttendees();},[]);
        const fetchAttendees=async()=>{
            try{
                const res=await axios.get('https://localhost:5000/api/attendees');
                setAttendees(res.data);
            }catch(error){
                console.error('error fetching attendees:',error);
            }
        };
//Add new attendee
const handleAddAttendee = async()=>{
    if(!newAttendee.name||!newAttendee.email){
        alert('please provide both name and email for the attendee');
        return;
    }
    try{
        await axios.post('https://localhost:5000/api/attendees',newAttendee);
        fetchAttendees();
        setNewAttendee({name:'',email:''});
    }
    catch(error){
        console.error('Error adding an atttendee:',error);
            }
};
//delete an attendee
const handleDeleteAttendee=async(id)=>{
    try{
        await axios.delete(`https://localhost:5000/api/attendees/${id}`);
        fetchAttendees();
    }
    catch(error){
        console.log('Error deleting an attendee:',error);
    }
};
return (
    <div>
        <h1>Attendee Management</h1>
        <h3>Add a New Attendee</h3>
        <input 
        type="text"
        placeholder="Name"
        value={newAttendee.name}
        onChange={(e)=>setNewAttendee({...newAttendee,name:e.target.value})}
        />
        <input 
        type="text"
        placeholder='email'
        value={newAttendee.email}
        onChange={(e)=>setNewAttendee({...newAttendee,email:e.target.value})}
        />
        <button onClick={handleAddAttendee}>Add Attendee</button>
        <h3>Attendee List</h3>
        <ul>
            {attendees.map((attendee)=>(
                <li key={attendee._id}>
                    {attendee.name}-({attendee.email})
                    {' '}
                    <button onClick={handleDeleteAttendee(attendee._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);
    };
export default AttendeeManagement;