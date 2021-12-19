'USE STRICT';

// Importing libraries
const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');

// Configurating our envariables
dotenv.config();

// Static strings
const connectionString = process.env.CSTRING;
const artistsString = process.env.ARTISTS_DB;
const songsString = process.env.SONGS_DB;

// Creating the router
const router = express.Router();

// File reader
const readData = (path, callback) => {
    if(!path) throw new Error("Path in readData is empty. Path should not be empty");
    if(!callback) throw new Error("Callback in readData is empty. Callback should not be empty");
    fs.readFile(`./${connectionString}/${path}`, callback);
};


try {

    // Get all songs
    router.get('/songs', async (req, res) => {

        // Retrieving artists from table artists in db
        readData(artistsString, (err, artists) => {
            // If error, throw it
            if (err) throw err;

            // If no error, parse data to JSON
            artists = JSON.parse(artists)["data"];

            // Retrieving songs from table songs in db
            readData(songsString, (err, songs) => {
                // If error, throw it
                if (err) throw err;

                // If no error, parse data to JSON
                songs = JSON.parse(songs)["data"];

                //Manipulate data
                var refactoredData = [];
                songs.forEach(song => {
                    artists.forEach(artist => {
                        if(song["artist"] == artist["uuid"]) {
                            song["artist"] = artist["name"];
                        }
                    });
                    refactoredData.push(song);
                });

                // Send response with new Data
                res.status(200).send({
                    songs: refactoredData
                });
            });
        });
    });

    // Get all artists
    router.get('/artists', async (req, res) => {
        // Retrieving artists from table artists in db
        readData(artistsString, (err, artists) => {
            // If error, throw it
            if (err) throw err;

            // If no error, parse data to JSON
            artists = JSON.parse(artists)["data"];

            // Send response with Data
            res.status(200).send({
                artists: artists
            });
        });
    });

    // Get songs by search
    router.get('/search', async (req, res) => {
        res.status(200).send({
            id: 15,
            name: 'John',
        });
    });

} catch (error) {
    console.error("Error @ API.JS: " + error);
}

module.exports = router;