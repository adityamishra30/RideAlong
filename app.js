const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors= require('cors');
const userRoutes = require('./routes/user.routes');

const connectToDb=require('./db/db');
connectToDb();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello orld');
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoutes);
module.exports= app;

