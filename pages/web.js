'USE STRICT';

// Importing libraries
const express = require('express');
const router = express.Router();

try {
    // Serving routes
    router.get('/', async (req, res) => {
        res.render('index');
    });

    // Serving in case unknown routes
    router.get('*', async (req, res) => {
        res.status(404).send('<h1>Error 404: Page not Found</h1>');
    });

} catch (error) {
    console.error("Error @ WEB.JS: " + error);
}

module.exports = router;