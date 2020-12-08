//  This is all the api routes
const db = require('../models')
module.exports = (app) => {

    // Get the last workout
    // app.get("/api/workouts", (req, res) => {
    //     db.Workout.find({})
    //     .then(dbWorkout => {
    //         dbWorkout.forEach(workout => {
    //             var total = 0;
    //             workout.exercises.forEach(e => {
    //                 total += e.duration;
    //             });
    //             workout.totalDuration = total;
    //         });
    //         res.json(dbWorkout);
    //     }).catch(err => {
    //         res.json(err);
    //     });
    // });

    app.get("/api/workouts",function(req,res){  
        db.Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    // Add exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
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

    //create workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

    });


}