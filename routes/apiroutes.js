const db = require("../models");
const app = require("express").Router();

  app.get("/api/exercise", function(req, res) {
    db.Workout.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

module.exports = app
