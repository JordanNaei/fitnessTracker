# fitnessTracker Application

![GitHub license](https://img.shields.io/badge/Made%20by-%40Eng.JordanNaei-orange)
![License](https://img.shields.io/badge/License-ISC-blue.svg "License Badge")

# Description

This application is designed to create a workout tracker where client will be able to track their exercises, create new exercises, and add a new exercise to already created workouts.

# Application Image

![Application main screen](https://github.com/JordanNaei/fitnessTracker/blob/main/public/img/app1.PNG?raw=true)

<hr>

![Application Stat Page](https://github.com/JordanNaei/fitnessTracker/blob/main/public/img/app2.PNG?raw=true)

<hr>

![Application excercise Page](https://github.com/JordanNaei/fitnessTracker/blob/main/public/img/app3.PNG?raw=true)

<hr>

- [Application URL](https://thawing-depths-68958.herokuapp.com/)

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

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan (pass)

  * Add new exercises to a new workout plan (pass)

  * View the combined weight of multiple exercises on the `stats` page.(The front end code provided does not meet this requirments)

# Repository

- [Project Repo](https://github.com/JordanNaei/fitnessTracker)