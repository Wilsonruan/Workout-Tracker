const Workout = require("../models/transaction");
const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .sort({ day: -1})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
})

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body }})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
})

module.exports = router;