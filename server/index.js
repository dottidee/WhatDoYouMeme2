const express = require('express');
//express is how you use node libraries
const path = require('path');
const usersController = require('./controllers/users');


const app = express();
const port = 3000;

app
    .use(function(req, res, next){
        //logging function
        req.params, req.body, req.url, req.query, req.headers
        console.log(req.params, req.body, req.url, req.query, req.headers            );
        next();
    })
    .use('/static', express.static(path.join(__dirname, '../NoFramework')))
    //use similar to get but use will respond to anything, get only uses get functions
    //we use 'use' when our intention is more complex

    //express static needs a folder to look inside in this case the folder is /noframework
    

    //if client send message w the verb/function get
    .get (  '/', 
        //and with path '/', then do this
            (req, res) => res.send('Hello World!!!!')
        )
    .get (  '/heb', 
        //with path /heb do this
            function(req, res) {
                 res.send({msg: 'Shalom World!!!!'})
            }//fat arrow is shorthand for this 
            //asynchronous means it wont wait for function to return before moving on 
            //in networking you are sending a msg to a server the server knows which programs is which is port numbers
        )
    .use('/users', usersController);

app.listen(port, //OS holds script open and sends port number to it
    () => console.log(`Running on http://localhost:${port}`));