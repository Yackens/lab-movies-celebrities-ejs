const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
router.get("/create", async (req, res) => {
    try {
        const celebrities = await Celebrity.find();
        res.render("movies/new-movie", {celebrities});
    }
    catch(error) {
        console.log(error);
    }
});

router.post("/create", async(req, res) => {
    console.log(req.body);
    try {
        const newMovies = await Movie.create(req.body);
        console.log("Created movies", newMovies);
        res.redirect("/movies")

    } catch(error) {
        res.render("/movies/new-movie");
        console.log(error);
    }
});

router.get("/", async(req, res) => {
    try {
        const movies = await Movie.find();
        console.log("Created movies", movies);
        res.render("movies/movies", { movies });

    } catch(error) {
        console.log(error);
    }
});

module.exports = router
