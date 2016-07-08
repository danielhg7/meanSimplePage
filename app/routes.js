// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require('./models/user');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        console.log("Paso por aqui")
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
                            // nothing after res.send(err) will execute
            console.log("Paso por aca")

            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    app.post('/api/nerds', function(req, res) {
        
        var nerd = new Nerd();      // create a new instance of the Bear model
        nerd.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        nerd.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Nerd created!' });
        });
        
    });

    app.post('/signin', function(req, res) {
        
        var user = new User();  // create a new instance of the Bear model
        console.log(req.body);
        user.name = req.body.user.name;
        user.password = 'default';  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User Registered!' });
        });
        
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};