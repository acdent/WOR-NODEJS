// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res){
       res.render('index');
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home',
        failureRedirect: '/index'
    }));


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });






app.get("/home", function(req, res) {
    res.render('/home');
});

//add handlers for searching inventory, receiving, rug history
    app.get("/inventory", function(request, response) {

    });
//add handlers for new sales, editing
    app.get("/sales", function(request, response) {

    });
//add handlers for daily reports, monthly reports, payroll
    app.get("/reports", function(request, response) {

    });
//Not sure, maybe just handlers for adding new designers. in the future, maybe designer sales.
    app.get("/designers", function(req, res) {

    });
//add handlers for collections, styles, colors (in the future), classifications, RIDs
    app.get("/catalog", function(req, res) {

    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}