const express = require('express');
const app = express();
const api = require('./server/api/api');
const errorMessages = require('./server/util/utils');
// setup the app middlware
require('./server/middleware/appMiddlware')(app);

// setup the api
app.use('/api', api);
// set up global error handling

app.use(function(err, req, res, next) {
    if(err.message!=null && err.message === errorMessages.unsupportedCompany){
        res.status(400).json({"Message" : err.message});
        return;
    }
    // if error thrown from jwt validation check
    if (err.includes('401')) {
        res.status(401).json({"Message" : err});
        return;
    }
    res.status(500).json({"Message" : err});
});

// export the app for testing
module.exports = app;
