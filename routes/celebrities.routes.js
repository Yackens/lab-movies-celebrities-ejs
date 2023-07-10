const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// GET/POST
router.get("/", (req, res) => {
    res.send("Celebrity Route");
});

router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/create", async(req, res) => {
    try {
        const newCelebrity = await Celebrity.create(req.body);
        console.log("Created Celebrity", newCelebrity);
        res.redirect("/celebrities")

    } catch(error) {
        res.render("/celebrities/new-celebrity");
        console.log(error);
    }
});

router.get("/"), async(req, res) => {
    try {
        const newCelebrity = await Celebrity.find();
        console.log("Created celebrity", newCelebrity);
        res.render("celebrities/celebrities", { celebrities });

    } catch(error) {
        console.log(error);
    }
}

module.exports = router