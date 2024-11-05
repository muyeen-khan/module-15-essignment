import express from 'express';
const app = express();
import router from './routes/api.js';
import {PORT} from './app/config/config.js';


app.use(express.json());
app.use('/',router)


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});