
const express = require('express');
const parser = require('body-parser');
const db = require("./api/db.js");
const path = require('path');
const compression = require('compression');
const port = process.env.port || 3000;


const server = express();
server.use(parser.json());
server.use(compression());
server.use(express.static('dist'));

server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(port, function(err){
    if (!err) 
        console.log('Express server is running on port ' + port);

    else 
        console.log(err);    
});

server.post('/api/register', function(req, res){
    const users = db.use("_users");
    users.insert({
        "_id": `org.couchdb.user:${req.body.userName}`,
        "type":"user",
        "name": req.body.userName,
        "roles":[],
        "password": req.body.userPassword
    }, function(error, body){
        res.send(error||body);
    })
});


