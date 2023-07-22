// dotnev
require("dotenv").config();

// express lib
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const Workout = require("./models/workoutsModel");

// mongoose lib
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("database connected");

    //listen for request 
    app.listen(process.env.PORT, ()=>{
        console.log("listening on port",process.env.PORT);
    });
})
.catch((err)=>{
    console.log(err);
})

// express app
const app = express();

// midldlewere
app.use(express.json());

// routes  
app.use('/api/workouts', workoutRoutes);

