// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// API endpoint 
app.get("/api/", (req, res) => {
    dateOutput = new Date();
    res.json({
        unix: dateOutput.getTime(),
        utc: dateOutput.toUTCString()})
});
app.get("/api/:date", (req, res) => {
    // check user input
    console.log(dateInput);
    isNaN(dateInput)?dateOutput = new Date(dateInput):dateOutput = new Date(parseInt(dateInput));
    // convert date and build json
    const dateOutputUtc = dateOutput.toUTCString();
    if (dateOutputUtc == "Invalid Date") {
        res.json({error: dateOutputUtc})
    } else {
        res.json({
          unix: dateOutput.getTime(),
          utc: dateOutputUtc });
    };
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
