import { connect } from 'mongoose';
const connectDB = async () =>{
    try {
        await
        connect('mongodb://127.0.1:27017/event_manager',{
            useNewUrlParser:true,
            useUnifieldTopology:true,
                });
                console.log('MongoDB connected');
            }catch(err){
                console.error(err.message);
                Process.exit(1);
            }
    };
    export default connectDB;