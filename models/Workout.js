const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default:  new Date()
},
  excercise: [
    {
        name : String, 
        type : String, 
        weight : Number, 
        sets : Number, 
        reps : Number, 
        duration : Number
    }
  ]
});

// add calc total weight
Workout.method.calcTotalWeight = function(){
  this.totalWeight = this.excercise.reduce /*(find sum of wight)*/
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
