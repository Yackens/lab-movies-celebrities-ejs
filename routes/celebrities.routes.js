const Celebrity = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity");
});

router.post("/create", async(req, res) => {
    console.log(req.body);
    try {
        const newCelebrity = await Celebrity.create(req.body);
        console.log("Created Celebrity", newCelebrity);
        res.redirect("/celebrities")

    } catch(error) {
        res.render("/celebrities/new-celebrity");
        console.log(error);
    }
});

router.get("/", async(req, res) => {
    try {
        const celebrities = await Celebrity.find();
        console.log("Created celebrity", celebrities);
        res.render("celebrities/celebrities", { celebrities });

    } catch(error) {
        console.log(error);
    }
});

module.exports = router
