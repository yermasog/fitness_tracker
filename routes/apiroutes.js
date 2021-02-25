const db = require("../models");
const app = require("express").Router();

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.post("/api/workouts", function(req,res) {
      db.Workout.create(req.body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  })

module.exports = app
