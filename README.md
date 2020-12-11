# fitnessTracker Application

![GitHub license](https://img.shields.io/badge/Made%20by-%40Eng.JordanNaei-orange)
![License](https://img.shields.io/badge/License-ISC-blue.svg "License Badge")

# Description

This application is designed to create a workout tracker where client will be able to track their exercises, add new exercises, and add a new exercise to already created workouts.

# Application Image

![Application main screen]()

<hr>

![Application Stat Page]()

<hr>

![Application excercise Page]()

<hr>

- [Application URL](https://still-island-50748.herokuapp.com/)

## Technologies and Frameworks Used

- Node.js.
- Express.
- Mongo db.
- Mongoose.

# Installation

- Run npm i.
- Run node server.js.

# Database Design

Schema({
day: {
type: Date,
default: Date.now
},
exercises: [
{
type: {
type: String,
trim: true,
},
name: {
type: String,
trim: true,
},
duration: Number,
weight: {
type: Number,
default: 0
},
reps: {
type: Number,
default: 0
},
sets: {
type: Number,
default: 0
},
distance: {
type: Number,
default: 0
}
}
],
totalDuration: Number,
});

# Application Requirements



# Commit Notice

Our Team had issues with commiting code, and due to time constraint we took rather unorthodox way to commit.

# Repository

- [Project Repo](https://github.com/JordanNaei/passiveIncome)
