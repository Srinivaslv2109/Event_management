import React,{useState,useEffect} from 'react';
import axios from 'axios';
const TaskTracker=({eventId})=>{
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState({name:'',deadline:'',assignedTo:''});
    useEffect(()=>{
        fetchTasks();},[eventId]);
    //fetch tasks for an event
    const fetchTasks=async()=>{
        try{
            const res=await axios.get('https://localhost:5000/api/tasks/${eventId}');
            setTasks(res.data);
        }catch(error){
            console.error('Error Fetching Tasks:',error);
        }
    };
    //add new task
    const handleAddTask= async()=>{
        if(!newTask.name||!newTask.deadline||!newTask.assignedTo){
            alert('Please fill in all the fields for the task');
            return;
        }
        try{
            await axios.post('http://localhost:5000/api/tasks',{...newTask,eventId});
            fetchTasks();
            setNewTask({name:'',deadline:'',assignedTo:''});
        }
        catch(error){
            console.error('Error adding Task:',error);
        }
    };
    //update task status
    const handleUpdateStatus=async(taskId,status)=>{
        try{
            await axios.put(`http://localhost:5000/api/tasks/${taskId}`,{status});
            fetchTasks();
        }catch(error){
            console.error('Error updating task status:',error);
        }
    };
    //calculate progress
    const calculateProgress=()=>{
        const completedTasks=tasks.filter((task)=>task.status==='completed').length;
        return tasks.length>0?(completedTasks/tasks.length)*100:0;};
        return (
            <div>
                <h1>Task Tracker</h1>
                <h3>Add New task</h3>
                <input
                type="text"
                placeholder="Task Name"
                value={newTask.name}
                onChange={(e)=>setNewTask({...newTask,name:e.target.value})}/>
                <input 
                type= "date"
                value={newTask.deadline}
                onChange={(e)=>setNewTask({...newTask,deadline:e.target.value})}/>
                <input 
                type='text'
                placeholder='Assigned To'
                value={newTask.assignedTo}
                onChange={(e)=>setNewTask({...newTask,assignedTo:e.target.value})}/>
                <button onClick={handleAddTask}>Add Task</button>
                <h3>Task List</h3>
                <ul>
                    {tasks.map((task)=>(
                        <li key={task._id}><strong>{task.name}</strong>-{task.status}{' '}
                        <button onClick={()=>handleUpdateStatus(task._id,'completed')}>Mark as completed</button>
                        </li>
                    ))}
                </ul>
                <h3>Progress</h3>
                <div style={{border:'1px solid #ccc',width:'100%',height:'20px'}}>
                    <div style={{width:'${calculateProgress()}%',backgroundColor:'green',height:'100%',}}>
                        </div>
                    </div>
                    <p>{Math.round(calculateProgress())}%Completed</p>
            </div>
        );
    };
    export default TaskTracker;
    
