/*******************************************************************************
 * 
 *******************************************************************************/
// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:5000
const app = express();
const routes = require('./routes/prove01-routes');

app
    // .use(bodyParser({ extended: false })) // For parsing the body of a POST
    .use(express.urlencoded({
        extended: true
      }))
    .use('', routes)
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
