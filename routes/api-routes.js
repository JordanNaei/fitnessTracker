//requiring the dependecies
const Workout = require("../models/workout")
module.exports = (app) => {

    // get the last workout by sedning all the workouts and at the front end they are displaying the last entry of the array which represnt the Last workout
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                // Added this piece to ensure that the get route will get the total duration since it is not client delivered
                dbWorkout.forEach(workout => {
                    let sumDuration = 0;
                    workout.exercises.forEach(exercise => {
                        sumDuration += exercise.duration;
                    });
                    workout.totalDuration = sumDuration;
                });
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });

    // Add exercise also added the {new: true} to return the updated record not the old record before the updates
    app.put("/api/workouts/:id", (req, res) => {

        Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });

    //create workout through the post route and handle the ingestion of the total duration
    app.post("/api/workouts", ({ body }, res) => {
        const workouts = new Workout(body);
        (workouts) => {
            workouts.forEach(workout => {
                let sumDuration = 0;
                workout.exercises.forEach(exercise => {
                    sumDuration += exercise.duration;
                });
                workout.totalDuration = sumDuration;
            });
        }
        Workout.create(workouts).then((workoutdb => {
            console.log(workoutdb);
            res.json(workoutdb);
        })).catch(err => {
            res.json(err);
        });
    });

    // get workouts in range, meaning respond with all the documents within our collection
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });


}