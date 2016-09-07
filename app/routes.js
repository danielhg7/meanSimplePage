// grab the nerd model we just created
var User = require('./models/user');
var Course = require('./models/course');
var Level = require('./models/level');

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
        
        var user = new User();
        console.log(req.body);
        user.name = req.body.data.name;
        user.lastname = req.body.data.lastname;
        user.email = req.body.data.email;
        user.username = req.body.data.username;
        user.password = req.body.data.password;

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User Registered!' });
        });
        
    });

    app.post('/api/courses', function(req, res) {
        
        var course = new Course();
        course.name = req.body.name;
        course.numberOfLevels = req.body.numberOfLevels;
        course.creationDate = req.body.creationDate;

        for(var i=0; i<course.numberOfLevels; i++){
            var level = new Level();
            level.name = "Level " + i;
            level.courseName= course.name;
            level.numberOfTopics=5;

            level.save();
        }
        course.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Course Created!' });
        });
        
    });

    app.get('/api/courses', function(req, res) {
        console.log("Aqui estamos mijo");
        Course.find(function(err, courses) {
            if (err)
                 res.send(err);
 
            res.json(courses);
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