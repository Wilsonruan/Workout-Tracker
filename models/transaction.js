const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  day: {
      type: Date,
      default: () => new Date()
  },
  exercises: [
      {
          type: {
              type: String,
              trim: true,
              required: "Please enter an exercise type"
          },
          name: {
              type: String,
              trim: true,
              required: "Please enter an exercise name"
          },
          duration: {
              type: Number,
              trim: true,
              required: "Please enter a duration of workout"
          },
          weight: {
              type: Number,
              trim: true
          },
          reps: {
              type: Number,
              trim: true
          },
          sets: {
              type: Number,
              trim: true
          },
          distance: {
              type: Number,
              trim: true
          }
      }
  ]
},
{
  toJSON:{virtuals: true}
}
);

transactionSchema.virtual("totalDuration").get( function() {
  return this.exercises.reduce((total, exercise) => {
      return total+exercise.duration;
  }, 0)
});
  
  const Transaction = mongoose.model("Transaction", transactionSchema);
  
  module.exports = Transaction;