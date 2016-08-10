// grab the nerd model we just created
var User = require('./models/user');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.get('/signin', function(req, res) {
        
        var user = new User();  // create a new instance of the Bear model
        console.log(req.body);
        user.username = req.body.username;
        user.password = req.body.password;  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.find(function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'User Logged In!' });
        });
        
    });

    app.post('/register', function(req, res) {
        
        var user = new User();  // create a new instance of the Bear model
        console.log(req.body);
        user.name = req.body.data.name;
        user.lastname = req.body.data.lastname;
        user.email = req.body.data.email;
        user.username = req.body.data.username;
        user.password = req.body.data.password;  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User Registered!' });
        });
        
    });

    app.post('/courses', function(req, res) {
        
        var course = new Course();  // create a new instance of the Bear model
        console.log(req.body);
        course.name = req.body.data.name;
        course.lastname = req.body.data.numberOfModules;
        course.flag = req.body.data.flag;

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Course Created!' });
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