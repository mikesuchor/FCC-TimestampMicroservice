# FCC-TimestampMicroservice
FreeCodeCamp Timestamp Microservice Project

## User Stories:
- [x] I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- [x] If it does, it returns both the Unix timestamp and the natural language form of that date.
- [x] If it does not contain a date or Unix timestamp, it returns null for those properties.

### Code

```var express = require('express');
var app = express();
var port = 8000;
```

