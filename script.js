var express = require('express');
var app = express();
var port = 8000;

function unixToNaturalDate(timestamp) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = monthNames[timestamp.getMonth()];
    var date = timestamp.getDate();
    var year = timestamp.getFullYear();
    return (month + ' ' + date + ', ' + year);
}

app.get('/:timestamp', function(req, res) {
    var timestamp = req.params.timestamp;
    if(!isNaN(timestamp)) {
        var unixTimestamp = new Date(parseInt(timestamp));
        res.json({
            unix: parseInt(timestamp),
            natural: unixToNaturalDate(unixTimestamp)
        });
    }
    else {
        var testString = new Date(timestamp);
        if(!isNaN(testString.getTime())) {
            res.json({
                unix: parseInt(testString.getTime()),
                natural: timestamp
            });
        }
    }
    res.json({
        unix: null,
        natural: null
    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
})