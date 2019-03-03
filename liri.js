require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var operator= process.argv[2];
var term = process.argv.slice(3).join(" ");

switch(operator) {
    case 'concert-this':
        // search the "Bands in Town Artist Events API"
            // Name of venue
            // Venue Location
            // Date of the Event (use moment - 'MM/DD/YYYY)
        break;
    case 'spotify-this-song':
        // Use the node-spotify-api package to retrieve song info
            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
        // if no song is provided, default to "The Sign" by Ace of Base
        break;
    case 'movie-this':
        // Use axios package to retrieve data from OMDB API
            // Title of the movie
            // Year the movie came out
            // IMDP Rating of the movie
            // Rotten Tomatoes
            // Contry where the movie was produced
            // Language of the movie
            // Plot of the movie
            // Actors in the movie
        // if no movie provided, output data for 'Mr. Nobody'
        break;
    case 'do-what-it-says':
        // using the fs Node package, Liri will take the text inside random.txt & call one of Liri's commands
        break;
}