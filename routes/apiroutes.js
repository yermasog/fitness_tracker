const db = require("../models");
const app = require("express").Router();

  app.get("/api/workouts", function(req, res) {
    console.log("this is the result:", req.body);
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    }).catch(err => {
      res.json(err);
    }); 
  });

  app.post("/api/workouts", function({body},res) {
    console.log("this is the result", body);
      db.Workout.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", function(req,res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    }).catch(err => {
      res.json(err);
    }); 
  })

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate(
      {_id: req.params.id}, {"$push" : { exercises: req.body}}
    ).then(dbWorkouts => {
      res.json(dbWorkouts);
    }).catch(err => {
      res.json(err);
    }); 
  })

 
module.exports = app
