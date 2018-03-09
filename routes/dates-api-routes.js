var express = require("express");
var db = require("../models");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
//var date = require("../models/date.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    db.dates.findAll({
    }).then(function (dbdates) {
        var hbsObject = {
            date: dbdates
        };
        //console.log(hbsObject.date[1].name);
        res.render("index", hbsObject);
    });
});



router.get("/search/:gender", function (req, res) {
    console.log(req.params.gender);
    db.dates.findAll({
        where: {
            gender: req.params.gender
        }
    }).then(function (dbdates) {
        var hbsObject = {
            date: dbdates
        };
        //console.log(hbsObject);
        res.json(dbdates);
    });
});


router.get("/search/:name", function (req, res) {
    console.log(req.params.gender);
    db.dates.findOne({
        where: {
            name: req.params.name
        }
    }).then(function (dbdates) {
        var hbsObject = {
            date: dbdates
        };
        //console.log(hbsObject);
        res.json(dbdates);
    });
});

    // router.get("/search/:type", function (req, res) {
    //     console.log(req.params.type);
    //     db.dates.findAll({
    //         where: {
    //             traits: req.params.type
    //         }
    //     }).then(function (dbdates) {
    //         var hbsObject = {
    //             date: dbdates
    //         };
    //         //console.log(hbsObject);
    //         res.json(dbdates);
    //     });
    // });

    //     router.get("/search/:tier", function (req, res) {
    //         console.log(req.params.tier);
    //         db.dates.findAll({
    //             where: {
    //                 tier: req.params.tier
    //             }
    //         }).then(function (dbdates) {
    //             var hbsObject = {
    //                 date: dbdates
    //             };
    //             //console.log(hbsObject);
    //             res.json(dbdates);
    //         });
    // });



// router.post("/api/cats", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;