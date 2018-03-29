var express = require('express');
var app = express();
var port = 8000;

app.get('/', function(req, res) {
    res.json({
      unix: null,
      natural: null
    });
});

app.get('/:timestamp', function(req, res) {
    var timestamp = req.params.timestamp;
    /* If the parameter string (timestamp) is a number, create a new Date object using it, and return a json with the
       unix time and the natural date time using unixToNataralDate function */
    if(!isNaN(timestamp)) {
        var unixTimestamp = new Date(parseInt(timestamp));
        res.json({
            unix: parseInt(timestamp),
            natural: unixToNaturalDate(unixTimestamp)
        });
    }
    /* If the parameter string (timestamp) is not a number, create a new Date object using it, and test if the object
       can be converted to milliseconds using getTime().
       If it can, return a json with the unix time and the natural date time.
       If it can't, return a json with null values. */
    else {
        var testString = new Date(timestamp);
        if(!isNaN(testString.getTime())) {
            res.json({
                unix: parseInt(testString.getTime()),
                natural: timestamp
            });
        }
        res.json({
            unix: null,
            natural: null
        });
    }
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
})

/* Function taking in a unix time and returning a natural date time. The getMonth() function returns a number starting
   from 0 (0 = January), so we use an array to store the months. */
function unixToNaturalDate(timestamp) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = monthNames[timestamp.getMonth()];
    var date = timestamp.getDate();
    var year = timestamp.getFullYear();
    return (month + ' ' + date + ', ' + year);
}