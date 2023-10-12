const express =require('express')
const bcrypt=require('bcrypt');
const cookiesparser=require('cookie-parser');
const jwt=require('jsonwebtoken');
const session=require('session');
const cors=require('cors');
const mongoose=require('mongoose');
const connection=require('./database')
const app=express();
//Middlewware
app.use(express.json());
app.use(cookiesparser());
app.use(express.urlencoded({extended:false}));
mongoose.connect('mongodb://localhost:27017/Hospital_management', {useNewUrlParser:true})
.then(()=>{
    console.log("MONGO CONNECTION OPEN!!!")
})
app.get('/',(req,res)=>{
    res.send("Connected");
})
app.use(cors({
    origin: [
        'http://localhost:3000', 'http://localhost:3001'
    ],
    credentials: true,
}))
const login=require('./route/authentication.js');
const registration=require('./route/register.js');
const appointment=require('./route/appointment.js');
const Statistic=require('./route/statistics.js');
app.use('/appointment',appointment)
app.use('/login',login); 
app.use('/registration',registration);
app.use('/statistics',Statistic);
const port=3002;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    connection.connect(function(err){
        if(err)console.log(err)
        else{
        console.log("connected to mysql")
        }
    })
});
