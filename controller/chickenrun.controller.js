const db = require("../models");
const Chickenrun = db.chickenrun;
const Farm = db.farm;

// Create and Save a new Chicken
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ 
      message: "Content can not be empty!" 
      });
    return;
  }

  // Create a Chicken
  const chicken = new Chickenrun({
    name: req.body.name,
    birthday: req.body.birthday,
    weight: req.body.weight,
    steps: req.body.steps,
    isRunning: req.body.isRunning ? req.body.isRunning : false
  });

  // Save Chicken in the database
  chicken
    .save(chicken)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Retrieve all Chickens from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Chickenrun.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Find a single Chicken with an id
exports.findByName = (req, res) => {
  const name = req.params.name;

  Chickenrun.find({name: name})
    .then(data => {
      if (!data)
        res.status(404).send({ 
          message: "Error 404"
      });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Update a Chicken by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Chickenrun.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Error 404"
        });
      } else res.send({ 
        message: "The chicken was updated successfully." 
        });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Delete a Chicken with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chickenrun.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Error 404"
        });
      } else {
        res.send({
          message: "The chicken was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Delete all Chickens from the database.
exports.deleteAll = (req, res) => {
  Chickenrun.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Chickens were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Find all published Chickens
exports.findAllRunning = (req, res) => {
  Chickenrun.find({ isRunning: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

exports.chickenrun = (req, res) => {
  const id = req.params.id;

  Chickenrun.findByIdAndUpdate(id, 
  {
    $set: {'isRunning' : true},
    $inc: {'steps': 1}
    
  } , { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: "Error 404"
        });
      } else {
        res.send({
          message: "Chicken run!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};

// Create and Save a new Chicken
exports.createfarm = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ 
      message: "Content can not be empty!" 
      });
    return;
  }

  // Create a Chicken
  const farm = Farm({
    name: req.body.name,
  });

  // Save Chicken in the database
  farm
    .save(farm)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error 500"
      });
    });
};