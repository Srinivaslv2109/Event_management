const express=require('express');
const connectDB=require('./config/db');

const app=express();
connectDB();

app.use(express.json());
app.use('/api/events',require('./routes/events'));
app.use('/api/attendees',require('./routes/attendees'));
app.use('/apu/tasks',require('./routes/tasks'));
app.listen(5000,()=>console.log('server running on http://localhost:5000'));