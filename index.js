'USE STRICT';

// Importing libraries
const express = require('express');
const path = require('path');
const ip = require('ip');
const hbs = require('hbs');

// Clearing the console
console.clear();

// Instanciating our express app
const app = express();

try {

    // Configurating our envariables
    const dotenv = require('dotenv');
    dotenv.config();

    // Setting HBS as distributer
    app.set('view engine', 'hbs');

    // Setting static datas
    app.use(express.static(path.join(__dirname, 'public')));

    // Setting templates
    hbs.registerPartials(path.join(__dirname, 'templates'));

    // Web Middleware
    const web = require('./pages/web');

    // Serving the public html pages
    app.use('/', web);

    // Importing data from .env file
    let port = process.env.PORT || 3000;
    let host = process.env.HOST || 'localhost';

    //Exposing data
    app.listen(port, host, () => {
        // Releasing the data
        let ipAddress = ip.address();
        console.log(`\nApp accessible @\n- http://${host}:${port}\n- http://${ipAddress}:${port}`);
    });

} catch (error) {
    console.error('Error @ INDEX.JS: ' + error);
}