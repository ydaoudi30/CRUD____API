module.exports = app => {
  const chickenrun = require("../controller/chickenrun.controller.js");
  const farm = require("../controller/chickenrun.controller.js");

  var router = require("express").Router();

  // Create a new chicken
  router.post("/", chickenrun.create);

  // Create a new farm
  router.post("/farm", farm.createfarm);

   // Retrieve all running chickens
  router.get("/running", chickenrun.findAllRunning);

  // Retrieve all chickens
  router.get("/", chickenrun.findAll);

  // Retrieve a chicken by name
  router.get("/:name", chickenrun.findByName);

  // Update a chicken by id
  router.put("/:id", chickenrun.update);

   // Delete all chickens
  router.delete("/", chickenrun.deleteAll);

  // Delete a chicken by id
  router.delete("/:id", chickenrun.delete);

  // Make a chicken run by id
  router.patch("/run/:id", chickenrun.chickenrun);

  app.use('/api/chickenrun', router);
};