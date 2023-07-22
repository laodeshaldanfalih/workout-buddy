const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: String,
    reps: Number,
    load: Number,
},{timestamps: true});

module.exports = mongoose.model('Workout', workoutSchema);

