import React,{useState} from 'react';
import EventManagement from './components/EventManagement';
import AttendeeManagement from './components/AttendeeManagemment';
import TaskTracker from './components/Tasktracker';

const App=()=>{
    const[selectedEventId,setSelectedEventId]=useState(null);
    return(
        <div>
            <div
            style={{padding:'20px'}}>
                <h1>Event Management Dashboard</h1>
                <div style={{marginBottom:'40px'}}></div>
                <EventManagement onSelectEvent={(setSelectedEventId)}/>
            </div>
            {selectedEventId && (
                <>
                <div style={{marginBottom:'40px'}}>
                <h2>Manage Attendees</h2>
                <AttendeeManagement eventId={selectedEventId}/>
                </div>

                <div style={{marginBottom:'40px'}}>
                <h2>Task Tracker</h2>
                <TaskTracker eventId={selectedEventId}/>
                </div>
                </>
            )}
        </div>
    )
}